import { Component } from '@angular/core';

@Component({
  selector: 'app-situacao-do-estoque',
  standalone: false,
  styleUrl: './situacao-do-estoque.scss',
  templateUrl: './situacao-do-estoque.html',
})
export class SituacaoDoEstoque {
  nomeProduto: string = 'teclado';
  quantidadeEstoque: number = 5;

  adicionarProduto() {
    this.quantidadeEstoque++
  }

  removerProduto() {
    if (this.quantidadeEstoque > 0) {
      this.quantidadeEstoque--
    }
  }
}
