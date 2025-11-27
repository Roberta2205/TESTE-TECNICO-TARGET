
// 3. Faça um programa que a partir de um valor e de uma data de vencimento, 
// calcule o valor dos juros na data de hoje considerando que a multa seja de 2,5% ao dia.


function calcularJuros(valor, dataVencimento) {

  const hoje = new Date();
  const vencimento = new Date(dataVencimento);

  // Calcula dias de atraso
  const diferencaMs = hoje - vencimento;
  const diasAtraso = Math.floor(diferencaMs / (1000 * 60 * 60 * 24));

  if (diasAtraso <= 0) {
    return "Não há atraso. Valor permanece igual: R$ " + valor.toFixed(2);
  }

  // 2.5% ao dia = 0.025
  const juros = valor * 0.025 * diasAtraso;
  const valorFinal = valor + juros;

  return `
Valor original: R$ ${valor.toFixed(2)}
Dias de atraso: ${diasAtraso}
Juros: R$ ${juros.toFixed(2)}
Valor final com juros: R$ ${valorFinal.toFixed(2)}
`;
}

console.log(calcularJuros(100, "2025-01-20"));
