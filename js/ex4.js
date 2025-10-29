/*Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário. */

let salario = parseFloat(prompt("Informe seu salario"));
let reajuste = parseFloat(prompt("Informe a porcentagem do reajuste de salario"));
let calculoReajuste = reajuste / 100;
let resultado = salario + (salario * calculoReajuste);
alert("Seu salario com reajuste é: " + resultado);