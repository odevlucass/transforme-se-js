//Peça o nome de uma cor e use switch para mostrar uma mensagem diferente pra cada cor.

let cor = prompt("Digite o nome de uma cor:").toLowerCase();

switch (cor) {
  case "vermelho":
    alert("Vermelho é a cor da paixão e do São Paulo!");
    break;
  case "azul":
    alert("Azul é tranquilidade e mar da praia!");
    break;
  case "verde":
    alert("Verde é esperança!");
    break;
  case "amarelo":
    alert("Amarelo como sol");
    break;
  case "preto":
    alert("Preto combina com tudo!");
    break;
  case "branco":
    alert("Mó paz!");
    break;
  default:
    alert("Não existe essa cor, tente outro");
    break;
}