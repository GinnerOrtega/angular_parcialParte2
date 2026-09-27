import { Component } from '@angular/core';

interface RedSocial {
  nombre: string;
  url: string;
  icono: string;
}

@Component({
  imports: [],
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
  anioActual = new Date().getFullYear();

  redesSociales: RedSocial[] = [
    { nombre: 'Facebook', url: 'https://facebook.com', icono: 'fab fa-facebook-f' },
    { nombre: 'Instagram', url: 'https://instagram.com', icono: 'fab fa-instagram' },
    { nombre: 'WhatsApp', url: 'https://wa.me/573000000000', icono: 'fab fa-whatsapp' },
  ];
}
