import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExibicaoDeMensagem } from './exibicao-de-mensagem/exibicao-de-mensagem';
import { SituacaoDoUsuario } from './situacao-do-usuario/situacao-do-usuario';
import { VerificacaoDeIdade } from './verificacao-de-idade/verificacao-de-idade'
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

const routes: Routes = [

  { path: 'exibicao-de-mensagem', component: ExibicaoDeMensagem },
  { path: 'situacao-do-usuario', component: SituacaoDoUsuario },
  { path: 'verificacao-de-idade', component: VerificacaoDeIdade },
  { path: 'situacao-do-estoque', component: SituacaoDoEstoque },
  { path: 'lista-de-nomes', component: ListaDeNomes },
  { path: 'tratamento-de-lista-vazia', component: TratamentoDeListaVazia },
  { path: 'cores-alternadas', component: CoresAlternadas },
  { path: 'lista-de-produtos', component: ListaDeProdutos },
  { path: 'classificacao-de-produtos', component: ClassificacaoDeProdutos },
  { path: 'promocao-de-produtos', component: PromocaoDeProdutos },
  { path: 'produtos-disponiveis', component: ProdutosDisponiveis },
  { path: 'cadastro-de-produtos', component: CadastroDeProdutos },
  { path: 'lista-de-tarefas', component: ListaDeTarefas },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaExercicios2RoutingModule {}
