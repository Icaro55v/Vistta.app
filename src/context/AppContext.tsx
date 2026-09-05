import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import { ref, push, update, remove, onValue, query, limitToLast, orderByChild, startAt, runTransaction, get } from 'firebase/database';
import { onAuthStateChanged, User } from 'firebase/auth';
import { db, auth } from '../config/firebase';
import { Produto, Cliente, Venda, Caixa, CarrinhoItem, Orcamento } from '../types';

export const formatMoney = (v: number | string) => Number(v || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

interface AppContextType {
  user: User | null;
  loadingAuth: boolean;
  userRole: string | null;
  empresaId: string | null;
  dadosEmpresa: { nome?: string } | null;
  produtos: Produto[];
  clientes: Cliente[];
  vendas: Venda[];
  caixas: Caixa[];
  orcamentos: Orcamento[];
  fornecedores: any[];
  contas: any[];
  categorias: any[];
  usuarios: any[];
  carrinho: CarrinhoItem[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
  pdvSearch: string;
  setPdvSearch: (value: string) => void;
  abrirCaixa: (valorInicial: number) => Promise<void>;
  fecharCaixa: () => Promise<void>;
  salvarProduto: (data: Partial<Produto>, id?: string) => Promise<void>;
  excluirProduto: (id: string) => Promise<void>;
  salvarCliente: (data: Partial<Cliente>, id?: string) => Promise<void>;
  excluirCliente: (id: string) => Promise<void>;
  salvarCadastro: (collection: string, data: Record<string, any>, id?: string) => Promise<void>;
  excluirCadastro: (collection: string, id: string) => Promise<void>;
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
  const [dadosEmpresa, setDadosEmpresa] = useState<{ nome?: string } | null>(null);
  
  const [activeTab, setActiveTab] = useState('dashboard');
  const [pdvSearch, setPdvSearch] = useState('');
  const [carrinho, setCarrinho] = useState<CarrinhoItem[]>([]);
  
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [vendas, setVendas] = useState<Venda[]>([]);
  const [caixas, setCaixas] = useState<Caixa[]>([]);
  const [orcamentos, setOrcamentos] = useState<Orcamento[]>([]);
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

  const requireEmpresa = () => {
    if (!empresaId) throw new Error('Empresa não identificada.');
    return empresaId;
  };

  const saveRecord = async (collection: string, data: Record<string, any>, id?: string) => {
    const empresa = requireEmpresa();
    const collectionPath = `empresas/${empresa}/${collection}`;
    if (id) {
      await update(ref(db, `${collectionPath}/${id}`), data);
      return;
    }
    const recordRef = push(ref(db, collectionPath));
    await update(ref(db, `${collectionPath}/${recordRef.key}`), data);
  };

  const deleteRecord = async (collection: string, id: string) => {
    const empresa = requireEmpresa();
    await remove(ref(db, `empresas/${empresa}/${collection}/${id}`));
  };

  // Autenticação e Perfis
  useEffect(() => {
    let unsubscribeProfile: (() => void) | undefined;
    let profileTimeout: ReturnType<typeof setTimeout> | undefined;

    const clearProfileListener = () => {
      unsubscribeProfile?.();
      unsubscribeProfile = undefined;
      if (profileTimeout) clearTimeout(profileTimeout);
      profileTimeout = undefined;
    };

    const unsubscribeAuth = onAuthStateChanged(auth, (u) => {
      clearProfileListener();
      if (u) {
        profileTimeout = setTimeout(() => {
          console.error('Tempo excedido ao carregar o perfil do usuário.');
          setUser(u);
          setLoadingAuth(false);
        }, 10000);

        unsubscribeProfile = onValue(
          ref(db, `users/${u.uid}`),
          (snap) => {
            const data = snap.val();
            setEmpresaId(data?.empresaId || null);
            setUserRole(data?.role || null);
            if (data?.empresaId) {
              get(ref(db, `empresas/${data.empresaId}/info`)).then((snap) => {
                setDadosEmpresa(snap.exists() ? snap.val() : null);
              });
            } else {
              setDadosEmpresa(null);
            }
            setUser(u);
            setLoadingAuth(false);
            clearProfileListener();
          },
          (error) => {
            console.error('Não foi possível carregar o perfil do usuário:', error);
            setEmpresaId(null);
            setUserRole(null);
            setUser(u);
            setLoadingAuth(false);
            clearProfileListener();
          }
        );
      } else {
        setUser(null);
        setEmpresaId(null);
        setUserRole(null);
        setDadosEmpresa(null);
        setLoadingAuth(false);
      }
    });

    return () => {
      clearProfileListener();
      unsubscribeAuth();
    };
  }, []);

  // Listeners das Coleções no Banco de Dados
  useEffect(() => {
    if (!empresaId) return;
    const basePath = `empresas/${empresaId}`;
    const inicioMes = new Date();
    inicioMes.setDate(1);
    inicioMes.setHours(0, 0, 0, 0);
    
    const collections = [
      { name: 'produtos', setter: setProdutos, queryRef: ref(db, `${basePath}/produtos`) },
      { name: 'clientes', setter: setClientes, queryRef: ref(db, `${basePath}/clientes`) },
      { name: 'fornecedores', setter: setFornecedores, queryRef: ref(db, `${basePath}/fornecedores`) },
      { name: 'contas', setter: setContas, queryRef: ref(db, `${basePath}/contas`) },
      { name: 'categorias', setter: setCategorias, queryRef: ref(db, `${basePath}/categorias`) },
      { name: 'usuarios', setter: setUsuarios, queryRef: ref(db, `${basePath}/usuarios`) },
      { name: 'orcamentos', setter: setOrcamentos, queryRef: ref(db, `${basePath}/orcamentos`) },
      { name: 'vendas', setter: setVendas, queryRef: query(ref(db, `${basePath}/vendas`), orderByChild('data'), startAt(inicioMes.toISOString())) },
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

  const abrirCaixa = async (valorInicial: number) => {
    if (caixaAberto) throw new Error('Já existe um caixa aberto.');
    if (!Number.isFinite(valorInicial) || valorInicial < 0) throw new Error('Informe um valor inicial válido.');
    await saveRecord('caixas', {
      dataAbertura: new Date().toISOString(),
      valorInicial,
      status: 'aberto',
      operador: user?.email || user?.uid || 'Operador'
    });
  };

  const fecharCaixa = async () => {
    const caixa = caixaAberto;
    if (!caixa) throw new Error('Nenhum caixa aberto.');
    await update(ref(db, `empresas/${requireEmpresa()}/caixas/${caixa.id}`), {
      status: 'fechado',
      dataFechamento: new Date().toISOString(),
      totalVendas: totalVendasCaixa,
      valorFinal: Number(caixa.valorInicial || 0) + totalVendasCaixa
    });
  };

  const salvarProduto = (data: Partial<Produto>, id?: string) => saveRecord('produtos', data, id);
  const excluirProduto = (id: string) => deleteRecord('produtos', id);
  const salvarCliente = (data: Partial<Cliente>, id?: string) => saveRecord('clientes', data, id);
  const excluirCliente = (id: string) => deleteRecord('clientes', id);
  const salvarCadastro = (collection: string, data: Record<string, any>, id?: string) => saveRecord(collection, data, id);
  const excluirCadastro = (collection: string, id: string) => deleteRecord(collection, id);

  const finalizarVenda = async (comoOrcamento = false) => {
    if (carrinho.length === 0 || !empresaId) return alert("Carrinho vazio!");
    if (!comoOrcamento && !caixaAberto) return alert("Abra o caixa primeiro!");

    let subtotal = carrinho.reduce((a, b) => a + (Number(b.venda) * b.qtd), 0);
    let custoTotal = carrinho.reduce((a, b) => a + (Number(b.custo) * b.qtd), 0);
    let desc = Math.max(0, Number(pdvDesconto) || 0);
    desc = Math.min(desc, subtotal);
    
    try {
      if (comoOrcamento) {
         if(!pdvCliente) return alert("Selecione um cliente para salvar o orçamento!");
         await push(ref(db, `empresas/${empresaId}/orcamentos`), {
            cliId: pdvCliente, subtotal, desconto: desc, total: subtotal - desc,
            itens: carrinho.map(c => ({ id: c.id, marca: c.marca, modelo: c.modelo, qtd: c.qtd, venda: c.venda })),
            data: new Date().toISOString(), status: 'pendente'
         });
      } else {
          const promessasEstoque = carrinho.map(async c => {
           const prodRef = ref(db, `empresas/${empresaId}/produtos/${c.id}/qtd`);
            const qtdAntes = await get(prodRef);
            const estoqueAntes = Number(qtdAntes.val());
            if (!qtdAntes.exists() || !Number.isFinite(estoqueAntes) || estoqueAntes < c.qtd) {
             throw new Error(`Estoque insuficiente para ${c.marca} ${c.modelo}.`);
            }
            const resultado = await runTransaction(prodRef, (qtdAtual) => {
              if (qtdAtual === null) return qtdAtual;
              const novaQtd = Number(qtdAtual) - c.qtd;
              return novaQtd >= 0 ? novaQtd : qtdAtual;
           });
            const estoqueDepois = Number(resultado.snapshot.val());
            if (!resultado.committed || estoqueDepois !== estoqueAntes - c.qtd) {
             throw new Error(`Não foi possível reservar o estoque de ${c.marca} ${c.modelo}.`);
            }
            return resultado;
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
    user, loadingAuth, userRole, empresaId, dadosEmpresa,
    produtos, clientes, vendas, caixas, orcamentos, carrinho,
    fornecedores, contas, categorias, usuarios,
    activeTab, setActiveTab, pdvSearch, setPdvSearch, abrirCaixa, fecharCaixa,
    salvarProduto, excluirProduto, salvarCliente, excluirCliente, salvarCadastro, excluirCadastro,
    addToCart, removeFromCart, finalizarVenda,
    caixaAberto, totalVendasCaixa, pdvCliente, setPdvCliente, pdvDesconto, setPdvDesconto, pdvPagamento, setPdvPagamento
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};