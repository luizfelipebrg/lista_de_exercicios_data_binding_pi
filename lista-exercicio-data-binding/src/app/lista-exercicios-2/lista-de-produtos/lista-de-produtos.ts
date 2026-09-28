import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

@Component({
  selector: 'app-lista-de-produtos',
  standalone: false,
  styleUrl: './lista-de-produtos.scss',
  templateUrl: './lista-de-produtos.html',
})
export class ListaDeProdutos {
  produtos: Produto[] = [
    { id: 1, nome: 'Caderno', preco: 15.5, quantidade: 8 },
    { id: 2, nome: 'Caneta', preco: 3.25, quantidade: 20 },
    { id: 3, nome: 'Mochila', preco: 89.9, quantidade: 4 },
    { id: 4, nome: 'Estojo', preco: 22, quantidade: 0 },
    { id: 5, nome: 'Lápis', preco: 2.5, quantidade: 12 },
  ];
}