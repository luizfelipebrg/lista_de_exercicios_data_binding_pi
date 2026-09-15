import{ ApresentacaoDoUsuario } from './apresentacao-do-usuario/apresentacao-do-usuario'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculandoComInterpolation } from './calculando-com-interpolation/calculando-com-interpolation';

const routes: Routes = [

{
  path:'apresentacao-do-usuario', component: ApresentacaoDoUsuario
},
{
  path: 'calculando-com-interpolation', component: CalculandoComInterpolation
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaExercicios1RoutingModule {}
