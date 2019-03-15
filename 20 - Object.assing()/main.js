// ASIGNAR TODAS LAS PROPIEDADES DE UN OBJETO A OTRO

/* ----- ----- ES5 ----- ----- */
function mezclar(objReceptor, objDonador) {
    Object.keys(objDonador).forEach(function (key) {
        // Cuando la propiedad es una variable, se usa sintaxis de corchete
        objReceptor[key] = objDonador[key]
    })

    return objReceptor
}

let persona = {
    nombre: "Guido",
    apellido: "Pontet",
    edad: 28,
}
let nuevaPersona = {}

// De esta manera hay problemas para asignar funciones, ya que en vez de asignar la funcion al nuevo objeto,
// asigna el resultado de la funcion
// console.log("ES5: ", mezclar(nuevaPersona, persona))

/* ----- ----- ES6 ----- ----- */
console.log("ES6: ", Object.assign(nuevaPersona, persona))
