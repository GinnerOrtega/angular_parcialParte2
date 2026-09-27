import { Component, signal } from '@angular/core';

interface EnlaceMenu {
  texto: string;
  seccion: string;
}

@Component({
  imports: [],
  selector: 'app-barra-navegacion',
  styleUrl: './barra-navegacion.css',
  templateUrl: './barra-navegacion.html',
})
export class BarraNavegacion {
  enlaces: EnlaceMenu[] = [
    { texto: 'Promociones', seccion: 'promociones' },
    { texto: 'Nuestros médicos', seccion: 'medicos' },
    { texto: 'Regístrate', seccion: 'registro' },
  ];

  // Controla si el menú está desplegado en pantallas pequeñas
  menuAbierto = signal(false);

  
  alternarMenu(): void {
    this.menuAbierto.update((abierto) => !abierto);
  }

  cerrarMenu(): void {
    this.menuAbierto.set(false);
  }
}
