/*Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês e mais 5% do valor das vendas por ele 
efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas 
vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do 
vendedor.*/

let salarioFixo = parseFloat(prompt("Informe o salario fixo do vendedor"));
let comissao = parseFloat(prompt("Informe a comissão do vendedor por venda"));
let comissaoPorcentagem = comissao / 100;
let quantidadeVenda = parseInt(prompt("Informe a quantidade de vendas que o vendedor fez"));

function CriandoArrayComAsVendas() {
  while (idVenda <= quantidadeVenda) {
    let idVenda = 1;
    let mensagemVenda = parseFloat(prompt("qual o valor da venda " + idVenda + "?"));
    let calculoDaComissao = mensagemVenda * comissaoPorcentagem;
    let listaDasComissoes = [];
    listaDasComissoes.push(calculoDaComissao.value);
    idVenda++;
  }
  /*return CalculandoComissoes(listaDasComissoes);*/
}

/*function CalculandoComissoes(listaDasComissoes) {}*/