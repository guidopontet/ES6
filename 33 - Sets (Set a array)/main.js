let numeros = [1,2,3,4,5,6,7]

let setNumeros = new Set(numeros)

console.log( setNumeros );

// Utilizamos el operador spread para recuperar el arreglo
let arrayNumeros = [...setNumeros]

console.log( arrayNumeros );

console.log( /* ----- -----  ----- ----- */ );

let arrayRepetidos=[1,1,2,2,3,3,6,6,3,3,2,2,4,4]
console.log( arrayRepetidos );

// Function para eliminar duplicados
function eliminaDuplicados(items){
    let set= new Set(items)
    return [...set]
}

console.log( eliminaDuplicados(arrayRepetidos) );