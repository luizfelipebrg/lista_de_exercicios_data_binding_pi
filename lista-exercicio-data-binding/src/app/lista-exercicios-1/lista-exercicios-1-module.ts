import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListaExercicios1RoutingModule } from './lista-exercicios-1-routing-module';
import { ApresentacaoDoUsuario } from './apresentacao-do-usuario/apresentacao-do-usuario';
import { CalculandoComInterpolation } from './calculando-com-interpolation/calculando-com-interpolation';
import { ImagemDinamica } from './imagem-dinamica/imagem-dinamica';
import { BotaoHabilitadoOuDesabilitado } from './botao-habilitado-ou-desabilitado/botao-habilitado-ou-desabilitado';
import { ContadorDeCurtidas } from './contador-de-curtidas/contador-de-curtidas';
import { ContadorCompleto } from './contador-completo/contador-completo';
import { NomeEmTempoReal } from './nome-em-tempo-real/nome-em-tempo-real';
import { CadastroDeProduto } from './cadastro-de-produto/cadastro-de-produto';
import { ControleDeEstoque } from './controle-de-estoque/controle-de-estoque';
import { LoginSimulado } from './login-simulado/login-simulado';

@NgModule({
  declarations: [
    ApresentacaoDoUsuario,
    CalculandoComInterpolation,
    ImagemDinamica,
    BotaoHabilitadoOuDesabilitado,
    ContadorDeCurtidas,
    ContadorCompleto,
    NomeEmTempoReal,
    CadastroDeProduto,
    ControleDeEstoque,
    LoginSimulado,
  ],
  imports: [CommonModule, ListaExercicios1RoutingModule, FormsModule],
})
export class ListaExercicios1Module {}
