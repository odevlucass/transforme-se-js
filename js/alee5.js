// Peça um número e mostre se ele é par ou ímpar.

let numero = parseInt(prompt("Digite um numero:"));
ImparOuPar(numero);

function ImparOuPar(numero) {
    if (numero % 2 === 0) {
        alert(numero + " é um numero par");
    } else {
        alert(numero + " é um numero impar");
    }
}