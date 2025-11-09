/*Na classe Pessoa, adicione um método apresentar() que retorne:
"Olá, meu nome é [nome] e tenho [idade] anos."
Crie um objeto e chame o método.*/

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        let nome = this.nome;
        let idade = this.idade;
        let mensagem = `Olá, meu nome é ${nome} e tenho ${idade} anos.`;
        return mensagem;
    }
}

const lucas = new Pessoa("Lucas", 19);

alert(lucas.apresentar());