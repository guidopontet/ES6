let items = new Set([1,3,2,5,4])

console.log( items.size );

items.delete(3)

console.log( items.size );
console.log( items );

// Para eliminar todos los elementos
items.clear()

console.log(items.size);
console.log(items); 