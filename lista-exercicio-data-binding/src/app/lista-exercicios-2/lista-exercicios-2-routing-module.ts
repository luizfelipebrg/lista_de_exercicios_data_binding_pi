import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExibicaoDeMensagem } from './exibicao-de-mensagem/exibicao-de-mensagem';

const routes: Routes = [

  { path: 'exibicao-de-mensagem', component: ExibicaoDeMensagem },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaExercicios2RoutingModule {}
