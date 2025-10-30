// Peça o nome de uma fruta e use switch para mostrar seu preço.

let fruta = prompt("Digite o nome de uma fruta").toLowerCase();

switch (fruta) {
    case "uva":
        alert(fruta + " está R$ 2.00");
        break;
    case "banana":
        alert(fruta + " está R$ 4.00");
        break;
    case "morango":
        alert(fruta + " está R$ 6.00");
        break;
    case "melancia":
        alert(fruta + " está R$ 8.00");
        break;
    case "pera":
        alert(fruta + " está R$ 10.00");
        break;
    case "seriguela":
        alert(fruta + " está R$ 12.00");
        break;
    case "manga":
        alert(fruta + " está R$ 14.00");
        break;

    default:
        alert("A fruta que você digitou não está na lista, tente de novo.");
        break;
}