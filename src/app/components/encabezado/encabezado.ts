import { Component } from '@angular/core';

interface RedSocial {
  nombre: string;
  url: string;
  icono: string;
}

@Component({
  imports: [],
  selector: 'app-encabezado',
  styleUrl: './encabezado.css',
  templateUrl: './encabezado.html',
})
export class Encabezado {
  titulo = 'AGENDAMIENTO DE CITAS MÉDICAS';
  subtitulo = 'Encuentra a nuestros especialistas y agenda tu cita en minutos.';

  redesSociales: RedSocial[] = [
    { nombre: 'Facebook', url: 'https://facebook.com', icono: 'fab fa-facebook-f' },
    { nombre: 'Instagram', url: 'https://instagram.com', icono: 'fab fa-instagram' },
    { nombre: 'WhatsApp', url: 'https://wa.me/573000000000', icono: 'fab fa-whatsapp' },
  ];
}
