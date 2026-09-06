import React, { useState } from 'react';
import { Building2, ArrowRight } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { UploadImagem } from '../components/UploadImagem';

export function SetupOticaScreen() {
  const { configurarOtica } = useAppContext();
  const [nome, setNome] = useState('');
  const [erro, setErro] = useState('');
  const [salvando, setSalvando] = useState(false);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    const nomeNormalizado = nome.trim();
    if (!nomeNormalizado) {
      setErro('Informe o nome da sua ótica.');
      return;
    }
    setErro('');
    setSalvando(true);
    try {
      await configurarOtica(nomeNormalizado);
    } catch (error: any) {
      if (error?.code === 'PERMISSION_DENIED' || error?.message === 'PERMISSION_DENIED') {
        setErro('O Firebase recusou o cadastro. Publique o arquivo database.rules.json no projeto vistta-2e1df e tente novamente.');
      } else {
        setErro(error?.message || 'Não foi possível salvar os dados da ótica.');
      }
    } finally {
      setSalvando(false);
    }
  };

  return (
    <div className="flex min-h-[100dvh] w-full items-center justify-center bg-slate-50 p-4 sm:p-6 dark:bg-slate-900">
      <div className="w-full max-w-[480px] rounded-[32px] border border-slate-100 bg-white p-8 shadow-[0_8px_40px_rgb(0,0,0,0.04)] dark:border-slate-700 dark:bg-slate-800 sm:p-10">
        <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-[#4A3AFF] dark:bg-indigo-900/30"><Building2 size={26} /></div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">Vamos configurar sua ótica</h1>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-500">Para começar, informe o nome da sua ótica.</p>
        <form onSubmit={submit} className="mt-8 space-y-5">
          <div>
            <label htmlFor="nome-otica" className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-slate-500">Nome da ótica</label>
            <input id="nome-otica" autoFocus required value={nome} onChange={event => setNome(event.target.value)} placeholder="Digite o nome da sua ótica" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-[14px] outline-none transition-all focus:border-[#5235ff] focus:ring-1 focus:ring-[#5235ff] dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
          </div>
          <UploadImagem label="Logo da ótica (prévia)" />
          {erro && <p className="rounded-xl border border-rose-100 bg-rose-50 p-3 text-sm font-semibold text-rose-600">{erro}</p>}
          <button type="submit" disabled={salvando} className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#5235ff] py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-[#4323ec] disabled:opacity-60">{salvando ? 'Salvando...' : 'Continuar'} {!salvando && <ArrowRight size={18} />}</button>
        </form>
      </div>
    </div>
  );
}
