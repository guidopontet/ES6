// Metodo computado
let nombreMetodo = "gritarNombre"

class Persona {
    constructor(nombre) {
        this.nombre = nombre
    }

    static decirNombre() {
        console.log(this.nombre)
    }

    // Un metodo estático se puede ejecutar sin instanciar una clase
    static crear(nombre){
        return new Persona(nombre)
    }

    // Metodo computado , su nombre puede definirse a través de una variable
    [nombreMetodo](){
        console.log( this.nombre.toUpperCase() )
    }

}

let yo = Persona.crear("guido")
console.log( yo )

yo.gritarNombre()

