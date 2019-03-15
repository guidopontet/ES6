/* ----- ----- ES5 ----- ----- */
var persona = {
    nombre: "Guido",
    getNombre: function(){
        console.log( this.nombre )
    }
}

persona.getNombre()

/* ----- ----- ES6 ----- ----- */
var persona2 = {
    nombre: "Guido",
    getNombre(){ /* Simplemente se puede definir */
        console.log( this.nombre )
    }
}

persona2.getNombre()