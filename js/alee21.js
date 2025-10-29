/*Peça ao usuário para digitar um número de 1 a 7 e use switch para mostrar o dia
da semana correspondente.*/

let numero = parseInt(prompt("Digite o numero de 1 a 7"));

switch (numero) {
  case 1:
    alert("Domingo");
    break;
  case 2:
    alert("Segunda-Feira");
    break;
  case 3:
    alert("Terça-Feira");
    break;
  case 4:
    alert("Quarta-Feira");
    break;
  case 5:
    alert("Quinta-Feira");
    break;
  case 6:
    alert("Sexta-Feira");
    break;
  case 7:
    alert("Sábado");
    break;
  default:
    alert("Número inválido. Digite de 1 a 7.");
    break;
}