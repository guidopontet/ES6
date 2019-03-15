// Se transfiere propiedades y metodos a los hijos

class Rectangulo{
    constructor(alto,largo){
        this.alto=alto
        this.largo=largo
    }

    getArea(){
        return this.alto*this.largo
    }
}

let rectangulo = new Rectangulo(3,2)

console.log( rectangulo.getArea() )

// El cuadrado tiene las mismas propiedades y metodos
class Cuadrado extends Rectangulo{
    constructor(alto){
        super(alto,alto)
    }

    /* ----- ----- SOBREESCRIBIR METODOS DEL PADRE ----- ----- */
    getArea(){
        return "Cuadrado:"+ (this.alto*this.alto)
    }
}

let cuadrado = new Cuadrado(6)
console.log( cuadrado.getArea() )


