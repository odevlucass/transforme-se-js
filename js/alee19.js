//Peça três números e mostre o maior e o menor.

iniciar();

function iniciar() {
  let numeroUm = parseInt(prompt("Digite um numero"));
  let numeroDois = parseInt(prompt("Digite outro numero"));
  let numeroTres = parseInt(prompt("Digite mais um numero"));

  maiorNumero(numeroUm, numeroDois, numeroTres);
  menorNumero(numeroUm, numeroDois, numeroTres);
}

function maiorNumero(numeroUm, numeroDois, numeroTres) {
  if (numeroUm > numeroDois && numeroUm > numeroTres) {
    alert("Numero " + numeroUm + " é maior");
  } else if (numeroDois > numeroUm && numeroDois > numeroTres) {
    alert("Numero " + numeroDois + " é maior");
  } else {
    alert("Numero " + numeroTres + " é maior");
  }
}

function menorNumero(numeroUm, numeroDois, numeroTres) {
  if (numeroUm < numeroDois && numeroUm < numeroTres) {
    alert("Numero " + numeroUm + " é menor");
  } else if (numeroDois < numeroUm && numeroDois < numeroTres) {
    alert("Numero " + numeroDois + " é menor");
  } else {
    alert("Numero " + numeroTres + " é menor");
  }
}
