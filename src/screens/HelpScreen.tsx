import React from 'react';
import { BookOpen, Wallet, ShoppingCart, Users, Boxes, ClipboardList, BarChart3, Mail, Linkedin, CheckCircle2 } from 'lucide-react';

const treinamentos = [
  { icon: Wallet, titulo: '1. Comece pelo caixa', passos: ['Acesse Caixa Diário.', 'Informe o fundo inicial e clique em Abrir Caixa.', 'Registre entradas, saídas e sangrias durante o dia.', 'Feche o caixa ao final da operação e confira o saldo.'] },
  { icon: ShoppingCart, titulo: '2. Registre uma venda', passos: ['Abra o PDV com o caixa aberto.', 'Pesquise e selecione os produtos do estoque.', 'Vincule o cliente, escolha a forma de pagamento e aplique descontos.', 'Clique em Vender para baixar o estoque e registrar a venda.'] },
  { icon: Users, titulo: '3. Cadastre clientes e receitas', passos: ['Abra Clientes e clique em Novo Cliente.', 'Preencha dados pessoais, endereço e contato.', 'Registre a receita de longe e perto com médico, CRM e data.', 'Use o WhatsApp e o histórico do cliente para acompanhar o atendimento.'] },
  { icon: Boxes, titulo: '4. Organize o estoque', passos: ['Cadastre produtos por categoria.', 'Informe custo, venda, estoque mínimo e fornecedor.', 'Use os alertas de estoque crítico para planejar reposições.', 'Mantenha tratamentos e especificações preenchidos para o laboratório.'] },
  { icon: ClipboardList, titulo: '5. Acompanhe uma OS', passos: ['Crie uma OS ou converta um orçamento aprovado.', 'Selecione armação, lentes e tratamentos.', 'Atualize o status: montagem, laboratório, pronto ou entregue.', 'Informe previsão de entrega e observações para a equipe.'] },
  { icon: BarChart3, titulo: '6. Controle o financeiro', passos: ['Lance contas a pagar e receber.', 'Vincule despesas aos fornecedores quando aplicável.', 'Acompanhe faturamento, CMV, lucro e fluxo de caixa.', 'Use o DRE para conferir o resultado da operação.'] }
];

export function HelpScreen() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
      <header>
        <div className="mb-3 flex items-center gap-3 text-[#4A3AFF]"><BookOpen size={24} /><span className="text-xs font-bold uppercase tracking-[0.2em]">Central de treinamento</span></div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">Ajuda e treinamento</h1>
        <p className="mt-2 max-w-2xl text-slate-500">Aprenda o fluxo recomendado para operar a VISTTA com segurança e manter os dados da ótica organizados.</p>
      </header>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {treinamentos.map(({ icon: Icon, titulo, passos }) => <article key={titulo} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <div className="mb-4 flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-[#4A3AFF] dark:bg-indigo-900/30"><Icon size={20} /></div><h2 className="font-bold text-slate-900 dark:text-white">{titulo}</h2></div>
          <ol className="space-y-2 text-sm text-slate-600 dark:text-slate-300">{passos.map(passo => <li key={passo} className="flex gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-500" />{passo}</li>)}</ol>
        </article>)}
      </section>

      <section className="rounded-2xl border border-indigo-100 bg-indigo-50 p-6 dark:border-indigo-900/50 dark:bg-indigo-950/30">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Suporte</h2>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Envie sua dúvida com o nome da ótica, usuário e uma descrição do que aconteceu.</p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a href="mailto:icaroprojetos7@gmail.com" className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-[#4A3AFF] shadow-sm hover:bg-slate-50 dark:bg-slate-800"><Mail size={18} /> icaroprojetos7@gmail.com</a>
          <a href="https://www.linkedin.com/in/7icaaro" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#0A66C2] px-4 py-3 text-sm font-bold text-white hover:bg-[#0959a8]"><Linkedin size={18} /> LinkedIn de suporte</a>
        </div>
      </section>
    </div>
  );
}
