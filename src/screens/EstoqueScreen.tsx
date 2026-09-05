import React, { useState } from 'react';
import { Plus, Search, Edit2, Trash2 } from 'lucide-react';
import { useAppContext, formatMoney } from '../context/AppContext';
import { Produto } from '../types';

export function EstoqueScreen() {
  const { produtos } = useAppContext(); // Também puxe a função handleDelete e setModalProduto do contexto
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <div className="flex flex-col h-full">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Estoque</h1>
          <p className="text-slate-500">Gerencie produtos e níveis de inventário.</p>
        </div>
        <button className="bg-[#4A3AFF] text-white px-6 py-3 rounded-xl font-semibold flex items-center">
          <Plus size={20} className="mr-2" /> Adicionar Produto
        </button>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm flex-1 flex flex-col overflow-hidden min-h-[400px]">
        <div className="p-4 bg-white border-b border-slate-100">
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" placeholder="Buscar código, marca..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-4 py-3 outline-none focus:border-[#4A3AFF]"
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-auto custom-scrollbar">
          <table className="w-full text-left min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-100 text-[11px] text-slate-400 uppercase font-semibold sticky top-0 bg-white">
                <th className="py-4 px-6 w-24">Cód.</th>
                <th className="py-4 px-6">Produto</th>
                <th className="py-4 px-6">Categoria</th>
                <th className="py-4 px-6 text-right">Venda</th>
                <th className="py-4 px-6 text-center w-28">Qtd</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {produtos.filter(p => p.codigo?.toLowerCase().includes(searchTerm.toLowerCase()) || p.marca?.toLowerCase().includes(searchTerm.toLowerCase())).map((p: Produto) => (
                <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-mono text-[12px] font-bold text-slate-400">{p.codigo}</td>
                  <td className="py-4 px-6">
                    <div className="font-bold text-[14px]">{p.marca} <span className="font-normal text-slate-500">{p.modelo}</span></div>
                  </td>
                  <td className="py-4 px-6 text-[13px]"><span className="bg-slate-100 px-3 py-1.5 rounded-lg font-medium">{p.categoria}</span></td>
                  <td className="py-4 px-6 text-right font-extrabold text-[15px] text-emerald-600">{formatMoney(p.venda)}</td>
                  <td className="py-4 px-6 text-center">
                    <span className={`inline-flex items-center justify-center w-10 h-10 rounded-xl text-[14px] font-bold ${Number(p.qtd) < Number(p.min) ? 'bg-rose-50 text-rose-600' : 'bg-slate-50 text-slate-700'}`}>{p.qtd}</span>
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
