// Peça a idade e diga a faixa etária: (<12 criança) (13 a 17 adolescente) (18 a 64 adulto) (>=65 idoso)

let idade = parseInt(prompt("Digite sua idade"));

if (idade < 12) {
    alert("Você é uma criança");
} else if (idade >= 13 && idade <= 17) {
    alert("Você é um adolescente");
} else if (idade >= 18 && idade <= 64) {
    alert("Você é um adulto");
} else if (idade >= 65) {
    alert("Você é um idoso");
} else {
    alert("Idade inválida");
}