// n argumentos se podría aceptar en ES5 con el objeto 'arguments' del prototipo de cualquier funcion
// Pero si la función es extensa, es poco legible si no se documenta bien, por ello el ES6 lo resuelve
// con el parámetro REST

// Solo puede existir un solo parametro rest
// El paremetro rest siempre tiene que ser el ultimo parametro

function agregarAlumno(arr_alumnos=[], ...alumnos){
    console.log( arguments )

    for(let i = 0; i<alumnos.length; i++){
        arr_alumnos.push(alumnos[i])
    }

    return arr_alumnos
}
let viejosAlumnos=["Guido","Fernando"]
console.log( viejosAlumnos )
let nuevosAlumnos=agregarAlumno( viejosAlumnos,"Juan","Felicio","Pedro")
console.log( nuevosAlumnos )