let id = Symbol("id")

let persona = {
    [id]: "123",
    ["codigo"]: "IUY543",
    nombre: "Guido",
    apellido: "Pontet",
    edad: 29
}

// De esta manera se ven todas las propiedades pero no lo simbolos
for (const key in persona) {
    console.log( persona[key])
}

console.log( Object.keys(persona) );

// Para ver los simbolos en ES6 se hace asi
let simbolos = Object.getOwnPropertySymbols(persona)
console.log( simbolos );