import React from 'react';
import { Lock, Wallet } from 'lucide-react';
import { useAppContext, formatMoney } from '../context/AppContext';
import { Caixa } from '../types';

export function CaixaScreen() {
  const { caixaAberto, totalVendasCaixa, caixas } = useAppContext();
  // Nota: Você precisará expor setModalAbrirCaixa e setModalFecharCaixa no seu AppContext se quiser controlá-los por lá, ou criar o state localmente no MainLayout.
  
  return (
    <div className="flex flex-col h-full">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Caixa Diário</h1>
          <p className="text-slate-500">Abertura e fechamento de caixa para o PDV.</p>
        </div>
        {caixaAberto ? (
          <button className="bg-rose-500 text-white px-6 py-3 rounded-xl font-semibold shadow-md">Fechar Caixa</button>
        ) : (
          <button className="bg-[#4A3AFF] text-white px-6 py-3 rounded-xl font-semibold shadow-md">Abrir Caixa</button>
        )}
      </div>

      {caixaAberto ? (
        <div className="bg-white rounded-3xl p-8 mb-10 flex justify-between items-center shadow-sm border border-slate-100">
           <div>
             <p className="text-emerald-500 font-bold uppercase text-xs mb-2">Caixa Aberto</p>
             <p className="text-slate-500">Operador: <span className="font-bold text-slate-900">{caixaAberto.operador}</span></p>
           </div>
           <div className="flex gap-10">
              <div className="text-right">
                <p className="text-[11px] font-bold text-slate-400 uppercase mb-1">Fundo Inicial</p>
                <p className="text-2xl font-bold">{formatMoney(caixaAberto.valorInicial)}</p>
              </div>
              <div className="text-right">
                <p className="text-[11px] font-bold text-slate-400 uppercase mb-1">Vendas no Caixa</p>
                <p className="text-2xl font-bold text-emerald-500">+ {formatMoney(totalVendasCaixa)}</p>
              </div>
              <div className="text-right pl-10 border-l border-slate-100">
                <p className="text-[11px] font-bold text-slate-400 uppercase mb-1">Saldo Atual</p>
                <p className="text-4xl font-extrabold text-[#4A3AFF]">{formatMoney((caixaAberto.valorInicial || 0) + totalVendasCaixa)}</p>
              </div>
           </div>
        </div>
      ) : (
        <div className="border-2 border-dashed border-slate-200 rounded-3xl p-16 mb-10 text-center flex flex-col items-center">
           <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-slate-400 mb-5 shadow-sm border"><Lock size={24} /></div>
           <h3 className="text-2xl font-bold text-slate-800 mb-3">Caixa Fechado</h3>
           <p className="text-slate-500 mb-8 max-w-md">Nenhum caixa está aberto no momento. Abra o caixa para permitir novas vendas.</p>
        </div>
      )}

      {/* Histórico de Caixas Omitido para não estourar o limite de texto, mas é a tabela (table) que você já tinha criada no original */}
    </div>
  );
}
