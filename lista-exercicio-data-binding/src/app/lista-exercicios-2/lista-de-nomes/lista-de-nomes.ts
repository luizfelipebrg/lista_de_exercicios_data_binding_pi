import { VoidExpr } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-de-nomes',
  standalone: false,
  styleUrl: './lista-de-nomes.scss',
  templateUrl: './lista-de-nomes.html',
})
export class ListaDeNomes {
  usuarios = [
    {
      id: 1,
      nome: 'Pedro'
    },
    {
      id: 2,
      nome: 'lucas'
    },
    {
      id: 3,
      nome: 'Gabriel'
    },
    {
      id: 4,
      nome: 'Laura'
    },
    {
      id: 5,
      nome: 'Paula'
    }
  ]
}
