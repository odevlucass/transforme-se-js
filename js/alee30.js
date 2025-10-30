/*Crie um menu interativo com switch onde o usuário pode escolher entre: Somar dois números, descobrir se um número é par ou ímpar, calcular média de três notas e sair*/

function somarNumeros() {
  let a = parseFloat(prompt("Digite o primeiro número:"));
  let b = parseFloat(prompt("Digite o segundo número:"));
  alert(`A soma de ${a} + ${b} é ${a + b}`);
  menu();
}

function verificarParOuImpar() {
  let numero = parseInt(prompt("Digite um número inteiro:"));
  if (numero % 2 === 0) {
    alert(`${numero} é par`);
  } else {
    alert(`${numero} é ímpar`);
  }
  menu();
}

function calcularMedia() {
  let nota1 = parseFloat(prompt("Digite a primeira nota:"));
  let nota2 = parseFloat(prompt("Digite a segunda nota:"));
  let nota3 = parseFloat(prompt("Digite a terceira nota:"));
  let media = (nota1 + nota2 + nota3) / 3;
  alert(`A média das notas é ${media.toFixed(2)}`);
  menu();
}

function menu() {
  let opcao = prompt(
    "Escolha uma opção:\n1 - Somar dois números\n2 - Verificar se um número é par ou ímpar\n3 - Calcular média de três notas\n4 - Sair"
  );

  switch (opcao) {
    case "1":
      somarNumeros();
      break;
    case "2":
      verificarParOuImpar();
      break;
    case "3":
      calcularMedia();
      break;
    case "4":
      alert("Saindo do programa. Até mais!");
      break;
    default:
      alert("Opção inválida. Tente novamente.");
      menu();
      break;
  }
}

menu();
