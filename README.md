# resourceOptimization

Proyecto utilitario para optimizar recursos web(css,javascript e imagenes)
mediante gulp.js, sin tener que agregar gulp a la estructura de su proyecto.

# ¿Por qué?

Muchas veces nos encontramos en proyectos ajenos a las nuevas tendencias de workflow automatizado por gulp o grunt pero requerimos optimizar los recursos de nuestro proyecto sin tener que modificar su estructura actual ya que es casi imposible adaptarlos, es un trabajo manual y rudimentario pero ocurre en la industria.

# Requerimientos

* Node.js /IO.js
* Gulp

# Instalación

* En la carpeta del proyecto resourceOptimization instalar las dependencias de node.js/io.js

  `npm i`

# Uso

* Optimizacion de css

 Agregue todos sus archivos css, en una carpeta
 llamada css(esto en la raiz de resourceOptimization)

 ejecute la tarea de gulp compress-css

 `gulp compress-css`


 * Optimizacion de javascript

  Agregue todos sus archivos javascript, en una carpeta
  llamada js(esto en la raiz de resourceOptimization)

  ejecute la tarea de gulp compress-js

  `gulp compress-js`


  * Optimizacion de imagenes

   Agregue todos sus archivos de imagenes, en una carpeta
   llamada img(esto en la raiz de resourceOptimization)

   ejecute la tarea de gulp compress-img

   `gulp compress-img`
