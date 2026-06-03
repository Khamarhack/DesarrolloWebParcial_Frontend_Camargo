import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BibliotecaService } from '../../services/biblioteca.service';
import { Biblioteca } from '../../models/biblioteca.model';

@Component({
  selector: 'app-biblioteca-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Nueva Biblioteca</h2>
    <form (ngSubmit)="guardar()">
      <div class="form-group">
        <label>Nombre:</label>
        <input type="text" [(ngModel)]="biblioteca.nombre" name="nombre" required>
      </div>
      <div class="form-group">
        <label>Dirección:</label>
        <input type="text" [(ngModel)]="biblioteca.direccion" name="direccion" required>
      </div>
      <div class="form-group">
        <label>Teléfono:</label>
        <input type="text" [(ngModel)]="biblioteca.telefono" name="telefono" required>
      </div>
      <div class="form-group">
        <label>Responsable:</label>
        <input type="text" [(ngModel)]="biblioteca.responsable" name="responsable" required>
      </div>
      <button type="submit">Guardar</button>
      <button type="button" (click)="cancelar()">Cancelar</button>
    </form>
  `
})
export class BibliotecaFormComponent {
  biblioteca: Biblioteca = {
    nombre: '',
    direccion: '',
    telefono: '',
    responsable: ''
  };

  constructor(
    private bibliotecaService: BibliotecaService,
    private router: Router
  ) { }

  guardar(): void {
    this.bibliotecaService.crear(this.biblioteca).subscribe({
      next: () => {
        alert('Biblioteca creada exitosamente');
        this.router.navigate(['/bibliotecas']);
      },
      error: (error) => console.error('Error al crear biblioteca:', error)
    });
  }

  cancelar(): void {
    this.router.navigate(['/bibliotecas']);
  }
}
