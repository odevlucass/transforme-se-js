/*Crie uma classe Animal com um método fazerSom().
Crie duas subclasses:
● Cachorro → imprime "Au au!"
● Gato → imprime "Miau!"

Crie um array com objetos dos dois tipos e chame fazerSom() para
cada um.*/

class Animais {
    fazerSom(){
        return "";
    }
}

class Gato extends Animais {
    fazerSom() {
        return "Miau!";
    }
}
class Cachorro extends Animais {
    fazerSom() {
        return "Au au!";
    }
}

const animais = [new Cachorro(), new Gato()]

animais.forEach(animal => {
    let som = animal.fazerSom();
    alert(som);

});