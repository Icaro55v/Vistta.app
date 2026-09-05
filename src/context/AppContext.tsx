import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import { ref, push, update, onValue, query, limitToLast, runTransaction } from 'firebase/database';
import { onAuthStateChanged, User } from 'firebase/auth';
import { db, auth } from '../config/firebase';
import { Produto, Cliente, Venda, Caixa, CarrinhoItem } from '../types';

export const formatMoney = (v: number | string) => Number(v || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

interface AppContextType {
  user: User | null;
  loadingAuth: boolean;
  userRole: string | null;
  empresaId: string | null;
  produtos: Produto[];
  clientes: Cliente[];
  vendas: Venda[];
  caixas: Caixa[];
  orcamentos: any[];
  fornecedores: any[];
  contas: any[];
  categorias: any[];
  usuarios: any[];
  carrinho: CarrinhoItem[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
  caixaAberto: Caixa | undefined;
  totalVendasCaixa: number;
  addToCart: (prod: Produto) => void;
  removeFromCart: (id: string) => void;
  finalizarVenda: (comoOrcamento?: boolean) => Promise<void>;
  pdvCliente: string;
  setPdvCliente: (id: string) => void;
  pdvDesconto: number;
  setPdvDesconto: (v: number) => void;
  pdvPagamento: string;
  setPdvPagamento: (p: string) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext deve ser usado dentro de um AppProvider");
  return context;
};

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [empresaId, setEmpresaId] = useState<string | null>(null);
  
  const [activeTab, setActiveTab] = useState('dashboard');
  const [carrinho, setCarrinho] = useState<CarrinhoItem[]>([]);
  
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [vendas, setVendas] = useState<Venda[]>([]);
  const [caixas, setCaixas] = useState<Caixa[]>([]);
  const [orcamentos, setOrcamentos] = useState<any[]>([]);
  const [fornecedores, setFornecedores] = useState<any[]>([]);
  const [contas, setContas] = useState<any[]>([]);
  const [categorias, setCategorias] = useState<any[]>([]);
  const [usuarios, setUsuarios] = useState<any[]>([]);

  const [pdvCliente, setPdvCliente] = useState('');
  const [pdvPagamento, setPdvPagamento] = useState('Pix');
  const [pdvDesconto, setPdvDesconto] = useState(0);

  const caixaAberto = useMemo(() => caixas.find(c => c.status === 'aberto'), [caixas]);
  const vendasDoCaixa = useMemo(() => caixaAberto ? vendas.filter(v => v.caixaId === caixaAberto.id) : [], [vendas, caixaAberto]);
  const totalVendasCaixa = useMemo(() => vendasDoCaixa.reduce((acc, v) => acc + (v.total || 0), 0), [vendasDoCaixa]);

  // Autenticação e Perfis
  useEffect(() => {
    return onAuthStateChanged(auth, (u) => {
      if (u) {
        onValue(ref(db, `users/${u.uid}`), (snap) => {
          const data = snap.val();
          if (data?.empresaId) {
            setEmpresaId(data.empresaId);
            setUserRole(data.role || 'vendedor');
          }
          setUser(u);
          setLoadingAuth(false);
        });
      } else {
        setUser(null);
        setEmpresaId(null);
        setUserRole(null);
        setLoadingAuth(false);
      }
    });
  }, []);

  // Listeners das Coleções no Banco de Dados
  useEffect(() => {
    if (!empresaId) return;
    const basePath = `empresas/${empresaId}`;
    
    const collections = [
      { name: 'produtos', setter: setProdutos, queryRef: ref(db, `${basePath}/produtos`) },
      { name: 'clientes', setter: setClientes, queryRef: ref(db, `${basePath}/clientes`) },
      { name: 'fornecedores', setter: setFornecedores, queryRef: ref(db, `${basePath}/fornecedores`) },
      { name: 'contas', setter: setContas, queryRef: ref(db, `${basePath}/contas`) },
      { name: 'categorias', setter: setCategorias, queryRef: ref(db, `${basePath}/categorias`) },
      { name: 'usuarios', setter: setUsuarios, queryRef: ref(db, `${basePath}/usuarios`) },
      { name: 'orcamentos', setter: setOrcamentos, queryRef: ref(db, `${basePath}/orcamentos`) },
      { name: 'vendas', setter: setVendas, queryRef: query(ref(db, `${basePath}/vendas`), limitToLast(500)) },
      { name: 'caixas', setter: setCaixas, queryRef: query(ref(db, `${basePath}/caixas`), limitToLast(100)) }
    ];

    const unsubs = collections.map(col => {
      return onValue(col.queryRef, (snapshot) => {
        const data: any[] = [];
        snapshot.forEach((child) => { data.push({ id: child.key, ...child.val() }); });
        col.setter(data);
      });
    });

    return () => unsubs.forEach(u => u());
  }, [empresaId]);

  // Funções do PDV
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

  const finalizarVenda = async (comoOrcamento = false) => {
    if (carrinho.length === 0 || !empresaId) return alert("Carrinho vazio!");
    if (!comoOrcamento && !caixaAberto) return alert("Abra o caixa primeiro!");

    let subtotal = carrinho.reduce((a, b) => a + (Number(b.venda) * b.qtd), 0);
    let custoTotal = carrinho.reduce((a, b) => a + (Number(b.custo) * b.qtd), 0);
    let desc = Number(pdvDesconto) || 0;
    
    try {
      if (comoOrcamento) {
         if(!pdvCliente) return alert("Selecione um cliente para salvar o orçamento!");
         await push(ref(db, `empresas/${empresaId}/orcamentos`), {
            cliId: pdvCliente, subtotal, desconto: desc, total: subtotal - desc,
            itens: carrinho.map(c => ({ id: c.id, marca: c.marca, modelo: c.modelo, qtd: c.qtd, venda: c.venda })),
            data: new Date().toISOString(), status: 'pendente'
         });
      } else {
        const promessasEstoque = carrinho.map(c => {
           const prodRef = ref(db, `empresas/${empresaId}/produtos/${c.id}/qtd`);
           return runTransaction(prodRef, (qtdAtual) => {
              if (qtdAtual === null) return qtdAtual;
              const novaQtd = Number(qtdAtual) - c.qtd;
              return novaQtd >= 0 ? novaQtd : qtdAtual;
           });
        });

        await Promise.all(promessasEstoque);

        const novaVendaRef = push(ref(db, `empresas/${empresaId}/vendas`));
        await update(ref(db, `empresas/${empresaId}/vendas/${novaVendaRef.key}`), { 
           cliId: pdvCliente, pag: pdvPagamento, subtotal, desconto: desc, 
           total: subtotal - desc, custoBase: custoTotal, itens: carrinho.length, 
           data: new Date().toISOString(), caixaId: caixaAberto?.id 
        });
      }
      setCarrinho([]); setPdvDesconto(0); setPdvCliente('');
      alert(comoOrcamento ? "Orçamento salvo!" : "Venda concluída com sucesso!");
    } catch (e: any) { alert("Erro ao finalizar: " + e.message); }
  };

  const value = {
    user, loadingAuth, userRole, empresaId,
    produtos, clientes, vendas, caixas, orcamentos, carrinho,
    fornecedores, contas, categorias, usuarios,
    activeTab, setActiveTab, addToCart, removeFromCart, finalizarVenda,
    caixaAberto, totalVendasCaixa, pdvCliente, setPdvCliente, pdvDesconto, setPdvDesconto, pdvPagamento, setPdvPagamento
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};