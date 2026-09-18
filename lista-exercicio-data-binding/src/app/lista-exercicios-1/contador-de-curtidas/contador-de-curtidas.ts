import { Component } from '@angular/core';

@Component({
  selector: 'app-contador-de-curtidas',
  standalone: false,
  styleUrl: './contador-de-curtidas.scss',
  templateUrl: './contador-de-curtidas.html',
})
export class ContadorDeCurtidas {
    curtidas = 0;

    acumulaCurtida() {
        this.curtidas++
    }
   
};
