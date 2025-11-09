/*Adicione à classe Funcionario um método mostrarDados() que
retorna nome e salário.
Na classe Gerente, reaproveite o método da classe mãe usando
super.mostrarDados() e adicione o departamento.*/

class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    mostrarDados() {
        return `Nome: ${this.nome}\nSalario: ${this.salario}`;
    }
}
class Gerente extends Funcionario {
    constructor(nome, salario, departamento) {
        super(nome, salario)
        this.departamento = departamento;
    }
    mostrarDados() {
        return `${super.mostrarDados()}\nDepartamento: ${this.departamento}`;
    }
}

const lucas = new Funcionario("Lucas", 1000);
const ibrahim = new Gerente("Ibrahim", 5000, "Governança de TI");

alert(lucas.mostrarDados());
alert(ibrahim.mostrarDados());