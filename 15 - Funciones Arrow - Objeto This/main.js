
/* ----- ----- ES5 ----- ----- */
var manejador = {
    id: "123",
    init: function(){
        var self=this
        document.addEventListener('click',function(event){
            console.log( this )
            self.clickEnPagina(event.type)
        })
    },
    clickEnPagina: function(type){
        console.log( `Manejando ${type} para el id ${this.id}` )
    }
}

// manejador.init();

/* ----- ----- ES6 ----- ----- */
var manejador2 = {
    id: "123",
    init: function(){
        console.log( this )
        // LAS FUNCIONES ARROW NO ALTERAN AL OBJETO THIS
        document.addEventListener('click',(event)=>this.clickEnPagina(event.type))
    },
    clickEnPagina: function(type){
        console.log( `Manejando ${type} para el id ${this.id}` )
    }
}

manejador2.init();