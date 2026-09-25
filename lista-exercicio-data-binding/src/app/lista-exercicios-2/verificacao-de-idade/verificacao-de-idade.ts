import { Component } from '@angular/core';

@Component({
  selector: 'app-verificacao-de-idade',
  standalone: false,
  styleUrl: './verificacao-de-idade.scss',
  templateUrl: './verificacao-de-idade.html',
})
export class VerificacaoDeIdade {

  idade: number = 12

  aumentarValor() {
    this.idade++
  }
  diminuirValor() {
    if(this.idade > 0){
    this.idade--
    }
  }
}
