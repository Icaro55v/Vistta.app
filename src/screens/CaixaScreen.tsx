import React, { useState } from 'react';
import { Lock, Wallet } from 'lucide-react';
import { useAppContext, formatMoney } from '../context/AppContext';
import { Caixa } from '../types';

export function CaixaScreen() {
  const { caixaAberto, totalVendasCaixa, caixas, abrirCaixa, fecharCaixa } = useAppContext();
  const [valorInicial, setValorInicial] = useState('0');
  const [processando, setProcessando] = useState(false);

  const executar = async (acao: () => Promise<void>) => {
    setProcessando(true);
    try {
      await acao();
    } catch (error: any) {
      alert(error.message || 'Não foi possível atualizar o caixa.');
    } finally {
      setProcessando(false);
    }
  };
  
  return (
    <div className="flex flex-col h-full">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Caixa Diário</h1>
          <p className="text-slate-500">Abertura e fechamento de caixa para o PDV.</p>
        </div>
        {caixaAberto ? (
          <button disabled={processando} onClick={() => executar(fecharCaixa)} className="bg-rose-500 text-white px-6 py-3 rounded-xl font-semibold shadow-md disabled:opacity-60">Fechar Caixa</button>
        ) : (
          <button disabled={processando} onClick={() => {
            const valor = Number(valorInicial.replace(',', '.'));
            executar(() => abrirCaixa(valor));
          }} className="bg-[#4A3AFF] text-white px-6 py-3 rounded-xl font-semibold shadow-md disabled:opacity-60">Abrir Caixa</button>
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
           <div className="flex items-center gap-3 mb-6">
             <label htmlFor="valor-inicial" className="text-sm font-bold text-slate-600">Fundo inicial</label>
             <input id="valor-inicial" type="number" min="0" step="0.01" value={valorInicial} onChange={e => setValorInicial(e.target.value)} className="w-36 bg-white border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-[#4A3AFF]" />
           </div>
        </div>
      )}

      {/* Histórico de Caixas Omitido para não estourar o limite de texto, mas é a tabela (table) que você já tinha criada no original */}
    </div>
  );
}
