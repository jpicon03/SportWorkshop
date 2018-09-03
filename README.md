# SportWorkshop
Taller Semana 5 - Gerencia de Proyectos de Software

## Implementación FrontEnd - AngularJS

- Crear Proyecto Front y componentes - Angular JS

https://angular.io/guide/quickstart

- Crear módulo routers (Módulo normal Angular con modificaciones)

(Antes crear directorio)
https://angular.io/tutorial/toh-pt5

- Comandos útiles angular:

https://www.npmjs.com/package/@angular/cli

- Agregar esta dependencia a package.json

"rxjs-compat": "^6.2.2",

- Versión de angular -> 'ng -v' o package.json

- Error Observable Angular v.6

https://stackoverflow.com/questions/49840152/i-get-an-error-when-learning-angular-has-no-exported-member-observable

- Agregando bootstrap

Instalar: npm i bootstrap --save

Agregar a angular.json -> "node_modules/bootstrap/dist/css/bootstrap.min.css",

Quedaría algo como:

"styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ],

- Los componentes deben ir igual importados en app.module.ts

- Manejo de errores mirar por consola del navegador posibles excepciones.

- Agregar al controlador llamado a servicios.

## Implementación BackEnd - NodeJS

- Usar comando para la base del back -> npm init

- Modificar package.json ---> Agregar comando "start"

"scripts": {
    "start": "nodemon app.js"
  },

- Instalar nodemon (permite al dev reiniciar la app cuando se hace un cambio)

npm install -g nodemon --save

- Instalando paquetes adicionales
	* npm install --save express
	* npm install --save body-parser
	* npm install --save cors

- Tener en cuenta .gitignore

- Crear archivo app.js que es la base del back

- Creación directorio "assets" que contiene los JSON. - Crear JSONs

- Crear carpeta "app" -> que contiene "controllers" y "services"

- Instalar paquetes necesarios -> npm install

- Iniciar proyecto Back -->. npm start