/*Crie uma classe Funcionario com os atributos nome e salario.
Crie uma classe Gerente que herda de Funcionario e adiciona o
atributo departamento.
Depois, crie um objeto Gerente e exiba todos os dados.*/

class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
}
class Gerente extends Funcionario {
    constructor(nome, salario, departamento) {
        super(nome, salario)
        this.departamento = departamento;
    }
}

const gerenteUm = new Gerente("Lucas", 1000, "Governança de TI");
alert(`Nome: ${gerenteUm.nome}\nSalario: ${gerenteUm.salario}\nDepartamento: ${gerenteUm.departamento}`);