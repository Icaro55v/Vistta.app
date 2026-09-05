export interface Prescricao {
  medico: string;
  obs: string;
  od: { esf: string; cil: string; eixo: string; dnp: string; add: string };
  oe: { esf: string; cil: string; eixo: string; dnp: string; add: string };
}

export interface Cliente {
  id: string;
  nome: string;
  cpf: string;
  tel: string;
  nasc: string;
  prescricao?: Prescricao;
}

export interface Produto {
  id: string;
  codigo: string;
  categoria: string;
  marca: string;
  modelo: string;
  cor: string;
  custo: number | string;
  venda: number | string;
  qtd: number | string;
  min: number | string;
}

export interface CarrinhoItem extends Produto {
  qtd: number; // Qtd no carrinho
}

export interface Venda {
  id: string;
  cliId: string;
  pag: string;
  subtotal: number;
  desconto: number;
  total: number;
  custoBase: number;
  itens: number;
  data: string;
  caixaId?: string;
}

export interface Caixa {
  id: string;
  dataAbertura: string;
  valorInicial: number;
  status: 'aberto' | 'fechado';
  operador: string;
  dataFechamento?: string;
  totalVendas?: number;
  valorFinal?: number;
}
