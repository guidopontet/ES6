// El operador spread obtiene individualmente los elementos de un arreglo
// Se suele utilizar en conjunción con las funciones que tienen un parametro REST

var numeros = [1,2,3,4,5,6,7]
console.log( ...numeros )

let max = Math.max(...numeros)

console.log( max )

// Se puede utilizzar para obtener los elementos por ejemplo en definiciones
let partes=["Brazos","Piernas"]
let cuerpo=["Ojos","Cabeza", ...partes, "Cejas"]
console.log( cuerpo )