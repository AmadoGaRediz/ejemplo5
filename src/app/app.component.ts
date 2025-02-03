import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lista de Canciones de Skrillex';

  // Propiedades
  cancion = {
    id: 0,
    titulo: '',
    duracion: ''
  };

  // Arreglo de canciones
  canciones = [
    { id: 1, titulo: 'Bangarang', duracion: '3:35' },
    { id: 2, titulo: 'Scary Monsters and Nice Sprites', duracion: '4:04' },
    { id: 3, titulo: 'First of the Year (Equinox)', duracion: '4:22' },
    { id: 4, titulo: 'Make It Bun Dem', duracion: '3:35' },
    { id: 5, titulo: 'Kyoto', duracion: '3:20' }
  ];

  // Método que determina si hay canciones en la lista
  hayCanciones() {
    return this.canciones.length > 0;
  }

  // Función que agrega canciones a la lista
  agregarCancion() {
    if (this.cancion.id == 0) {
      alert('El ID de la canción debe ser diferente de CERO');
      return;
    }
    for (let i = 0; i < this.canciones.length; i++) {
      if (this.cancion.id == this.canciones[i].id) {
        alert('Ya existe una canción con ese ID :( ');
        return;
      }
    }
    this.canciones.push({
      id: this.cancion.id,
      titulo: this.cancion.titulo,
      duracion: this.cancion.duracion
    });
    this.cancion.id = 0;
    this.cancion.titulo = '';
    this.cancion.duracion = '';
  }

  // Método para seleccionar una canción existente
  seleccionarCancion(cancionSeleccionada: { id: number; titulo: string; duracion: string }) {
    this.cancion.id = cancionSeleccionada.id;
    this.cancion.titulo = cancionSeleccionada.titulo;
    this.cancion.duracion = cancionSeleccionada.duracion;
  }

  // Función para modificar una canción (La canción seleccionada)
  modificarCancion() {
    for (let i = 0; i < this.canciones.length; i++) {
      if (this.cancion.id == this.canciones[i].id) {
        this.canciones[i].titulo = this.cancion.titulo;
        this.canciones[i].duracion = this.cancion.duracion;

        this.cancion.id = 0;
        this.cancion.titulo = '';
        this.cancion.duracion = '';
        return;
      }
    }
    alert('No existe el ID');
  }

  // Función para eliminar una canción
  eliminarCancion(id: number) {
    for (let i = 0; i < this.canciones.length; i++) {
      if (id == this.canciones[i].id) {
        this.canciones.splice(i, 1);
        return;
      }
    }
  }
}
