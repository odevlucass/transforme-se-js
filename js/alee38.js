/*Crie uma classe Veiculo com marca e ano.
Crie uma classe Carro que herda de Veiculo e adiciona modelo.
Use super() para chamar o construtor da classe mãe.*/

class Veiculo {
    constructor(marca, ano) {
        this.marca = marca;
        this.ano = ano;
    }
}
class Carro extends Veiculo {
    constructor(marca, ano, modelo) {
        super(marca, ano);
        this.modelo = modelo;
    }
}