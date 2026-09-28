import { Component } from '@angular/core';

@Component({
  selector: 'app-cores-alternadas',
  standalone: false,
  styleUrl: './cores-alternadas.scss',
  templateUrl: './cores-alternadas.html',
})
export class CoresAlternadas {
  disciplinas = [
    'Matemática',
    'Português',
    'História',
    'Geografia',
    'Ciências',
    'Inglês',
  ];
}