import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Campo =
  | 'tipoIdentificacion'
  | 'numeroIdentificacion'
  | 'nombres'
  | 'apellidos'
  | 'correo'
  | 'telefono'
  | 'genero'
  | 'terminos';

interface DatosRegistro {
  tipoIdentificacion: string;
  numeroIdentificacion: string;
  nombres: string;
  apellidos: string;
  correo: string;
  telefono: string;
  genero: string;
  fechaNacimiento: string;
  terminos: boolean;
}

// null = el campo aún no se ha validado, '' = válido, texto = mensaje de error
type Errores = Record<Campo, string | null>;

@Component({
  imports: [FormsModule],
  selector: 'app-registro',
  styleUrl: './registro.css',
  templateUrl: './registro.html',
})
export class Registro {
  tiposIdentificacion = [
    { valor: 'cc', texto: 'Cédula de Ciudadanía' },
    { valor: 'ti', texto: 'Tarjeta de Identidad' },
    { valor: 'ce', texto: 'Cédula de Extranjería' },
    { valor: 'pas', texto: 'Pasaporte' },
  ];

  generos = [
    { valor: 'femenino', texto: 'Femenino' },
    { valor: 'masculino', texto: 'Masculino' },
    { valor: 'otro', texto: 'Otro' },
  ];

  datos: DatosRegistro = this.datosIniciales();
  errores = signal<Errores>(this.erroresIniciales());

  mensajeError = signal('');
  mostrarToast = signal(false);

  private formulario = viewChild<ElementRef<HTMLFormElement>>('formularioRegistro');

  validarCampoObligatorio(valor: string, mensaje: string): string {
    return valor.trim() === '' ? mensaje : '';
  }

  validarLongitud(valor: string, min: number, max: number, mensaje: string): string {
    const longitud = valor.trim().length;
    return longitud < min || longitud > max ? mensaje : '';
  }

  validarCorreo(valor: string, mensaje: string): string {
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return correoRegex.test(valor.trim()) ? '' : mensaje;
  }

  validarTelefono(valor: string, mensaje: string): string {
    const telefonoRegex = /^[0-9]{7,10}$/;
    return telefonoRegex.test(valor.trim()) ? '' : mensaje;
  }

  validarGenero(valor: string, mensaje: string): string {
    return valor === '' ? mensaje : '';
  }

  validarTerminos(aceptado: boolean, mensaje: string): string {
    return aceptado ? '' : mensaje;
  }

  validarCampo(campo: Campo): boolean {
    let error = '';

    switch (campo) {
      case 'tipoIdentificacion':
        error = this.validarCampoObligatorio(this.datos.tipoIdentificacion, 'El tipo de identificación es obligatorio.');
        break;
      case 'numeroIdentificacion':
        error = this.validarCampoObligatorio(this.datos.numeroIdentificacion, 'El número de identificación es obligatorio.');
        break;
      case 'nombres':
        error = this.validarLongitud(this.datos.nombres, 1, 30, 'El nombre debe tener entre 1 y 30 caracteres.');
        break;
      case 'apellidos':
        error = this.validarLongitud(this.datos.apellidos, 1, 30, 'El apellido debe tener entre 1 y 30 caracteres.');
        break;
      case 'correo':
        error = this.validarCorreo(this.datos.correo, 'Ingresa un correo electrónico válido.');
        break;
      case 'telefono':
        error = this.validarTelefono(this.datos.telefono, 'Ingresa un teléfono válido (solo números, 7 a 10 dígitos).');
        break;
      case 'genero':
        error = this.validarGenero(this.datos.genero, 'El género es obligatorio.');
        break;
      case 'terminos':
        error = this.validarTerminos(this.datos.terminos, 'Debes aceptar los términos y condiciones.');
        break;
    }

    this.errores.update((errores) => ({ ...errores, [campo]: error }));
    return error === '';
  }

  // Valida todo el formulario. Se llama al dar clic en "Registrar".
  registrar(): void {
    const campos = Object.keys(this.errores()) as Campo[];
    const resultados = campos.map((campo) => this.validarCampo(campo));
    const formularioValido = resultados.every((valido) => valido);

    if (formularioValido) {
      this.mensajeError.set('');
      this.mostrarMensajeExito();
      this.formulario()?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

      setTimeout(() => this.limpiarFormulario(), 2000);
    } else {
      this.mensajeError.set('Por favor, completa correctamente el formulario.');
    }
  }

  mostrarMensajeExito(): void {
    this.mostrarToast.set(true);
    setTimeout(() => this.mostrarToast.set(false), 3000);
  }

  limpiarFormulario(): void {
    this.datos = this.datosIniciales();
    this.errores.set(this.erroresIniciales());
  }

  private datosIniciales(): DatosRegistro {
    return {
      tipoIdentificacion: '',
      numeroIdentificacion: '',
      nombres: '',
      apellidos: '',
      correo: '',
      telefono: '',
      genero: '',
      fechaNacimiento: '',
      terminos: false,
    };
  }

  private erroresIniciales(): Errores {
    return {
      tipoIdentificacion: null,
      numeroIdentificacion: null,
      nombres: null,
      apellidos: null,
      correo: null,
      telefono: null,
      genero: null,
      terminos: null,
    };
  }
}
