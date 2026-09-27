import { Component } from '@angular/core';
import { Encabezado } from './components/encabezado/encabezado';
import { BarraNavegacion } from './components/barra-navegacion/barra-navegacion';
import { Carrusel } from './components/carrusel/carrusel';
import { Medicos } from './components/medicos/medicos';
import { Registro } from './components/registro/registro';
import { Footer } from './components/footer/footer';

@Component({
  imports: [Encabezado, BarraNavegacion, Carrusel, Medicos, Registro, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
