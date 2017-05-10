/*Vamos a crear una función JavaScript que toma un parámetro que es una cadena (texto).
 Si la cadena es de longitud impar, devuelve el caracter central. Si la longitud de
 la cadena es par, devuelve "Sólo funciono con cadenas de longitud impar".*/

var cadena = "naranja";
var cadena1 = "pera";

function caracterCentral(cadena) {
  if (cadena.length % 2 === 0) {
    return "Sólo funciono con cadenas de longitud impar";
  } else {
    return (cadena[(cadena.length - 1) / 2]);
  }
}
caracterCentral(cadena);
caracterCentral(cadena1);
console.log(caracterCentral(cadena));
console.log(caracterCentral(cadena1));
