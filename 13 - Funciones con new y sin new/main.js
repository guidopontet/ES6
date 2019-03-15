function Persona(nombre) {

    if (this instanceof Persona) {
        // La condicion tendría que ser typeof new.target!=='undefined' para verificar que se haya creado con la palabra reservada new
        this.nombre = nombre
    } else {
        throw Error("Esta función debe de ser utilizada con el new")
    }
}

// En este caso se crea una instancia del objeto Persona y se retorna
var persona = new Persona("Guido")

// En este caso simplemente se ejecuta la funcion, y como no retorna nada, se retorna 'undefined'
// var noEsPersona = Persona("Guido")

// console.log( persona )
// console.log( noEsPersona )

// Sin embargo, podemos engañar a javascript de la siguiente manera
var noEsPersona = Persona.call(persona, "Guido")

// Por lo tanto, para verificar que realmente se creo la instancia de Persona con el new
// Tenemos que verificar la propiedad new.target