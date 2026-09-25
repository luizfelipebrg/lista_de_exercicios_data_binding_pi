import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExibicaoDeMensagem } from './exibicao-de-mensagem/exibicao-de-mensagem';
import { SituacaoDoUsuario } from './situacao-do-usuario/situacao-do-usuario';
import { VerificacaoDeIdade } from './verificacao-de-idade/verificacao-de-idade'

const routes: Routes = [

  { path: 'exibicao-de-mensagem', component: ExibicaoDeMensagem },
  { path: 'situacao-do-usuario', component: SituacaoDoUsuario },
  { path: 'verificacao-de-idade', component: VerificacaoDeIdade },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaExercicios2RoutingModule {}
