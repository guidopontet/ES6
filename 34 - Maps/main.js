// Los mapas es un nuevo tipo de coleccion de datos 
// Tienen una llave y un valor

let mapa = new Map()

// Agregar datos
mapa.set("nombre", "Guido")
mapa.set("edad", 28)

console.log( mapa );

// Obtener datos
console.log( mapa.get("nombre") );
console.log( mapa.get("edad") );

// Verificar existencia
console.log(mapa.has("nombre"));
console.log(mapa.has("edad"));

// Eliminar una entrada
mapa.delete("nombre")
console.log( mapa );

console.log( "/* ----- -----  ----- ----- */" );

// Inicializar un mapa (Arreglo de arreglos)
let mapa2 = new Map ( [["nombre","Guido"],["edad",31]] )
console.log( mapa2 );
console.log( mapa2 );