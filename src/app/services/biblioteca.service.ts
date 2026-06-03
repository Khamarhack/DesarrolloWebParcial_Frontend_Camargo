import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Biblioteca } from '../models/biblioteca.model';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {
  private apiUrl = 'http://localhost:8080/api/bibliotecas';

  constructor(private http: HttpClient) { }

  obtenerTodas(): Observable<Biblioteca[]> {
    return this.http.get<Biblioteca[]>(this.apiUrl);
  }

  obtenerPorId(id: number): Observable<Biblioteca> {
    return this.http.get<Biblioteca>(`${this.apiUrl}/${id}`);
  }

  crear(biblioteca: Biblioteca): Observable<Biblioteca> {
    return this.http.post<Biblioteca>(this.apiUrl, biblioteca);
  }

  actualizar(id: number, biblioteca: Biblioteca): Observable<Biblioteca> {
    return this.http.put<Biblioteca>(`${this.apiUrl}/${id}`, biblioteca);
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
}
