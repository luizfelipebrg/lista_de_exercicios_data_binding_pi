import { Component } from '@angular/core';

@Component({
  selector: 'app-contador-completo',
  standalone: false,
  styleUrl: './contador-completo.scss',
  templateUrl: './contador-completo.html',
})
export class ContadorCompleto {

  quantidade = 0;

  botaoP() {
    this.quantidade++;
  }

  botaoN() {
    if (this.quantidade > 0) {
      this.quantidade--;
    }
  }

  
}
