/*Crie:
● Classe Transporte com atributo tipo e método mover().
● Classe Carro que herda de Transporte e sobrescreve
mover() para mostrar "O carro está dirigindo.".
● Classe Avião que herda de Transporte e sobrescreve
mover() para mostrar "O avião está voando.".

Crie objetos dos dois tipos e teste o método mover().*/

class Transporte {
    constructor(tipo) {
        this.tipo = tipo;
    }
    mover() {}
}
class Carro extends Transporte {
    constructor() {
        super("carro");
    }
    mover() {
        return "O carro está dirigindo";
    }
}
class Aviao extends Transporte {
    constructor() {
        super("avião");
    }
    mover() {
        return "O avião está voando";
    }
}

const carro = new Carro();
const aviao = new Aviao();

alert(carro.mover());
alert(aviao.mover());
