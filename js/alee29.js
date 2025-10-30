// Peça o nome do usuário e a hora atual (0–23). Mostre uma saudação apropriada:

let nome = prompt("Digite seu nome:");
let hora = parseInt(prompt("Digite a hora atual (0 a 23):"));

let saudacao;

if (hora >= 0 && hora < 12) {
  saudacao = "Bom dia";
} else if (hora >= 12 && hora < 18) {
  saudacao = "Boa tarde";
} else if (hora >= 18 && hora <= 23) {
  saudacao = "Boa noite";
} else {
  saudacao = "Hora inválida";
}

alert(saudacao + ", " + nome + "!");
