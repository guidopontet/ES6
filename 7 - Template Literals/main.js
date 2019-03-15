let nombre = "Maria"
let apellido = "Perez"

/* ----- ----- ES5 ----- ----- */
let nombreCompleto = nombre + " " + apellido

console.log("nombreCompleto: "+nombreCompleto);

/* ----- ----- ES6 Usando Template Literals ----- ----- */
let nombreCompleto2 = `El nombre completo es ${nombre} ${apellido}`

console.log("nombreCompleto2: "+nombreCompleto2);

let nombreCompleto3 = `El nombre completo con funcion es ${function (){return 'Guido Pontet'}()}`
console.log( nombreCompleto3 )


/* ----- ----- Se permiten multilinea! ----- ----- */
let multilinea = "<div> \n <h1>Titulo</h1> \n <p>Hola Mundo</p> \n </div>"
console.log( multilinea )

let multilinea2 = 
`<div>
    <h1>Titulo</h1>
    <p>Hola Mundo</p>
</div>`
console.log( multilinea2 )