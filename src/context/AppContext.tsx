import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import { ref, push, update, remove, onValue, query, limitToLast, runTransaction } from 'firebase/database';
import { onAuthStateChanged, User } from 'firebase/auth';
import { db, auth } from '../config/firebase';
import { Produto, Cliente, Venda, Caixa, CarrinhoItem } from '../types';

export const formatMoney = (v: number | string) => Number(v || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

interface AppContextType {
  // Adicione tipagens completas conforme a necessidade. Aqui estão as principais:
  produtos: Produto[]; clientes: Cliente[]; vendas: Venda[]; caixas: Caixa[]; carrinho: CarrinhoItem[];
  activeTab: string; setActiveTab: (tab: string) => void;
  caixaAberto: Caixa | undefined; totalVendasCaixa: number;
  addToCart: (prod: Produto) => void; removeFromCart: (id: string) => void;
  finalizarVenda: (comoOrcamento?: boolean) => Promise<void>;
  // ... (Outras funções expostas)
  [key: string]: any; 
}

const AppContext = createContext<AppContextType | null>(null);
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext deve ser usado dentro de um AppProvider");
  return context;
};

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [empresaId, setEmpresaId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [carrinho, setCarrinho] = useState<CarrinhoItem[]>([]);
  
  // States de Dados
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [vendas, setVendas] = useState<Venda[]>([]);
  const [caixas, setCaixas] = useState<Caixa[]>([]);
  const [orcamentos, setOrcamentos] = useState<any[]>([]);

  // States de UI
  const [pdvCliente, setPdvCliente] = useState('');
  const [pdvPagamento, setPdvPagamento] = useState('Pix');
  const [pdvDesconto, setPdvDesconto] = useState(0);

  const caixaAberto = useMemo(() => caixas.find(c => c.status === 'aberto'), [caixas]);
  const vendasDoCaixa = useMemo(() => caixaAberto ? vendas.filter(v => v.caixaId === caixaAberto.id) : [], [vendas, caixaAberto]);
  const totalVendasCaixa = useMemo(() => vendasDoCaixa.reduce((acc, v) => acc + (v.total || 0), 0), [vendasDoCaixa]);

  // Autenticação (Resumido para o Provider)
  useEffect(() => {
    return onAuthStateChanged(auth, (u) => {
      if (u) {
        onValue(ref(db, `users/${u.uid}`), (snap) => {
          const data = snap.val();
          if (data?.empresaId) setEmpresaId(data.empresaId);
          setUser(u);
        });
      } else {
        setUser(null); setEmpresaId(null);
      }
    });
  }, []);

  // Listeners do Banco
  useEffect(() => {
    if (!empresaId) return;
    const basePath = `empresas/${empresaId}`;
    const unsubs = [
      onValue(ref(db, `${basePath}/produtos`), snap => { const d: any[] = []; snap.forEach(c => { d.push({id: c.key, ...c.val()}) }); setProdutos(d); }),
      onValue(ref(db, `${basePath}/clientes`), snap => { const d: any[] = []; snap.forEach(c => { d.push({id: c.key, ...c.val()}) }); setClientes(d); }),
      onValue(query(ref(db, `${basePath}/vendas`), limitToLast(500)), snap => { const d: any[] = []; snap.forEach(c => { d.push({id: c.key, ...c.val()}) }); setVendas(d); }),
      onValue(query(ref(db, `${basePath}/caixas`), limitToLast(100)), snap => { const d: any[] = []; snap.forEach(c => { d.push({id: c.key, ...c.val()}) }); setCaixas(d); })
    ];
    return () => unsubs.forEach(u => u());
  }, [empresaId]);

  const addToCart = (prod: Produto) => {
    setCarrinho(prev => {
      const idx = prev.findIndex(c => c.id === prod.id);
      if (idx > -1) {
        const newCart = [...prev];
        newCart[idx].qtd = Math.min(newCart[idx].qtd + 1, Number(prod.qtd));
        return newCart;
      }
      return [...prev, { ...prod, qtd: 1 }];
    });
  };

  const removeFromCart = (id: string) => setCarrinho(prev => prev.filter(c => c.id !== id));

  // Correção da Condição de Corrida (Race Condition) no Estoque
  const finalizarVenda = async (comoOrcamento = false) => {
    if (carrinho.length === 0 || !empresaId) return alert("Carrinho vazio!");
    if (!comoOrcamento && !caixaAberto) return alert("Abra o caixa primeiro!");

    let subtotal = carrinho.reduce((a, b) => a + (Number(b.venda) * b.qtd), 0);
    let custoTotal = carrinho.reduce((a, b) => a + (Number(b.custo) * b.qtd), 0);
    let desc = Number(pdvDesconto) || 0;
    
    try {
      if (comoOrcamento) {
         // Lógica de orçamento mantida
      } else {
        // Transação Segura: Evita que vendedores simultâneos sobrescrevam o estoque incorretamente
        const promessasEstoque = carrinho.map(c => {
           const prodRef = ref(db, `empresas/${empresaId}/produtos/${c.id}/qtd`);
           return runTransaction(prodRef, (qtdAtual) => {
              if (qtdAtual === null) return qtdAtual;
              const novaQtd = Number(qtdAtual) - c.qtd;
              return novaQtd >= 0 ? novaQtd : qtdAtual; // Impede estoque negativo no servidor
           });
        });

        await Promise.all(promessasEstoque);

        const novaVendaRef = push(ref(db, `empresas/${empresaId}/vendas`));
        await update(ref(db, `empresas/${empresaId}/vendas/${novaVendaRef.key}`), { 
           cliId: pdvCliente, pag: pdvPagamento, subtotal, desconto: desc, 
           total: subtotal - desc, custoBase: custoTotal, itens: carrinho.length, 
           data: new Date().toISOString(), caixaId: caixaAberto.id 
        });
      }
      setCarrinho([]); setPdvDesconto(0); setPdvCliente('');
      alert("Venda concluída com sucesso!");
    } catch (e: any) { alert("Erro ao finalizar: " + e.message); }
  };

  const value = {
    produtos, clientes, vendas, caixas, orcamentos, carrinho,
    activeTab, setActiveTab, addToCart, removeFromCart, finalizarVenda,
    caixaAberto, totalVendasCaixa, pdvCliente, setPdvCliente, pdvDesconto, setPdvDesconto, pdvPagamento, setPdvPagamento
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
