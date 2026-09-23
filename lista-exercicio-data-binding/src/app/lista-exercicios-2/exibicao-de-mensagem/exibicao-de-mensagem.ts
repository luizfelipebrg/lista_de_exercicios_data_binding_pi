import { Component } from '@angular/core';

@Component({
  selector: 'app-exibicao-de-mensagem',
  standalone: false,
  styleUrl: './exibicao-de-mensagem.scss',
  templateUrl: './exibicao-de-mensagem.html',
})
export class ExibicaoDeMensagem {
  mensagemVisivel: boolean = false;

  AlternarMensagem(): void {
    this.mensagemVisivel = !this.mensagemVisivel;
  }
}
