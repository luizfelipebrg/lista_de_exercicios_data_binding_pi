import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  promocao: boolean;
}

@Component({
  selector: 'app-promocao-de-produtos',
  standalone: false,
  styleUrl: './promocao-de-produtos.scss',
  templateUrl: './promocao-de-produtos.html',
})
export class PromocaoDeProdutos {
  produtos: Produto[] = [
    { id: 1, nome: 'Caderno', preco: 15.5, quantidade: 8, promocao: true },
    { id: 2, nome: 'Caneta', preco: 3.25, quantidade: 20, promocao: false },
    { id: 3, nome: 'Mochila', preco: 89.9, quantidade: 4, promocao: true },
    { id: 4, nome: 'Estojo', preco: 22, quantidade: 0, promocao: false },
    { id: 5, nome: 'Lápis', preco: 2.5, quantidade: 12, promocao: false },
  ];

  alternarPromocao(produto: Produto) {
    produto.promocao = !produto.promocao;
  }
}