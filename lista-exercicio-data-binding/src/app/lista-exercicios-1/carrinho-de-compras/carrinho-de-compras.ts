import { Component } from '@angular/core';

@Component({
  selector: 'app-carrinho-de-compras',
  standalone: false,
  styleUrl: './carrinho-de-compras.scss',
  templateUrl: './carrinho-de-compras.html',
})
export class CarrinhoDeCompras {
  produto = 'Produto';
  preco = 0;
  quantidade = 1;
  mensagem = '';

  aumentarQuantidade() {
    this.quantidade++;
  }

  diminuirQuantidade() {
    if (this.quantidade > 1) {
      this.quantidade--;
    }
  }

  adicionarAoCarrinho() {
    this.mensagem = `${this.quantidade} unidade(s) de ${this.produto} adicionada(s) ao carrinho.`;
  }
}
