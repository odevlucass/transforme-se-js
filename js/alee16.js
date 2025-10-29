//Peça o preço de um produto e mostre o valor com 10% de desconto.

let preco = parseFloat(prompt("Digite o preço do produto:"));
let desconto = preco * 0.10;
let resultado = preco - desconto;
alert("O seu produto com 10% de desconto é: " + resultado);