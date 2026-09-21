import { Component } from '@angular/core';

@Component({
  selector: 'app-matricula-em-curso',
  standalone: false,
  styleUrl: './matricula-em-curso.scss',
  templateUrl: './matricula-em-curso.html',
})
export class MatriculaEmCurso {
  nomeAluno = '';
  disciplinas = 1;
  mensagem = '';

  aumentarDisciplinas() {
    this.disciplinas++;
  }

  diminuirDisciplinas() {
    if (this.disciplinas > 1) {
      this.disciplinas--;
    }
  }

  realizarMatricula() {
    this.mensagem = `Matrícula realizada para ${this.nomeAluno} em ${this.disciplinas} disciplina(s).`;
  }
}
