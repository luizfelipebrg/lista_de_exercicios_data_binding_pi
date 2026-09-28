import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaExercicios2RoutingModule } from './lista-exercicios-2-routing-module';
import { ExibicaoDeMensagem } from './exibicao-de-mensagem/exibicao-de-mensagem';
import { SituacaoDoUsuario } from './situacao-do-usuario/situacao-do-usuario';
import { VerificacaoDeIdade } from './verificacao-de-idade/verificacao-de-idade';
import { SituacaoDoEstoque } from './situacao-do-estoque/situacao-do-estoque';
import { ListaDeNomes } from './lista-de-nomes/lista-de-nomes';
import { TratamentoDeListaVazia } from './tratamento-de-lista-vazia/tratamento-de-lista-vazia';

@NgModule({
  declarations: [
    ExibicaoDeMensagem,
    SituacaoDoUsuario,
    VerificacaoDeIdade,
    SituacaoDoEstoque,
    ListaDeNomes,
    TratamentoDeListaVazia,
  ],
  imports: [CommonModule, ListaExercicios2RoutingModule],
})
export class ListaExercicios2Module {}
