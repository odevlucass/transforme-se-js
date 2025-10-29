//Peça dois números e mostre o maior deles.

let numeroUm = parseFloat(prompt("Digite um numero:"));
let numeroDois = parseFloat(prompt("Digite outro numero:"));

if (numeroUm === numeroDois) {
    alert("Você digitou dois numeros iguais");
} else if (numeroUm > numeroDois) {
    alert(numeroUm + " é maior que " + numeroDois + ".");    
} else {
    alert(numeroDois + " é maior que " + numeroUm + ".");
}