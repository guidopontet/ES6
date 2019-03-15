/* ----- ----- ES5 ----- ----- */
function crearPersona(nombre,apellido,edad){
    return {
        nombre: nombre,
        apellido: apellido,
        edad: edad
    }
}

console.log( crearPersona("Guido", "Pontet", 28) )

/* ----- ----- ES6 ----- ----- */ 
// Simplificacion para la creación de un objeto
function crearPersona2(nombre,apellido,edad){
    return {
        nombre,
        apellido,
        edad
    }
}

console.log( crearPersona2("Guido", "Pontet", 28) )

