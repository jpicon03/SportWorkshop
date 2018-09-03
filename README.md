# SportWorkshop
Taller Semana 5 - Gerencia de Proyectos de Software

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
