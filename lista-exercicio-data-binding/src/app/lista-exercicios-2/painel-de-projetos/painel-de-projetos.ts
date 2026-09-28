import { Component } from '@angular/core';

interface Projeto {
  id: number;
  titulo: string;
  equipe: string;
  nota: number | null;
  status: 'planejamento' | 'desenvolvimento' | 'testes' | 'concluído';
  entregue: boolean;
}

@Component({
  selector: 'app-painel-de-projetos',
  standalone: false,
  styleUrl: './painel-de-projetos.scss',
  templateUrl: './painel-de-projetos.html',
})
export class PainelDeProjetos {
  ocultarConcluidos = false;

  projetos: Projeto[] = [
    { id: 1, titulo: 'Aplicativo de eventos', equipe: 'Equipe Aurora', nota: 8.5, status: 'desenvolvimento', entregue: true },
    { id: 2, titulo: 'Portal escolar', equipe: 'Equipe Beta', nota: null, status: 'planejamento', entregue: false },
    { id: 3, titulo: 'Biblioteca digital', equipe: 'Equipe Nexo', nota: 5.5, status: 'testes', entregue: false },
    { id: 4, titulo: 'Feira de ciências', equipe: 'Equipe Prisma', nota: 7, status: 'concluído', entregue: true },
    { id: 5, titulo: 'Horta inteligente', equipe: 'Equipe Ipê', nota: 6.5, status: 'desenvolvimento', entregue: false },
    { id: 6, titulo: 'Mapa cultural', equipe: 'Equipe Sol', nota: 4.5, status: 'planejamento', entregue: false },
  ];

  get totalConcluidos() {
    return this.projetos.filter((projeto) => projeto.status === 'concluído').length;
  }

  alternarProjetosConcluidos() {
    this.ocultarConcluidos = !this.ocultarConcluidos;
  }

  alterarStatus(projeto: Projeto) {
    switch (projeto.status) {
      case 'planejamento':
        projeto.status = 'desenvolvimento';
        break;
      case 'desenvolvimento':
        projeto.status = 'testes';
        break;
      case 'testes':
        projeto.status = 'concluído';
        break;
      default:
        projeto.status = 'planejamento';
    }
  }
}