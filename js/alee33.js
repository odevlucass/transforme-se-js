/*Crie uma classe Calculadora com um método somar(a, b) e outro
multiplicar(a, b).
Crie um objeto dessa classe e teste os dois métodos.*/

class Calculadora {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    somar(a, b) {
        let resultado = this.a + this.b;
        return resultado;
    }
    multiplicar(a, b) {
        let resultado = this.a * this.b;
        return resultado;
    }
}

const testeUm = new Calculadora(5, 5);
const testeDois = new Calculadora(10, 10);

alert(testeUm.multiplicar());
alert(testeUm.somar());
alert(testeDois.multiplicar());
alert(testeDois.somar());