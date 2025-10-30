/* Peça o número do mês e mostre a quantidade de dias (considere fevereiro com
28).*/

let numero = parseInt(prompt("Digite o numero de 1 a 12"));
let mesTrinta = 30;
let mesTrintaUm = 31;
let mesFevereiro = 28;

switch (numero) {
  case 1:
    alert("Janeiro tem " + mesTrintaUm + " dias");
    break;
  case 2:
    alert("Fevereiro tem " + mesFevereiro + " dias");
    break;
  case 3:
    alert("Março tem " + mesTrintaUm + " dias");
    break;
  case 4:
    alert("Abril tem " + mesTrinta + " dias");
    break;
  case 5:
    alert("Maio tem " + mesTrintaUm + " dias");
    break;
  case 6:
    alert("Junho tem " + mesTrinta + " dias");
    break;
  case 7:
    alert("Julho tem " + mesTrintaUm + " dias");
    break;
  case 8:
    alert("Agosto tem " + mesTrintaUm + " dias");
    break;
  case 9:
    alert("Setembro tem " + mesTrinta + " dias");
    break;
  case 10:
    alert("Outubro tem " + mesTrintaUm + " dias");
    break;
  case 11:
    alert("Novembro tem " + mesTrinta + " dias");
    break;
  case 12:
    alert("Dezembro tem " + mesTrintaUm + " dias");
    break;
  default:
    alert("Número inválido. Digite de 1 a 12.");
    break;
}
