# Tarea 07 - GraphQL Deployment

## Descripción del proyecto
En esta tarea se desarrolló una API con GraphQL para entender cómo funciona este tipo de tecnología al momento de consultar información desde una base de datos.

La idea principal del proyecto fue trabajar con un solo endpoint y desde ahí hacer consultas personalizadas, pidiendo únicamente los campos que se necesitan. Para demostrarlo, se crearon dos modelos en una base de datos: **Estudiante** y **Curso**.

La aplicación fue desarrollada con **Node.js**, **Express**, **Apollo Server** y **SQLite**, y posteriormente fue desplegada en **Render** para que el endpoint quedara público.

---

## Objetivo
Crear una API GraphQL funcional, conectada a una base de datos, que permita consultar información de distintos modelos mediante un endpoint público.

---

## Tecnologías utilizadas
- Node.js
- Express
- Apollo Server
- GraphQL
- SQLite
- Render

---

## Modelos de la base de datos

### Estudiante
| Campo | Tipo | Descripción |
|---|---|---|
| id | ID | Identificador del estudiante |
| nombre | String | Nombre del estudiante |
| correo | String | Correo electrónico |
| edad | Int | Edad del estudiante |

### Curso
| Campo | Tipo | Descripción |
|---|---|---|
| id | ID | Identificador del curso |
| nombre | String | Nombre del curso |
| descripcion | String | Descripción del curso |
| creditos | Int | Créditos asignados |

---

## Endpoint público
La API quedó desplegada en el siguiente enlace:

[https://tarea-07-graphql-deployment.onrender.com/graphql](https://tarea-07-graphql-deployment.onrender.com/graphql)

---

## Consultas de ejemplo

### Consultar todos los estudiantes
```graphql
query {
  estudiantes {
    id
    nombre
    correo
    edad
  }
}

Consultar todos los cursos
query {
  cursos {
    id
    nombre
    descripcion
    creditos
  }
}

Consultar solo algunos campos de estudiantes

query {
  estudiantes {
    nombre
    correo
  }
}

ANEXOS
<img width="1915" height="900" alt="image" src="https://github.com/user-attachments/assets/2dacc1ed-4dd3-4a39-99b7-0cffb3d5b42b" />
<img width="1918" height="909" alt="image" src="https://github.com/user-attachments/assets/9372926f-7d03-4ec9-adf2-70f0e5c8b9fd" />
<img width="1919" height="1025" alt="image" src="https://github.com/user-attachments/assets/1d2dbef0-793d-4b44-a65e-f42e119384c9" />

