import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  quantidade: number;
}

@Component({
  selector: 'app-produtos-disponiveis',
  standalone: false,
  styleUrl: './produtos-disponiveis.scss',
  templateUrl: './produtos-disponiveis.html',
})
export class ProdutosDisponiveis {
  somenteDisponiveis = false;

  produtos: Produto[] = [
    { id: 1, nome: 'Caderno', quantidade: 8 },
    { id: 2, nome: 'Caneta', quantidade: 20 },
    { id: 3, nome: 'Mochila', quantidade: 4 },
    { id: 4, nome: 'Estojo', quantidade: 0 },
    { id: 5, nome: 'Lápis', quantidade: 12 },
  ];

  alternarDisponibilidade() {
    this.somenteDisponiveis = !this.somenteDisponiveis;
  }
}