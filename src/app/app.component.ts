import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <h1>Gestión de Bibliotecas y Libros</h1>
    <nav>
      <a routerLink="/bibliotecas">Listado de Bibliotecas</a>
      <a routerLink="/bibliotecas/nueva">Nueva Biblioteca</a>
    </nav>
    <hr>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'biblioteca-frontend';
  title2 = 'Gestión de Bibliotecas y Libros';
  tile3 = 'Bienvenido a la aplicación de gestión de bibliotecas y libros';
}
