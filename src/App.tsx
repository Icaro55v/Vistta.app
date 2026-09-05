import React, { useEffect, useState } from 'react';
import { AppProvider, useAppContext } from './context/AppContext';
import { Sidebar } from './components/Navigation/Sidebar';

import { AuthScreen } from './screens/AuthScreen';
import { DashboardScreen } from './screens/DashboardScreen';
import { PdvScreen } from './screens/PdvScreen';
import { CaixaScreen } from './screens/CaixaScreen';
import { EstoqueScreen } from './screens/EstoqueScreen';
import { ClientesScreen } from './screens/ClientesScreen';
import { OrcamentosScreen } from './screens/OrcamentosScreen';
import { FinanceiroScreen } from './screens/FinanceiroScreen';
import { CadastrosGenericosScreen } from './screens/CadastrosGenericosScreen';
import { OrdensServicoScreen } from './screens/OrdensServicoScreen';
import { Home, ShoppingCart, Boxes, Users, Menu, Moon, Sun } from 'lucide-react';

function MainLayout() {
  const { activeTab, user, loadingAuth, setActiveTab, carrinho, userRole, dadosEmpresa } = useAppContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const dark = localStorage.getItem('otica_theme') === 'dark';
    setIsDark(dark);
    document.documentElement.classList.toggle('dark', dark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    localStorage.setItem('otica_theme', next ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', next);
  };

  // Tela de carregamento enquanto o Firebase verifica o login
  if (loadingAuth) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-slate-50 dark:bg-slate-900">
        <p className="text-slate-500 font-medium">Iniciando VISTTA ERP...</p>
      </div>
    );
  }

  // Redireciona para o Login se não estiver autenticado
  if (!user) {
    return <AuthScreen />;
  }

  // Renderiza o Sistema com o Menu Lateral
  return (
    <div className="flex h-screen w-full bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative pb-[70px] md:pb-0">
        <button onClick={toggleTheme} className="absolute top-4 right-4 z-40 w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 hover:text-[#4A3AFF] shadow-sm" title="Alternar tema">
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      <main className="flex-1 overflow-y-auto p-4 pt-16 sm:pt-10 sm:p-10 lg:p-12 relative z-10 custom-scrollbar h-full">
        {activeTab === 'dashboard' && <DashboardScreen />}
        {activeTab === 'vendas' && <PdvScreen />}
        {activeTab === 'caixa' && <CaixaScreen />}
        {activeTab === 'estoque' && <EstoqueScreen />}
        {activeTab === 'clientes' && <ClientesScreen />}
        {activeTab === 'orcamentos' && <OrcamentosScreen />}
        {activeTab === 'ordens' && <OrdensServicoScreen />}
        
        {activeTab === 'financeiro' && <FinanceiroScreen />}
        {['fornecedores', 'contas', 'categorias', 'usuarios'].includes(activeTab) && (
          <CadastrosGenericosScreen activeTab={activeTab} />
        )}
      </main>
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700 flex items-center h-[70px] z-[55]">
        <MobileNav icon={Home} label="Início" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
        <MobileNav icon={ShoppingCart} label="PDV" active={activeTab === 'vendas'} onClick={() => setActiveTab('vendas')} badge={carrinho.length} />
        <MobileNav icon={Boxes} label="Estoque" active={activeTab === 'estoque'} onClick={() => setActiveTab('estoque')} />
        <MobileNav icon={Users} label="Clientes" active={activeTab === 'clientes'} onClick={() => setActiveTab('clientes')} />
        <MobileNav icon={Menu} label="Menu" active={mobileMenuOpen} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
      </div>
      {mobileMenuOpen && <div className="md:hidden fixed inset-0 z-[70] bg-slate-900/60" onClick={() => setMobileMenuOpen(false)}>
        <div className="absolute right-0 top-0 h-full w-[80%] max-w-[300px] bg-white dark:bg-slate-800 shadow-2xl p-5" onClick={(event) => event.stopPropagation()}>
          <div className="flex items-center justify-between mb-8">
            <span className="font-bold truncate text-slate-900 dark:text-white">{dadosEmpresa?.nome || 'Minha Ótica'}</span>
            <button onClick={() => setMobileMenuOpen(false)} className="text-slate-400">Fechar</button>
          </div>
          <div className="space-y-2">
            {[
              ['caixa', 'Caixa Diário'], ['orcamentos', 'Orçamentos'], ['ordens', 'Ordens de Serviço'], ['categorias', 'Categorias'],
              ...(userRole === 'admin' ? [['financeiro', 'Financeiro'], ['contas', 'Contas'], ['fornecedores', 'Fornecedores'], ['usuarios', 'Usuários']] : [])
            ].map(([tab, label]) => <button key={tab} onClick={() => { setActiveTab(tab); setMobileMenuOpen(false); }} className="w-full text-left px-4 py-3 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-700">{label}</button>)}
          </div>
        </div>
      </div>}
      </div>
    </div>
  );
}

function MobileNav({ icon: Icon, label, active, onClick, badge = 0 }: any) {
  return <button onClick={onClick} className={`flex-1 h-full flex flex-col items-center justify-center gap-1 text-[10px] relative ${active ? 'text-[#4A3AFF] font-bold' : 'text-slate-400'}`}>
    <Icon size={22} />
    {badge > 0 && <span className="absolute top-1 right-3 bg-rose-500 text-white text-[10px] rounded-full px-1.5">{badge}</span>}
    <span>{label}</span>
  </button>;
}

export default function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}