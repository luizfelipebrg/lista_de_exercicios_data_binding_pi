import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListaExercicios1RoutingModule } from './lista-exercicios-1-routing-module';
import { ApresentacaoDoUsuario } from './apresentacao-do-usuario/apresentacao-do-usuario';
import { CalculandoComInterpolation } from './calculando-com-interpolation/calculando-com-interpolation';
import { ImagemDinamica } from './imagem-dinamica/imagem-dinamica';

@NgModule({
  declarations: [ApresentacaoDoUsuario, CalculandoComInterpolation, ImagemDinamica],
  imports: [CommonModule, ListaExercicios1RoutingModule, FormsModule],
})
export class ListaExercicios1Module {}
