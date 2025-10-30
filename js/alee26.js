// Peça o nome de um time e mostre uma frase divertida sobre ele.

let time = prompt("Digite o nome de um time:").toLowerCase();

switch (time) {
  case "palmeiras":
    alert("Palmeiras não tem Mundial");
    break;
  case "corinthians":
    alert("K K K K, e o curintia hein?!");
    break;
  case "são paulo":
    alert("Maior do Brasil!");
    break;
  case "flamengo":
    alert("'bato no mosquito' FLAMENGO!!!");
    break;
  case "vasco":
    alert("foi de vasco");
    break;
  default:
    alert("Não existe esse time, tente outro");
    break;
}
