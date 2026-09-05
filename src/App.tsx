import React from 'react';
import { AppProvider, useAppContext } from './context/AppContext';
import { DashboardScreen } from './screens/DashboardScreen';
// importe as outras telas aqui...

function MainLayout() {
  const { activeTab } = useAppContext();
  
  return (
    <div className="flex h-screen w-full bg-slate-50 dark:bg-slate-900 text-slate-900 overflow-hidden">
      {/* Insira seu Sidebar Aqui */}
      
      <main className="flex-1 overflow-y-auto p-10">
        {activeTab === 'dashboard' && <DashboardScreen />}
        {/* Renderize as outras telas baseado na activeTab */}
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
