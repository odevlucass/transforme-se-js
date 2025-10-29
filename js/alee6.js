//Peça um número e mostre se ele é positivo, negativo ou zero.

let numero = parseFloat(prompt("Digite um numero:"));
if (numero < 0) {
  alert(numero + " é um numero negativo");
} else if (numero === 0) {
  alert("você digitou o numero zero");
} else {
  alert(numero + " é um numero positivo");
}