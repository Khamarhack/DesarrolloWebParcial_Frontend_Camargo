# Frontend - Gestión de Bibliotecas

Aplicación Angular para la gestión de bibliotecas (entidad padre).

## Tecnologías

- Angular 17
- TypeScript
- RxJS
- HttpClient

## Instalación

```bash
cd frontend
npm install
```

## Ejecutar

```bash
npm start
```

La aplicación estará disponible en `http://localhost:4200` y consume el backend en `http://localhost:8080/api/bibliotecas`.

## Características

- Listado de bibliotecas (consume `GET /api/bibliotecas`)
- Crear nuevas bibliotecas (consume `POST /api/bibliotecas`)
- Eliminar bibliotecas (consume `DELETE /api/bibliotecas/{id}`)
