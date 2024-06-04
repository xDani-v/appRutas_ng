import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rutas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rutas.component.html',
  styleUrl: './rutas.component.css'
})
export class RutasComponent {

  descripcionSeleccionada: number | null = null;
  terminoBusqueda: string = '';

  rutas = [
    { origen: 'Quito', destino: 'Guayaquil', precio: 100, descripcion: 'Transporte directo sin paradas', tipo: 'interno' },
    { origen: 'Guayaquil', destino: 'Cuenca', precio: 150, descripcion: 'Transporte con parada en Machala', tipo: 'interno' },
    { origen: 'Cuenca', destino: 'Loja', precio: 200, descripcion: 'Transporte con vistas panorámicas a la Sierra', tipo: 'externo' },
    { origen: 'Loja', destino: 'Machala', precio: 250, descripcion: 'Transporte nocturno con servicio de cena', tipo: 'externo' },
    { origen: 'Machala', destino: 'Esmeraldas', precio: 300, descripcion: 'Transporte con parada en Guayaquil', tipo: 'interno' },
    { origen: 'Esmeraldas', destino: 'Manta', precio: 350, descripcion: 'Transporte directo con servicio de desayuno', tipo: 'externo' },
    { origen: 'Manta', destino: 'Portoviejo', precio: 400, descripcion: 'Transporte con parada en Montecristi', tipo: 'interno' },
    { origen: 'Portoviejo', destino: 'Ambato', precio: 450, descripcion: 'Transporte con vistas al Bosque Petrificado Puyango', tipo: 'externo' },
    { origen: 'Ambato', destino: 'Riobamba', precio: 500, descripcion: 'Transporte con parada en Baños', tipo: 'interno' },
    { origen: 'Riobamba', destino: 'Quito', precio: 550, descripcion: 'Transporte directo con servicio de almuerzo', tipo: 'externo' }
  ];

  tipoSeleccionado = 'todos';


  seleccionarTipo(tipo: string) {
    this.tipoSeleccionado = tipo;
  }

  get rutasFiltradasPorBusqueda() {
    return this.rutas.filter(ruta =>
      (ruta.origen.toLowerCase().includes(this.terminoBusqueda.toLowerCase()) ||
        ruta.destino.toLowerCase().includes(this.terminoBusqueda.toLowerCase())) &&
      (this.tipoSeleccionado === 'todos' || ruta.tipo === this.tipoSeleccionado)
    );
  }
}
