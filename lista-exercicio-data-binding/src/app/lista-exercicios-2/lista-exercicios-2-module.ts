import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListaExercicios2RoutingModule } from './lista-exercicios-2-routing-module';
import { ExibicaoDeMensagem } from './exibicao-de-mensagem/exibicao-de-mensagem';
import { SituacaoDoUsuario } from './situacao-do-usuario/situacao-do-usuario';
import { VerificacaoDeIdade } from './verificacao-de-idade/verificacao-de-idade';
import { SituacaoDoEstoque } from './situacao-do-estoque/situacao-do-estoque';
import { ListaDeNomes } from './lista-de-nomes/lista-de-nomes';
import { TratamentoDeListaVazia } from './tratamento-de-lista-vazia/tratamento-de-lista-vazia';
import { CoresAlternadas } from './cores-alternadas/cores-alternadas';
import { ListaDeProdutos } from './lista-de-produtos/lista-de-produtos';
import { ClassificacaoDeProdutos } from './classificacao-de-produtos/classificacao-de-produtos';
import { PromocaoDeProdutos } from './promocao-de-produtos/promocao-de-produtos';
import { ProdutosDisponiveis } from './produtos-disponiveis/produtos-disponiveis';
import { CadastroDeProdutos } from './cadastro-de-produtos/cadastro-de-produtos';
import { ListaDeTarefas } from './lista-de-tarefas/lista-de-tarefas';

@NgModule({
  declarations: [
    ExibicaoDeMensagem,
    SituacaoDoUsuario,
    VerificacaoDeIdade,
    SituacaoDoEstoque,
    ListaDeNomes,
    TratamentoDeListaVazia,
    CoresAlternadas,
    ListaDeProdutos,
    ClassificacaoDeProdutos,
    PromocaoDeProdutos,
    ProdutosDisponiveis,
    CadastroDeProdutos,
    ListaDeTarefas,
  ],
  imports: [CommonModule, FormsModule, ListaExercicios2RoutingModule],
})
export class ListaExercicios2Module {}
