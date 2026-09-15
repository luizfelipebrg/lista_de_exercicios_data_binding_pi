import{ ApresentacaoDoUsuario } from './apresentacao-do-usuario/apresentacao-do-usuario'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

{
  path:'apresentacao-do-usuario', component: ApresentacaoDoUsuario
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaExercicios1RoutingModule {}
