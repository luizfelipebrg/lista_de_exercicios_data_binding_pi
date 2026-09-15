import { Component } from '@angular/core';

@Component({
  selector: 'app-apresentacao-do-usuario',
  standalone: false,
  styleUrl: './apresentacao-do-usuario.scss',
  templateUrl: './apresentacao-do-usuario.html',
})
export class ApresentacaoDoUsuario {
  nome = '';
  idade = '';
  curso = '';

}
