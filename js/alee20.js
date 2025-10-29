// Peça um número e mostre se ele é positivo e menor que 100 ao mesmo tempo.

let numero = parseInt(prompt("Digite um numero:"));

if (numero > 0 && numero < 100) {
    alert("O numero digitado é positivo e menor que 100");
} else {
    alert("O numero digitado não é positivo e nem menor que 100");
}