// 2. Faça um programa onde eu possa lançar movimentações de estoque dos produtos que estão no json abaixo, 
// dando entrada ou saída da mercadoria no meu depósito, onde cada movimentação deve ter:
// •	Um número identificador único.
// •	Uma descrição para identificar o tipo da movimentação realizada
// E que ao final da movimentação me retorne a qtde final do estoque do produto movimentado.


const estoque = {
    "produtos": [

        {
		"codigoProduto": 101,
		"descricaoProduto": "Caneta Azul",
		"estoque": 150
	  },
	  {
		"codigoProduto": 102,
		"descricaoProduto": "Caderno Universitário",
		"estoque": 75
	  },
	  {
		"codigoProduto": 103,
		"descricaoProduto": "Borracha Branca",
		"estoque": 200
	  },
	  {
		"codigoProduto": 104,
		"descricaoProduto": "Lápis Preto HB",
		"estoque": 320
	  },
	  {
		"codigoProduto": 105,
		"descricaoProduto": "Marcador de Texto Amarelo",
		"estoque": 90
	  }
    ]
};

let idMov = 1;

function movimentar(codigo, quantidade, descricao) {
  const produto = estoque.produtos.find(p => p.codigoProduto === codigo);

  if (!produto) return "Produto não encontrado!";

  produto.estoque += quantidade;

  return `
Movimentação #${idMov++}
Identificador do produto: ${codigo}
Descrição: ${descricao}
Produto: ${produto.descricaoProduto}
Quantidade movimentada: ${quantidade}
Estoque final: ${produto.estoque}
`;
}

console.log(movimentar(101, 20, "Entrada de canetas"));
console.log(movimentar(102, -5, "Venda de cadernos"));
console.log(movimentar(103, -30, "Uso interno"));
