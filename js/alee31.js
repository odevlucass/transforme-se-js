//Crie uma classe chamada Pessoa com os atributos nome e idade. Depois, crie dois objetos dessa classe e mostre os valores no console.

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const PessoaUm = new Pessoa("Lucas", 19);
const PessoaDois = new Pessoa("Thayná", 20);

let nomeUm = PessoaUm.nome;
let idadeUm = PessoaUm.idade;
let mensagemUm = "Meu nome é " + nomeUm + " e tenho " + idadeUm + " anos de idade";

let nomeDois = PessoaDois.nome;
let idadeDois = PessoaDois.idade;
let mensagemDois = "Meu nome é " + nomeDois + " e tenho " + idadeDois + " anos de idade";

console.log(mensagemUm);
console.log(mensagemDois);
