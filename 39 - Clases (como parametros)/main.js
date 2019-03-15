/* ----- ----- PASANDO LA DEFINICION DE UNA CLASE COMO PARAMETRO ----- ----- */
function creadorClases(definicionClase){
    return new definicionClase()
}

let objeto = creadorClases(class{
    constructor(){
        this.nombre=undefined
        this.edad=29
    }

    saludar(){
        console.log( "Hola!!" );
    }
})

objeto.saludar();

/* ----- ----- PASANDO UNA INSTANCIA DE CLASE COMO PARAMETRO ----- ----- */
class Cuadrado{
    constructor(lado){
        this.lado=lado
    }

    getArea(){
        return this.lado*this.lado
    }
}

function imprimirCuadrado(cuadrado){

    // Comprobamos que el parametro sea del tipo cuadrado
    if(!(cuadrado instanceof Cuadrado)){
        console.error("El parametro enviado no es un Cuadrado")
        return
    }

    console.log( cuadrado.getArea() );
}

// let mesa = new Cuadrado(10);
let mesa = "123"

imprimirCuadrado(mesa)
