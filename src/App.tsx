import React from 'react';
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

function MainLayout() {
  const { activeTab, user, loadingAuth } = useAppContext();

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
    <div className="flex h-screen w-full bg-slate-50 dark:bg-slate-900 text-slate-900 overflow-hidden">
      
      {/* MENU LATERAL AQUI */}
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto p-4 sm:p-10 lg:p-12 relative z-10 custom-scrollbar h-full">
        {activeTab === 'dashboard' && <DashboardScreen />}
        {activeTab === 'vendas' && <PdvScreen />}
        {activeTab === 'caixa' && <CaixaScreen />}
        {activeTab === 'estoque' && <EstoqueScreen />}
        {activeTab === 'clientes' && <ClientesScreen />}
        {activeTab === 'orcamentos' && <OrcamentosScreen />}
        
        {activeTab === 'financeiro' && <FinanceiroScreen />}
        {['fornecedores', 'contas', 'categorias', 'usuarios'].includes(activeTab) && (
          <CadastrosGenericosScreen activeTab={activeTab} />
        )}
      </main>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}