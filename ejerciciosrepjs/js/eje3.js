/*Ejercicio 3
Vamos a crear una función que toma un parámetro que es un array de números.
La función va a devolver un array que contiene sólo los números pares del
array original.*/

var numbers = [5,4,6,8,1,4,6,7];
var pair = [];
function findPair(numbers){
  for(i = 0; i < numbers.length; i++){
    var isPair = (numbers[i] % 2 === 0);
    if(isPair){
      pair[pair.length] = numbers[i];
      console.log(pair);
    }
  }
}
findPair(numbers);
