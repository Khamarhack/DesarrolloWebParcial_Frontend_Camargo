import { Routes } from '@angular/router';
import { BibliotecaListComponent } from './components/biblioteca-list/biblioteca-list.component';
import { BibliotecaFormComponent } from './components/biblioteca-form/biblioteca-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/bibliotecas', pathMatch: 'full' },
  { path: 'bibliotecas', component: BibliotecaListComponent },
  { path: 'bibliotecas/nueva', component: BibliotecaFormComponent }
];
