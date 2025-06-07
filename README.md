# 📚 Trabajo Practico - ingeniería de Software
Repaso de los conceptos aprendidos para las herramientas Git Y Docker

## 📋 Tareas
- Subí un proyecto simple (puede ser HTML, Node.js o Python) a un repositorio en GitHub (o GitLab, Bitbucket, etc.). 
- Descargá una imagen desde Docker Hub (por ejemplo, nginx, node, python, flask, etc.).
- Hacé que tu proyecto funcione dentro de un contenedor Docker usando esa imagen.
- Documentá los pasos básicos en un archivo README.md.

## ✅ Puntos a tener en cuenta: 

- **El enlace al repositorio con el proyecto** - [Click aquí](https://github.com/LeoPlazaIstea/IngDeSoft)
- **El README.md con las instrucciones claras de uso y armado del contenedor** 

## ⚙️ Descripción y Funcionamiento
La web app es un desarrollo básico que permite simular lanzamientos de moneda para obtener cara o seca con una moneda animada con css mientras que el lanzamiento se delega a Javascript Vanilla.  
Para lanzar la moneda el usuario debe clickear en la misma mientras que los acumuladores se incrementan con cada resultado.


## 🐱 Pasos para la subida a Git.
**Con la aplicación desarrollada de manera local.** 

1. Crear un nuevo repositorio en Git para el proyecto.
2. Dentro del fichero donde se encuentra el código de la aplicación abrir una terminal.
3. En la terminal ejecutar el comando "git init" para establecer que es un proyecto de Git.
4. Luego, "git add -A" para agregar a la cola del commit los archivos.
5. Por último, ejecutar los pasos recomendados por git para hacer push de un repositorio local (push an existing repository from the command line):
- git remote add origin https://github.com/LeoPlazaIstea/IngDeSoft.git
- git branch -M main
- git push -u origin main

## 🐋Pasos para el despliegue en Docker:

1. Descargar la imagen de Nginx (docker-hub)
- Desde la web de docker o desktop en el tab docker hub con el botón pull
- Desde terminal: docker pull nginx
2. Generar el archivo default.conf
3. Desde una terminal posicionarse en la carpeta donde está el proyecto y el archivo default.conf
4. Levantar el contenedor Nginx con el comando  
&nbsp;docker run --name ing-soft-istea \`.  
-v \${PWD}:/usr/share/nginx/html \`.  
-v \${PWD}\default.conf:/etc/nginx/conf.d/default.conf \`.  
-p 8082:80 \`. 
-d nginx  
