import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaExercicios2RoutingModule } from './lista-exercicios-2-routing-module';
import { ExibicaoDeMensagem } from './exibicao-de-mensagem/exibicao-de-mensagem';
import { SituacaoDoUsuario } from './situacao-do-usuario/situacao-do-usuario';

@NgModule({
  declarations: [ExibicaoDeMensagem, SituacaoDoUsuario],
  imports: [CommonModule, ListaExercicios2RoutingModule],
})
export class ListaExercicios2Module {}
