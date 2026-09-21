import { Component } from '@angular/core';

@Component({
  selector: 'app-login-simulado',
  standalone: false,
  styleUrl: './login-simulado.scss',
  templateUrl: './login-simulado.html',
})
export class LoginSimulado {
  usuario = '';
  senha = '';
  mensagem = '';

  entrar() {
    this.mensagem = `Bem-vindo, ${this.usuario}!`;
  }
}
