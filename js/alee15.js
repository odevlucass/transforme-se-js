//Peça dois números e uma operação (+, -, *, /) e mostre o resultado.

let numeroUm = parseInt(prompt("Digite um numero:"));
let numeroDois = parseInt(prompt("Digite outro numero:"));
let operacao = parseInt(prompt("digite qual operação você quer usar: 1) Adição  2) Subtração  3) Multiplicação  4) Divisão"));

switch (operacao) {
  case 1:
    alert(numeroUm + numeroDois);
    break;
  case 2:
    alert(numeroUm - numeroDois);
    break;
  case 3:
    alert(numeroUm * numeroDois);
    break;
  case 4:
    alert(numeroUm / numeroDois);
    break;

  default:
    alert("Operação inválida. Escolha 1, 2, 3 ou 4.");
    break;
}