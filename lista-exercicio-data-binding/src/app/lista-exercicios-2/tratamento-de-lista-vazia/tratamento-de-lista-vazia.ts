import { Component } from '@angular/core';
import { last } from 'rxjs';

@Component({
  selector: 'app-tratamento-de-lista-vazia',
  standalone: false,
  styleUrl: './tratamento-de-lista-vazia.scss',
  templateUrl: './tratamento-de-lista-vazia.html',
})
export class TratamentoDeListaVazia {
  usuarios = [
    { id: 1, nome: 'Pedro' },
    { id: 2, nome: 'lucas'},
    { id: 3, nome: 'Gabriel' },
    { id: 4, nome: 'Laura'},
    { id: 5, nome: 'Paula'}
  ]

  removerUsuario() {
    this.usuarios.pop();
  }

  limpaLista() {
    this.usuarios = [];
  }

  restaurarLista() {
    this.usuarios = [
      {id: 1, nome: 'Pedro'},
      {id: 2, nome: 'lucas'},
      {id: 3, nome: 'Gabriel'},
      {id: 4, nome: 'Laura'},
      {id: 5, nome: 'Paula'}
    ]
  }

}
