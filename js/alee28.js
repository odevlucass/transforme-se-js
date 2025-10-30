//Peça dois números e uma operação (usando switch) para criar uma mini calculadora.

let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));
let operacao = prompt("Digite a operação desejada (+, -, *, /):");

switch (operacao) {
  case "+":
    alert(`${numero1} + ${numero2} = ${numero1 + numero2}`);
    break;
  case "-":
    alert(`${numero1} - ${numero2} = ${numero1 - numero2}`);
    break;
  case "*":
    alert(`${numero1} * ${numero2} = ${numero1 * numero2}`);
    break;
  case "/":
    if (numero2 !== 0) {
      alert(`${numero1} / ${numero2} = ${numero1 / numero2}`);
    } else {
      alert("Erro: divisão por zero não é permitida.");
    }
    break;
  default:
    alert("Operação inválida. Use +, -, * ou /.");
    break;
}
