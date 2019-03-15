/* ----- ----- CLASES EN ES5 ----- ----- */
function Persona (nombre){
    this.nombre = nombre

    this.gritarNombre = function(){
        console.log( this.nombre.toUpperCase() );
    }
}

Persona.prototype.decirNombre = function (){
    console.log( this.nombre );
}

// En ES5 se tiene que llamar con NEW para que cree un nuevo objeto de tipo Persona en memoria
let guido = new Persona ("Guido")
guido.decirNombre()
guido.gritarNombre()

console.log( guido instanceof Persona );
console.log( guido instanceof Object );

// Es muy complejo, herencia, new, etc. codigo enredado
