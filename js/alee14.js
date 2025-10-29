//Peça um número e diga se ele é múltiplo de 5.

let numero = parseInt(prompt("Digite um numero:"));

if (numero % 5 === 0) {
    alert("O numero digitado é multiplo de 5");
} else {
    alert("O numero digitado não é multiplo de 5");
}