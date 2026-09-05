import React from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';
import { useAppContext, formatMoney } from '../context/AppContext';
import { ModalBase } from '../components/SharedUI';
import { GenericForm } from '../components/Forms/GenericForm';

export function CadastrosGenericosScreen({ activeTab }: { activeTab: string }) {
  const { fornecedores, contas, categorias, usuarios, salvarCadastro, excluirCadastro } = useAppContext();
  const [itemEditando, setItemEditando] = React.useState<any | null>(null);
  const [modalAberto, setModalAberto] = React.useState(false);
  
  const getCollectionData = () => {
    switch(activeTab) {
      case 'fornecedores': return fornecedores;
      case 'contas': return contas;
      case 'categorias': return categorias;
      case 'usuarios': return usuarios;
      default: return [];
    }
  };
  
  const data = getCollectionData();

  const configs: Record<string, any> = {
    fornecedores: { defaultData: { nome: '', cnpj: '', contato: '' }, fields: [
      { name: 'nome', label: 'Nome', type: 'text', required: true },
      { name: 'cnpj', label: 'CNPJ', type: 'text' },
      { name: 'contato', label: 'Contato', type: 'text' }
    ] },
    contas: { defaultData: { descricao: '', tipo: 'pagar', valor: '', vencimento: '' }, fields: [
      { name: 'descricao', label: 'Descrição', type: 'text', required: true },
      { name: 'tipo', label: 'Tipo', type: 'select', required: true, options: [{ val: 'pagar', label: 'A pagar' }, { val: 'receber', label: 'A receber' }] },
      { name: 'valor', label: 'Valor', type: 'number', step: '0.01', required: true },
      { name: 'vencimento', label: 'Vencimento', type: 'date' }
    ] },
    categorias: { defaultData: { nome: '' }, fields: [
      { name: 'nome', label: 'Nome', type: 'text', required: true }
    ] },
    usuarios: { defaultData: { nome: '', email: '', perfil: 'vendedor' }, fields: [
      { name: 'nome', label: 'Nome', type: 'text', required: true },
      { name: 'email', label: 'E-mail', type: 'email', required: true },
      { name: 'perfil', label: 'Perfil', type: 'select', required: true, options: [{ val: 'vendedor', label: 'Vendedor' }, { val: 'admin', label: 'Administrador' }] }
    ] }
  };

  const config = configs[activeTab];
  const collection = activeTab;
  const salvar = async (item: any) => {
    await salvarCadastro(collection, item, itemEditando?.id);
    setModalAberto(false);
    setItemEditando(null);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 capitalize">{activeTab}</h1>
          <p className="text-slate-500">Gestão completa liberada.</p>
        </div>
        <button onClick={() => { setItemEditando(null); setModalAberto(true); }} className="bg-[#4A3AFF] text-white px-6 py-3 rounded-xl font-semibold flex items-center">
          <Plus size={20} className="mr-2" /> Adicionar
        </button>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden p-2 flex-1 flex flex-col min-h-[400px]">
        <div className="overflow-x-auto overflow-y-auto flex-1 custom-scrollbar">
            <table className="w-full text-left min-w-[600px]">
            <thead>
                <tr className="border-b border-slate-100 text-[11px] text-slate-400 uppercase font-semibold sticky top-0 bg-white">
                <th className="py-4 px-6">Registro Principal</th>
                <th className="py-4 px-6">Detalhes</th>
                <th className="py-4 px-6 text-center">Ações</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
                {data?.map((item: any) => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6">
                    <div className="font-bold text-[14px]">{item.nome || item.descricao}</div>
                    <div className="text-[12px] text-slate-400 mt-0.5">{item.cnpj || item.email || (item.vencimento ? `Venc: ${new Date(item.vencimento).toLocaleDateString('pt-BR')}` : '')}</div>
                    </td>
                    <td className="py-4 px-6 text-[14px] font-medium text-slate-600">
                    {item.valor ? <span className={`font-extrabold ${item.tipo==='pagar'?'text-rose-500':'text-emerald-500'}`}>{formatMoney(item.valor)}</span> : (item.contato || item.perfil || item.descricao || '-')}
                    </td>
                    <td className="py-4 px-6 text-center">
                    <div className="flex justify-center gap-2">
                        <button onClick={() => { setItemEditando(item); setModalAberto(true); }} className="p-2 rounded-xl text-slate-400 hover:text-[#4A3AFF] hover:bg-indigo-50"><Edit2 size={16} /></button>
                        <button onClick={() => excluirCadastro(collection, item.id).catch((error: any) => alert(error.message))} className="p-2 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-50"><Trash2 size={16} /></button>
                    </div>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
      </div>
      <ModalBase open={modalAberto} onClose={() => { setModalAberto(false); setItemEditando(null); }} title={itemEditando ? `Editar ${activeTab}` : `Novo ${activeTab}`}>
        <GenericForm config={config} initialData={itemEditando} onSave={salvar} onClose={() => { setModalAberto(false); setItemEditando(null); }} />
      </ModalBase>
    </div>
  );
}
