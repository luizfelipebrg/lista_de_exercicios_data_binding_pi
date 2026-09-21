import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-de-produto',
  standalone: false,
  styleUrl: './cadastro-de-produto.scss',
  templateUrl: './cadastro-de-produto.html',
})
export class CadastroDeProduto {
  produto = '';
  preco = 0;
  quantidade = 0;
}
