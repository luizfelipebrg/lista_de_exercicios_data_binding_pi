import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListaExercicios1RoutingModule } from './lista-exercicios-1-routing-module';
import { ApresentacaoDoUsuario } from './apresentacao-do-usuario/apresentacao-do-usuario';

@NgModule({
  declarations: [ApresentacaoDoUsuario],
  imports: [CommonModule, ListaExercicios1RoutingModule, FormsModule],
})
export class ListaExercicios1Module {}
