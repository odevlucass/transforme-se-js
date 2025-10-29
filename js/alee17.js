// Peça um número e mostre se ele é divisível por 3 e por 5 ao mesmo tempo.

let numero = parseInt(prompt("Digite um numero:"));

if (numero % 3 === 0 && numero % 5 === 0) {
    alert("O numero digitado é divisivel por 3 e por 5");
} else {
    alert("O numero digitado não é divisivel por 3 e nem por 5");
}