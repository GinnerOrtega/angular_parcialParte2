import { Component } from '@angular/core';

interface Promocion {
  imagen: string;
  alt: string;
  titulo: string;
  descripcion: string;
}

@Component({
  imports: [],
  selector: 'app-carrusel',
  styleUrl: './carrusel.css',
  templateUrl: './carrusel.html',
})
export class Carrusel {
  promociones: Promocion[] = [
    {
      imagen: 'img/promociones/chequeo.jpg',
      alt: 'Chequeo médico general',
      titulo: 'Chequeo general -30%',
      descripcion: 'Reserva tu cita este mes y recibe un descuento especial.',
    },
    {
      imagen: 'img/promociones/fisioterapia.jpg',
      alt: 'Sesión de fisioterapia',
      titulo: 'Fisioterapia deportiva',
      descripcion: 'Paquete de 5 sesiones con precio especial de lanzamiento.',
    },
    {
      imagen: 'img/promociones/nutricion.jpg',
      alt: 'Valoración nutricional',
      titulo: 'Valoración nutricional gratis',
      descripcion: 'Para nuevos pacientes que agenden durante este mes.',
    },
  ];
}
