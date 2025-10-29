/*Peça três notas e calcule a média. Mostre se o aluno foi aprovado (≥7),
recuperação (≥5) ou reprovado.*/

let notaUm = parseInt(prompt("Digite a primeira nota"));
let notaDois = parseInt(prompt("Digite a segunda nota"));
let notaTres = parseInt(prompt("Digite a terceira nota"));
let notaMedia = (notaUm + notaDois + notaTres) / 3;

if (notaMedia >= 5 && notaMedia <= 6) {
    alert("A media foi " + notaMedia + " e o Aluno ficou de recuperação");
} else if (notaMedia >= 7) {
    alert("A media foi " + notaMedia + " e o Aluno foi aprovado");
} else {
    alert("A media foi " + notaMedia + " e o Aluno foi reprovado");
}