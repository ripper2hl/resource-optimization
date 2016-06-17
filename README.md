# resource-optimization [![devDependency Status](https://david-dm.org/ripper2hl/resource-optimization/dev-status.svg)](https://david-dm.org/ripper2hl/resource-optimization#info=devDependencies)

Proyecto utilitario para optimizar recursos web(css,javascript e imagenes)
mediante gulp.js, sin tener que agregar gulp a la estructura de su proyecto.

# ¿Por qué?

Muchas veces nos encontramos en proyectos ajenos a las nuevas tendencias de workflow automatizado por gulp o grunt pero requerimos optimizar los recursos de nuestro proyecto sin tener que modificar su estructura actual ya que es casi imposible adaptarlos, es un trabajo manual y rudimentario pero ocurre.

# Requerimientos

* [Node.js /IO.js](http://www.ingenieroperales.com/2015/05/23/instalar-io-js-en-gnu/)
* [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

# Instalación

* En la carpeta del proyecto resourceOptimization instalar las dependencias de node.js/io.js

  `npm i`

# Uso


* Optimización de css

 Agregue todos sus archivos css, en una carpeta
 llamada css(en la raiz de resourceOptimization)

 ejecute la tarea de gulp css

 `gulp css`



* Optimización de javascript

  Agregue todos sus archivos javascript, en una carpeta
  llamada js(en la raiz de resourceOptimization)

  ejecute la tarea de gulp js

  `gulp js`



* Optimización de imagenes

   Agregue todos sus archivos de imagenes, en una carpeta
   llamada img(en la raiz de resourceOptimization)

   ejecute la tarea de gulp img

   `gulp img`


* Optimización en general

  Agregue todos sus archivos a las carpetas correspondientes
  (img,css,js) y después ejecute gulp en su consola,se ejecutaran todas las tareas de optimización.

  `gulp`



 # NOTA

Aunque la minificación de los recursos web mejora notablemente el consumo de ancho de banda en algunas aplicaciones también es recomendable activar gziped en nuestro servidor (https://css-tricks.com/the-difference-between-minification-and-gzipping/) .
