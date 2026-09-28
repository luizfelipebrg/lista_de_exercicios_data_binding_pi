import { Component } from '@angular/core';

interface Tarefa {
  id: number;
  titulo: string;
  responsavel: string;
  prioridade: 'baixa' | 'média' | 'alta';
  concluida: boolean;
}

@Component({
  selector: 'app-lista-de-tarefas',
  standalone: false,
  styleUrl: './lista-de-tarefas.scss',
  templateUrl: './lista-de-tarefas.html',
})
export class ListaDeTarefas {
  tarefas: Tarefa[] = [
    { id: 1, titulo: 'Definir escopo', responsavel: 'Ana', prioridade: 'alta', concluida: true },
    { id: 2, titulo: 'Criar protótipo', responsavel: 'Bruno', prioridade: 'média', concluida: false },
    { id: 3, titulo: 'Preparar ambiente', responsavel: 'Carla', prioridade: 'baixa', concluida: true },
    { id: 4, titulo: 'Implementar tela', responsavel: 'Diego', prioridade: 'alta', concluida: false },
    { id: 5, titulo: 'Revisar conteúdo', responsavel: 'Eva', prioridade: 'média', concluida: false },
    { id: 6, titulo: 'Testar formulário', responsavel: 'Felipe', prioridade: 'baixa', concluida: true },
  ];

  get totalConcluidas() {
    return this.tarefas.filter((tarefa) => tarefa.concluida).length;
  }

  get totalPendentes() {
    return this.tarefas.filter((tarefa) => !tarefa.concluida).length;
  }

  alterarSituacao(tarefa: Tarefa) {
    tarefa.concluida = !tarefa.concluida;
  }
}