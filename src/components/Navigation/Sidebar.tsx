import React from 'react';
import { Home, Wallet, ShoppingCart, FileText, Boxes, Users, Tags, TrendingUp, ArrowRightLeft, Truck, UserPlus, LogOut } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { LogoVistta } from '../SharedUI';

function SidebarItem({ icon: Icon, label, active, onClick, badge, badgeColor }: any) {
  return (
    <button onClick={onClick} className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all ${active ? 'bg-indigo-50 text-[#4A3AFF] font-bold' : 'text-slate-500 hover:bg-slate-100 font-medium'}`}>
      <div className="flex items-center"><Icon size={20} className={`mr-3 ${active ? 'text-[#4A3AFF]' : 'text-slate-400'}`} />{label}</div>
      {badge && <span className={`px-2 py-0.5 rounded-lg text-[11px] font-bold ${badgeColor}`}>{badge}</span>}
    </button>
  );
}

function SidebarCategory({ label }: { label: string }) {
  return <div className="px-4 py-2 mt-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">{label}</div>;
}

export function Sidebar() {
  const { activeTab, setActiveTab, caixaAberto, orcamentos, userRole, auth } = useAppContext();
  
  return (
    <aside className="hidden md:flex flex-col w-[270px] bg-white border-r border-slate-200 z-20 shadow-sm">
      <div className="h-[80px] flex items-center px-6 border-b border-slate-100 flex-shrink-0">
        <div className="w-10 h-10 rounded-xl bg-[#4A3AFF] text-white flex items-center justify-center mr-3"><LogoVistta className="w-7" solidWhite={true} /></div>
        <span className="font-bold text-[18px] text-slate-900 truncate">Minha Ótica</span>
      </div>
      
      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
        <SidebarItem icon={Home} label="Dashboard" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
        
        <SidebarCategory label="Operação" />
        <SidebarItem icon={Wallet} label="Caixa Diário" active={activeTab === 'caixa'} onClick={() => setActiveTab('caixa')} badge={caixaAberto ? 'Aberto' : 'Fechado'} badgeColor={caixaAberto ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'} />
        <SidebarItem icon={ShoppingCart} label="PDV" active={activeTab === 'vendas'} onClick={() => setActiveTab('vendas')} />
        <SidebarItem icon={FileText} label="Orçamentos" active={activeTab === 'orcamentos'} onClick={() => setActiveTab('orcamentos')} badge={orcamentos.filter(o=>o.status==='pendente').length || null} badgeColor="bg-amber-100 text-amber-700" />
        
        <SidebarCategory label="Cadastros" />
        <SidebarItem icon={Boxes} label="Estoque" active={activeTab === 'estoque'} onClick={() => setActiveTab('estoque')} />
        <SidebarItem icon={Users} label="Clientes" active={activeTab === 'clientes'} onClick={() => setActiveTab('clientes')} />
        
        {userRole === 'admin' && (
          <>
            <SidebarCategory label="Gestão (Admin)" />
            <SidebarItem icon={TrendingUp} label="DRE Financeiro" active={activeTab === 'financeiro'} onClick={() => setActiveTab('financeiro')} />
            <SidebarItem icon={ArrowRightLeft} label="Contas" active={activeTab === 'contas'} onClick={() => setActiveTab('contas')} />
            <SidebarItem icon={UserPlus} label="Usuários" active={activeTab === 'usuarios'} onClick={() => setActiveTab('usuarios')} />
          </>
        )}
      </div>
    </aside>
  );
}
