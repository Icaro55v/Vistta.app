import React from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { Cliente } from '../types';

export function ClientesScreen() {
  const { clientes } = useAppContext(); 
  // Exponha setModalCliente e handleDelete no AppContext se ainda não fez
  
  return (
    <div className="flex flex-col h-full">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Clientes & Receitas</h1>
          <p className="text-slate-500">Gestão de contatos e prontuários óticos.</p>
        </div>
        <button className="bg-[#4A3AFF] text-white px-6 py-3 rounded-xl font-semibold flex items-center shadow-md">
          <Plus size={20} className="mr-2" /> Novo Cliente
        </button>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm flex-1 flex flex-col overflow-hidden min-h-[400px]">
        <div className="flex-1 overflow-auto custom-scrollbar p-2">
          <table className="w-full text-left min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-100 text-[11px] text-slate-400 uppercase tracking-wider font-semibold sticky top-0 bg-white">
                <th className="py-4 px-6">Cliente / CPF</th>
                <th className="py-4 px-6">Contato</th>
                <th className="py-4 px-6">Médico Responsável</th>
                <th className="py-4 px-6 text-center w-24">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {clientes.map((c: Cliente) => (
                <tr key={c.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="font-bold text-[14px]">{c.nome}</div>
                    <div className="text-[12px] text-slate-400 mt-0.5">{c.cpf || 'Sem CPF'}</div>
                  </td>
                  <td className="py-4 px-6 text-[14px] font-medium text-slate-600">{c.tel}</td>
                  <td className="py-4 px-6">
                    <div className="text-[14px] font-medium text-slate-700">{c.prescricao?.medico || 'Não informado'}</div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center gap-2">
                       <button className="p-2 rounded-xl text-slate-400 hover:text-[#4A3AFF] hover:bg-indigo-50"><Edit2 size={16} /></button>
                       <button className="p-2 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-50"><Trash2 size={16} /></button>
                    </div>
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
