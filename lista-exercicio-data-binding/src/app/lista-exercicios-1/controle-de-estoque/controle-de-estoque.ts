import { Component } from '@angular/core';

@Component({
  selector: 'app-controle-de-estoque',
  standalone: false,
  styleUrl: './controle-de-estoque.scss',
  templateUrl: './controle-de-estoque.html',
})
export class ControleDeEstoque {
  produto = '';
  estoque = 0;

  aumentarEstoque() {
    this.estoque++;
  }

  diminuirEstoque() {
    if (this.estoque > 0) {
      this.estoque--;
    }
  }
}
