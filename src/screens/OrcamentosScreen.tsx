import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { useAppContext, formatMoney } from '../context/AppContext';
import { Cliente } from '../types';

export function OrcamentosScreen() {
  const { orcamentos, clientes, setActiveTab, converterOrcamentoParaOs } = useAppContext();
  
  return (
    <div className="flex flex-col h-full">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Orçamentos</h1>
          <p className="text-slate-500">Negociações salvas via PDV.</p>
        </div>
        <button onClick={()=>setActiveTab('vendas')} className="bg-[#4A3AFF] text-white px-6 py-3 rounded-xl font-semibold flex items-center">
          <Plus size={20} className="mr-2" /> Novo via PDV
        </button>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm flex-1 flex flex-col overflow-hidden min-h-[400px]">
        <div className="flex-1 overflow-auto custom-scrollbar p-2">
          <table className="w-full text-left min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-100 text-[11px] text-slate-400 uppercase font-semibold sticky top-0 bg-white">
                <th className="py-4 px-6">Data / Cliente</th>
                <th className="py-4 px-6">Itens</th>
                <th className="py-4 px-6 text-right">Total</th>
                <th className="py-4 px-6 text-center w-24">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {orcamentos.map((o: any) => (
                <tr key={o.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="py-4 px-6">
                    <div className="font-bold text-[14px]">{clientes.find((c:Cliente)=>c.id===o.cliId)?.nome || 'Desconhecido'}</div>
                    <div className="text-[12px] text-slate-400 mt-0.5">{new Date(o.data).toLocaleDateString('pt-BR')}</div>
                  </td>
                  <td className="py-4 px-6 text-[14px] font-medium text-slate-600">{o.itens?.length || 0} produto(s)</td>
                  <td className="py-4 px-6 text-right font-extrabold text-[15px] text-[#4A3AFF]">{formatMoney(o.total)}</td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex gap-2"><button onClick={() => converterOrcamentoParaOs(o).then(() => setActiveTab('ordens')).catch((error: any) => alert(error.message))} className="px-3 py-2 rounded-xl text-xs font-bold text-[#4A3AFF] hover:bg-indigo-50">Converter em OS</button><button className="p-2 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-50"><Trash2 size={16} /></button></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
