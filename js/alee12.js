//Peça o ano de nascimento e diga se o usuário pode votar (≥16 anos).

let anoNascimento = parseInt(prompt("Informe seu ano de nascimento:"));
let idade = new Date().getFullYear() - anoNascimento;

if (idade < 16) {
    alert("Você não pode votar");
} else if (idade === 16 || idade === 17) {
    alert("Você pode votar, mas não é obrigatorio");
} else {
    alert("Você pode votar");
}