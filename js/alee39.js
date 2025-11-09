/*Crie uma classe Forma com o método area().
Crie duas subclasses:
● Quadrado (com atributo lado) → área = lado * lado
● Triangulo (com base e altura) → área = (base * altura) / 2

Crie objetos das duas classes e mostre a área de cada uma.*/

class Forma {
    area() {

    }
}
class Quadrado extends Forma {
    static arrayQuadrados = [];
    constructor(lado) {
        super();
        Quadrado.arrayQuadrados.push(this);
        this.lado = lado;
    }
    area() {
        return this.lado * this.lado;
    }
}
class Triangulo extends Forma {
    static arrayTriangulos = [];
    constructor(base, altura) {
        super();
        Triangulo.arraytriangulos.push(this);
        this.base = base;
        this.altura = altura;
    }
    area() {
        return (this.base * this.altura) / 2;
    }
}

const quadradoUm = new Quadrado(5);
const quadradoDois = new Quadrado(10);
const quadradoTres = new Quadrado(15);
const quadradoQuatro = new Quadrado(20);

const trianguloUm = new Triangulo(5, 10);
const trianguloDois = new Triangulo(10, 20);
const trianguloTres = new Triangulo(20, 40);
const trianguloQuatro = new Triangulo(40, 80);

const arrayQuadrados = Quadrado.arrayQuadrados;
const arraytriangulos = Triangulo.arrayTriangulos;

arrayQuadrados.forEach((quadrado => {
    alert(quadrado.area());
}));

arrayTriangulos.forEach((triangulo => {
    alert(triangulo.area());
}));