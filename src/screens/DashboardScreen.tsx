import React from 'react';
import { Boxes, TrendingUp, Users, AlertTriangle, Wallet, ShoppingCart } from 'lucide-react';
import { useAppContext, formatMoney } from '../context/AppContext';
import { DashCard } from '../components/SharedUI';

export function DashboardScreen() {
  const { produtos, vendas, clientes, setActiveTab } = useAppContext();
  
  return (
    <div className="flex flex-col h-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Painel Geral</h1>
        <p className="text-slate-500">Acompanhe os principais indicadores da sua ótica.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <DashCard title="Estoque Total" value={produtos.reduce((acc, p) => acc + Number(p.qtd), 0)} subtitle="unidades ativas" icon={Boxes} />
        <DashCard title="Vendas do Mês" value={formatMoney(vendas.reduce((acc, v) => acc + (v.total || 0), 0))} icon={TrendingUp} color="text-emerald-500" />
        <DashCard title="Clientes Base" value={clientes.length} icon={Users} />
        <DashCard title="Estoque Crítico" value={produtos.filter(p=>Number(p.qtd)<Number(p.min)).length} icon={AlertTriangle} bg="bg-rose-50" color="text-rose-500" />
      </div>
    </div>
  );
}
// Siga este mesmo padrão de importação de Hooks e Componentes isolados para as outras telas (PdvScreen, EstoqueScreen, etc).
