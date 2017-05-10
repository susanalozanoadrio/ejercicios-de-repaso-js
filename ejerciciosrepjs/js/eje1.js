/*Ejercicio 1
Creamos una función que tomará como parámetros un número y un array de números.
 La función va a devolver el número de veces que está repetido ese número en el array.
  Por ejemplo, si le pasamos un 1 y [1,3,4,2,1,3,4,5],  la función devolverá un 2,
  porque el número 1 aparace dos veces en el array.}*/


var total = 0;
var numero = 8;
var arrayDeNumeros = [8, 3, 5, 4, 8, 6, 3, 4, 8, 4]

function cuentaNumeros(numero, arrayDeNumeros) {
  for (i = 0; i < arrayDeNumeros.length; i++) {
    if (arrayDeNumeros[i] === numero) {
      total = total + 1;
    }
  }
  console.log(total);
}
cuentaNumeros(numero, arrayDeNumeros)
