// Los sets son una lista ordenada sin valores duplicados

let items = new Set()

// Agregamos elementos
items.add(10)
items.add(11)
items.add(7)
items.add(53)
items.add(19)
items.add(19)
items.add(19)
items.add('19')
items.add('19')
// Si intentamos meter un valor existente, no da error. Solo lo ignora

// Podemos crear un Set a partir de un arreglo
let items2 = new Set([1,2,3,4,5,6,7,7,7,7,7,7,7,7,7])

console.log( items );
console.log( items2 );

// Busquedas en set es mucho mas eficiente que recorrer todo un arreglo para buscar un elemento
console.log( items2.has(2) );

