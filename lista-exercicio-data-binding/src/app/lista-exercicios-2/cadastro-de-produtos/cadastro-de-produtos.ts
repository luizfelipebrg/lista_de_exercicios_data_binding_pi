import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  quantidade: number;
}

@Component({
  selector: 'app-cadastro-de-produtos',
  standalone: false,
  styleUrl: './cadastro-de-produtos.scss',
  templateUrl: './cadastro-de-produtos.html',
})
export class CadastroDeProdutos {
  nomeProduto = '';
  quantidadeProduto: number | null = null;
  mensagemErro = '';
  proximoId = 6;

  produtos: Produto[] = [
    { id: 1, nome: 'Caderno', quantidade: 8 },
    { id: 2, nome: 'Caneta', quantidade: 20 },
    { id: 3, nome: 'Mochila', quantidade: 4 },
    { id: 4, nome: 'Estojo', quantidade: 0 },
    { id: 5, nome: 'Lápis', quantidade: 12 },
  ];

  cadastrarProduto() {
    if (!this.nomeProduto.trim() || this.quantidadeProduto === null || this.quantidadeProduto < 0) {
      this.mensagemErro = 'Não foi possível cadastrar o produto.';
      return;
    }

    this.produtos.push({
      id: this.proximoId,
      nome: this.nomeProduto.trim(),
      quantidade: this.quantidadeProduto,
    });
    this.proximoId++;
    this.nomeProduto = '';
    this.quantidadeProduto = null;
    this.mensagemErro = '';
  }

  excluirProduto(produto: Produto) {
    this.produtos.splice(this.produtos.indexOf(produto), 1);
  }
}