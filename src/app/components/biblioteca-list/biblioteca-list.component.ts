import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BibliotecaService } from '../../services/biblioteca.service';
import { Biblioteca } from '../../models/biblioteca.model';

@Component({
  selector: 'app-biblioteca-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <h2>Listado de Bibliotecas</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Dirección</th>
          <th>Teléfono</th>
          <th>Responsable</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let biblioteca of bibliotecas">
          <td>{{ biblioteca.id }}</td>
          <td>{{ biblioteca.nombre }}</td>
          <td>{{ biblioteca.direccion }}</td>
          <td>{{ biblioteca.telefono }}</td>
          <td>{{ biblioteca.responsable }}</td>
          <td>
            <button (click)="eliminar(biblioteca.id!)">Eliminar</button>
          </td>
        </tr>
        <tr *ngIf="bibliotecas.length === 0">
          <td colspan="6">No hay bibliotecas registradas.</td>
        </tr>
      </tbody>
    </table>
  `
})
export class BibliotecaListComponent implements OnInit {
  bibliotecas: Biblioteca[] = [];

  constructor(private bibliotecaService: BibliotecaService) { }

  ngOnInit(): void {
    this.cargarBibliotecas();
  }

  cargarBibliotecas(): void {
    this.bibliotecaService.obtenerTodas().subscribe({
      next: (data) => this.bibliotecas = data,
      error: (error) => console.error('Error al cargar bibliotecas:', error)
    });
  }

  eliminar(id: number): void {
    if (confirm('¿Está seguro de eliminar esta biblioteca?')) {
      this.bibliotecaService.eliminar(id).subscribe({
        next: () => this.cargarBibliotecas(),
        error: (error) => console.error('Error al eliminar:', error)
      });
    }
  }
}
