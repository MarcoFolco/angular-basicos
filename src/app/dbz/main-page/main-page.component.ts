import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  personajeDefault: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 100
  }

  constructor(
  ) {}

}
