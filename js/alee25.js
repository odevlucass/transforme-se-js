/*Peça uma nota (A, B, C, D, F) e mostre o significado (“Excelente”, “Bom”, “Regular”,
“Ruim”, “Reprovado”).*/

let nota = prompt("Digite uma nota: (A, B, C, D, F)");

switch (nota) {
    case "A":
        alert("Excelente");
        break;
    case "B":
        alert("Bom");
        break;
    case "C":
        alert("Regular");
        break;
    case "D":
        alert("Ruim");
        break;
    case "F":
        alert("Reprovado");
        break;
    
    default:
        alert("A nota que você digitou não está na lista, tente de novo.");
        break;
}