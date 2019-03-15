// Son un nuevo tipo de dato
// Se utilizar para poner nombres a propiedades y asegurarnos que no van a colisionar
// con otros nombres de otros elementos de otras librerias o el mismo codigo

// Se pueden inicializar con un alias o identificacion
let primerNombre = Symbol('primer nombre'); /* Los simbolos no tienen constructor (new) porque son datos primitivos */
let segundoNombre = Symbol();
let persona = {
    [segundoNombre]: "Leandro"
}

persona[primerNombre] = 'Guido'

//  La sintaxis de un simbolo es la de una propiedad computada
console.log(persona[primerNombre])
console.log(persona[segundoNombre])
console.log(primerNombre)

/* ----- -----  ----- ----- */

let simbolo1 = Symbol('simbolo')
let simbolo2 = Symbol('simbolo')

// Todo da false, ya que los simbolos son DIFERENTES siempre, es su caracteristica principal
console.log(simbolo1 == simbolo2)
console.log(simbolo1 === simbolo2)
console.log(Object.is(simbolo1, simbolo2))

console.log( "Tipo: "+ typeof simbolo1 );

// Los simbolos no pueden convetirse a string como cualquier otra propiedad
// console.log( "Mi simbolo es "+simbolo1 );

let arreglo = [1,2,3,4,5]
console.log( 1 in arreglo );