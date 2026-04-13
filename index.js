const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./database.db");

// ===============================
// CREACION DE BASE DE DATOS
// ===============================
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS estudiantes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT NOT NULL,
      correo TEXT NOT NULL,
      edad INTEGER NOT NULL
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS cursos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT NOT NULL,
      descripcion TEXT NOT NULL,
      creditos INTEGER NOT NULL
    )
  `);

  // Limpiar datos para evitar duplicados cada vez que se ejecute
  db.run(`DELETE FROM estudiantes`);
  db.run(`DELETE FROM cursos`);

  // Reiniciar contador de AUTOINCREMENT
  db.run(`DELETE FROM sqlite_sequence WHERE name='estudiantes'`);
  db.run(`DELETE FROM sqlite_sequence WHERE name='cursos'`);

  // Insertar estudiantes de prueba
  db.run(`
    INSERT INTO estudiantes (nombre, correo, edad)
    VALUES 
    ('Juan Pérez', 'juan@correo.com', 20),
    ('María López', 'maria@correo.com', 22)
  `);

  // Insertar cursos de prueba
  db.run(`
    INSERT INTO cursos (nombre, descripcion, creditos)
    VALUES 
    ('Bases de Datos', 'Curso sobre diseño y manejo de bases de datos', 4),
    ('Programación Web', 'Curso enfocado en desarrollo web moderno', 5)
  `);
});

// ===============================
// ESQUEMA GRAPHQL
// ===============================
const typeDefs = gql`
  type Estudiante {
    id: ID!
    nombre: String!
    correo: String!
    edad: Int!
  }

  type Curso {
    id: ID!
    nombre: String!
    descripcion: String!
    creditos: Int!
  }

  type Query {
    estudiantes: [Estudiante]
    estudiante(id: ID!): Estudiante
    cursos: [Curso]
    curso(id: ID!): Curso
  }
`;

// ===============================
// RESOLVERS
// ===============================
const resolvers = {
  Query: {
    estudiantes: async () => {
      return new Promise((resolve, reject) => {
        db.all("SELECT * FROM estudiantes", [], (err, rows) => {
          if (err) reject(err);
          else resolve(rows);
        });
      });
    },

    estudiante: async (_, { id }) => {
      return new Promise((resolve, reject) => {
        db.get(
          "SELECT * FROM estudiantes WHERE id = ?",
          [id],
          (err, row) => {
            if (err) reject(err);
            else resolve(row);
          }
        );
      });
    },

    cursos: async () => {
      return new Promise((resolve, reject) => {
        db.all("SELECT * FROM cursos", [], (err, rows) => {
          if (err) reject(err);
          else resolve(rows);
        });
      });
    },

    curso: async (_, { id }) => {
      return new Promise((resolve, reject) => {
        db.get("SELECT * FROM cursos WHERE id = ?", [id], (err, row) => {
          if (err) reject(err);
          else resolve(row);
        });
      });
    },
  },
};

// ===============================
// INICIAR SERVIDOR
// ===============================
async function startServer() {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });

  const PORT = process.env.PORT || 4000;

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/graphql`);
  });
}

startServer().catch((error) => {
  console.error("Error al iniciar el servidor:", error);
});