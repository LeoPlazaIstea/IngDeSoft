# 📚 Trabajo Practico - Ingenieria de Software
Repaso de los conceptos aprendidos para las herramientas Git Y Docker

## 📋 tareas
- Subí un proyecto simple (puede ser HTML, Node.js o Python) a un repositorio en GitHub (o GitLab, Bitbucket, etc.). 
- Descargá una imagen desde Docker Hub (por ejemplo, nginx, node, python, flask, etc.).
- Hacé que tu proyecto funcione dentro de un contenedor Docker usando esa imagen.
- Documentá los pasos básicos en un archivo README.md.

## ✅ Puntos a tener en cuenta: 

- **El enlace al repositorio con el proyecto** - [Click aquí](https://github.com/LeoPlazaIstea/IngDeSoft)
- **El README.md con las instrucciones claras de uso y armado del contenedor** - Tareas asignadas

## ⚙️ Descripcion y Funcionamiento
La web app es un desarrollo basico que permite simular lanzamientos de moneda para obtener cara o seca con una moneda animada con css mientras que el lanzamiento se delega a Javascript Vanilla.
Para lanzar la moneda el usuario debe clickear en la misma mientras que los acumuladores se incrementan con cada resultado.


## 🌐 Pasos para el despliegue de la aplicación.

### 🐱Git:
1. La aplicación fue desarrollada de manera local. 
2. Se creo un nuevo repositorio en Git para el proyecto.
3. Dentro del fichero donde se encuentra el codigo de la aplicación se abrio una terminal.
4. En la terminal se ejecuta el comando "git init" para establecer que es un proyecto de Git.
5. En la terminal se ejecuta "git add -A" para agregar a la cola del commit los archivos.
6. Desde la terminal ejecutamos los pasos recomendados por git para hacer push de un repositorio local (push an existing repository from the command line):
- git remote add origin https://github.com/LeoPlazaIstea/IngDeSoft.git
- git branch -M main
- git push -u origin main

### 🐋Docker:

