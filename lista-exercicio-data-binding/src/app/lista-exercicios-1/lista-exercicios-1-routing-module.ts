import{ ApresentacaoDoUsuario } from './apresentacao-do-usuario/apresentacao-do-usuario'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculandoComInterpolation } from './calculando-com-interpolation/calculando-com-interpolation';
import { ImagemDinamica } from './imagem-dinamica/imagem-dinamica';
import { BotaoHabilitadoOuDesabilitado } from './botao-habilitado-ou-desabilitado/botao-habilitado-ou-desabilitado';
import { ContadorDeCurtidas } from './contador-de-curtidas/contador-de-curtidas';
import { ContadorCompleto } from './contador-completo/contador-completo';

const routes: Routes = [

{ path:'apresentacao-do-usuario', component: ApresentacaoDoUsuario },
{ path: 'calculando-com-interpolation', component: CalculandoComInterpolation },
{ path: 'imagem-dinamica', component: ImagemDinamica },
{ path: 'botao-habilitado-ou-desabilitado', component: BotaoHabilitadoOuDesabilitado },
{ path: 'contador-de-curtidas', component: ContadorDeCurtidas },
{ path: 'contador-completo', component: ContadorCompleto },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaExercicios1RoutingModule {}
