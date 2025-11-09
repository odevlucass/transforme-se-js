/*Crie uma classe Turma que tenha um array alunos.
Adicione métodos:
● adicionarAluno(nome)

● listarAlunos()

Use o método listarAlunos() para mostrar todos os nomes.*/

class Turma {
    constructor() {
        this.listaAlunos = [];
    }

    adicionarAluno(aluno) {
        this.listaAlunos.push(aluno);
    }

    listarAlunos() {
        alert(this.listaAlunos.join(", "));
    }
}

const minhaTurma = new Turma();

let adicionarAluno = document.getElementById("adicionarAluno");
let listarAlunos = document.getElementById("listarAlunos");

adicionarAluno.addEventListener("click", () => {
    let inputnome = prompt("Digite o nome do aluno");
    minhaTurma.adicionarAluno(inputnome);
});

listarAlunos.addEventListener("click", () => {
    minhaTurma.listarAlunos();
});