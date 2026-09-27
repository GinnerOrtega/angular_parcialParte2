import { Component, computed, signal } from '@angular/core';

interface Especialidad {
  clave: string;
  nombre: string;
  icono: string;
  descripcion: string;
}

interface Medico {
  nombre: string;
  especialidad: string; // clave de la especialidad
  subtitulo: string;
  descripcion: string;
  imagen: string;
}

@Component({
  imports: [],
  selector: 'app-medicos',
  styleUrl: './medicos.css',
  templateUrl: './medicos.html',
})
export class Medicos {
  especialidades: Especialidad[] = [
    {
      clave: 'neural',
      nombre: 'Terapia Neural',
      icono: 'fas fa-brain',
      descripcion:
        'La Terapia Neural regula el sistema nervioso mediante la aplicación de anestésicos locales en puntos específicos, ayudando a aliviar dolores crónicos y bloqueos energéticos.',
    },
    {
      clave: 'quiropraxia',
      nombre: 'Quiropraxia',
      icono: 'fas fa-bone',
      descripcion:
        'La Quiropraxia se enfoca en el diagnóstico y tratamiento manual de problemas de la columna vertebral y el sistema musculoesquelético.',
    },
    {
      clave: 'fisioterapia',
      nombre: 'Fisioterapia',
      icono: 'fas fa-dumbbell',
      descripcion:
        'La Fisioterapia utiliza ejercicios, movilizaciones y agentes físicos para prevenir, tratar y rehabilitar lesiones y enfermedades del movimiento.',
    },
    {
      clave: 'nutricion',
      nombre: 'Nutrición y Dietética Terapéutica',
      icono: 'fas fa-apple-whole',
      descripcion:
        'La Nutrición y Dietética Terapéutica diseña planes alimenticios personalizados para tratar enfermedades y mejorar la calidad de vida de los pacientes.',
    },
  ];

  medicos: Medico[] = [
    {
      nombre: 'Dr. Juan Pérez',
      especialidad: 'fisioterapia',
      subtitulo: 'Fisioterapia Deportiva',
      descripcion: 'Comprometido con tu recuperación y tu rendimiento físico.',
      imagen: 'img/medicos/juan-perez.jpg',
    },
    {
      nombre: 'Dra. Catalina Sánchez',
      especialidad: 'quiropraxia',
      subtitulo: 'Quiropraxia',
      descripcion: 'La salud de tu columna es fundamental para tu bienestar.',
      imagen: 'img/medicos/catalina-sanchez.jpg',
    },
    {
      nombre: 'Dr. Andrés Cardozo',
      especialidad: 'nutricion',
      subtitulo: 'Nutrición y Dietética Terapéutica',
      descripcion: 'Un alimento sano alarga y mejora tu calidad de vida.',
      imagen: 'img/medicos/andres-cardozo.jpg',
    },
    {
      nombre: 'Dra. Laura Gómez',
      especialidad: 'neural',
      subtitulo: 'Terapia Neural',
      descripcion: 'Tratamientos enfocados en regular el sistema nervioso.',
      imagen: 'img/medicos/laura-gomez.jpg',
    },
  ];

  // Especialidad que el usuario seleccionó en la barra lateral (null = ninguna)
  especialidadSeleccionada = signal<Especialidad | null>(null);

  // Médicos que pertenecen a la especialidad seleccionada
  cantidadMedicos = computed(() => {
    const seleccionada = this.especialidadSeleccionada();
    return seleccionada ? this.medicos.filter((m) => m.especialidad === seleccionada.clave).length : 0;
  });

  // Muestra la descripción de la especialidad al hacer clic
  mostrarDescripcion(especialidad: Especialidad): void {
    this.especialidadSeleccionada.set(especialidad);
  }

  cerrarDescripcion(): void {
    this.especialidadSeleccionada.set(null);
  }

  esSeleccionada(especialidad: Especialidad): boolean {
    return this.especialidadSeleccionada()?.clave === especialidad.clave;
  }

  // Resalta la tarjeta del médico que pertenece a la especialidad seleccionada
  esDestacado(medico: Medico): boolean {
    return this.especialidadSeleccionada()?.clave === medico.especialidad;
  }

  obtenerIcono(clave: string): string {
    return this.especialidades.find((e) => e.clave === clave)?.icono ?? 'fas fa-user-doctor';
  }
}
