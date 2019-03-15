/* ----- ----- ES6 ----- ----- */
class Persona{

    // El constructor realiza todas las inicializaciones
    constructor(nombre){
        this.nombre=nombre
    }

    decirNombre(){
        console.log( this.nombre );
    }
}

let guido = new Persona("Guido")

guido.decirNombre();

console.log( guido instanceof Persona );
console.log( guido instanceof Object );

