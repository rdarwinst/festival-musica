# Rock & EDM Festival
Este es un sitio web de práctica realizado en un curso de desarrollo web. En este sitio web se pretende practicar desarrollos mediante SCSS compilado a CSS con Gulp.

En este proyecto se usan tecnologías como: 
* Gulp
    * gulp-plumber, gulp-sass, gulp-postcss.
 * Node JS para la instalacion de las dependencias de desarrollo, como sass y gulp, postcss, autoprefixer, cssnano.
 * SCSS
 * JavaScript
 * NormalizeCSS

Para iniciar la instalación del proyecto se debe ejecutar el comando: 
```bash
npm i
```

Una vez instaladas las dependencias de desarrollo del proyecto puede ejecutar las tareas de compilacion de CSS y JS, Minificación de imagenes y creacion de formatos para la web de 2 formas: 
1. Ejecutando cada tarea definida en el gulpfile.js por separado.
2. O Puede ejecutar la tarea denominada como dev.

Un ejemplo de ejecucion de una tarea por separado:
```bash
npx gulp convertirWebp
npx gulp js
npx gulp css
```
O si desea ejecutar todas las tareas definidas e el gulpfile puede hacerlo con el siguiente comando:
```bash
npx gulp dev
```
Tambien puede ejecutar las tareas desde el package.json en la terminal del sistema con el comando npm. Ej:
```bash
npm run dev
npm run js
```

Tenga en cuenta que la funcion _dev_ puede ejecutar varias tareas al tiempo dado que está usando gulp-parallel, pero puede modificarla a ejecutar todas las tareas una tras otra usado gulp-series. esto lo podria hacer modificando las importaciones de gulp:
```javascript
const { src, dest, watch, parallel } = require('gulp'); // Quitar parallel 
const { src, dest, watch, series } = require('gulp'); // Reemplazar por series

// Finalmente debe modificar la funcion dev exportada por: 

exports.dev = series(imagenes, convertirAvif, convertirWebp, javascript, dev);

```

[Puedes seguirme en GitHub como: _rdarwinst_](https://github.com/rdarwinst)
[Puedes seguirme en Facebook como: _rdarwinst_](https://facebook.com/rdarwinst)
[Puedes seguirme en Instagram como: _rdarwinst_](https://instagram.com/rdarwinst)