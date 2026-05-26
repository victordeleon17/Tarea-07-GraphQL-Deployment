https://github.com/victordeleon17/Tarea-07-GraphQL-Deployment/tree/assignment-03

# Assignment 03 - HabitFlow Deployment

## Descripción del proyecto

HabitFlow es una aplicación web estática desarrollada con Vite y React. La aplicación muestra una interfaz moderna para visualizar hábitos, metas y progreso semanal.

El objetivo de esta actividad fue crear una aplicación web sencilla, dockerizarla, configurar Husky para validaciones antes de los commits, manejar secretos con Doppler, crear un pipeline con GitHub Actions y desplegar la aplicación en AWS Elastic Beanstalk.

## Tecnologías utilizadas

- Vite
- React
- Docker
- Nginx
- Husky
- Prettier
- ESLint
- Doppler
- GitHub Actions
- AWS Elastic Beanstalk
- Amazon ECR

## URL de la aplicación desplegada

La aplicación está desplegada en AWS Elastic Beanstalk en la siguiente URL:

http://assignment-app-env.eba-5fpnmqpn.us-east-1.elasticbeanstalk.com

## Configuración de Docker

La aplicación fue dockerizada usando un `Dockerfile` multi-stage.

En la primera etapa se utiliza Node.js para instalar dependencias y generar el build de producción con Vite. En la segunda etapa se utiliza Nginx para servir los archivos estáticos generados dentro de la carpeta `dist`.

Comandos utilizados para probar Docker localmente:

```bash
docker build -t habitflow-app .
docker run --rm -p 8080:80 habitflow-app

IMAGENES DE EVIDENCIA
<img width="1915" height="1071" alt="Screenshot from 2026-05-26 16-50-20" src="https://github.com/user-attachments/assets/f4fbe1c2-b307-4ad0-9d33-da0c2ae123b1" />
<img width="1915" height="1071" alt="Screenshot from 2026-05-26 16-50-09" src="https://github.com/user-attachments/assets/aaf29cf0-afd1-4c2d-a254-6a42a0b2409d" />
<img width="1915" height="1071" alt="Screenshot from 2026-05-26 16-50-00" src="https://github.com/user-attachments/assets/2fdee8d8-0292-43b8-8254-db063bc51f32" />
<img width="1915" height="1071" alt="Screenshot from 2026-05-26 16-49-41" src="https://github.com/user-attachments/assets/093851a6-97ec-43a8-a6f6-796bc13f130b" />
<img width="1915" height="1071" alt="Screenshot from 2026-05-26 16-49-18" src="https://github.com/user-attachments/assets/9456878c-9744-4553-b014-16d45ed56b00" />
