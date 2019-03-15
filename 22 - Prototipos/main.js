let gato = {
    sonido(){
        console.log( "Miau!" )
    },
    chillido(){
        console.log( "MIAU!!!!" )
    }
}

let perro = {
    sonido(){
        console.log( "Guau!" )
    }
}

let angora = Object.create(gato);
// Verificamos si el prototipo es el mismo
console.log( Object.getPrototypeOf(angora) === gato )

angora.sonido()
angora.chillido()

// Si queremos alterar el prototipo, ES6 agrega esto
Object.setPrototypeOf( angora, perro)
angora.sonido() /* Aparece guau porque cambió el prototipo, ahora es un perro */
