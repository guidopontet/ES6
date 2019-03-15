let persona = {
    saludar(){
        return "Hola"
    }
}

let amigo = {
    saludar2(){
        /* ----- ----- ES5 ----- ----- */
        // return Object.getPrototypeOf(this).saludar()+" , saludos!!"

        /* ----- ----- ES6 ----- ----- */
        // Se incluye el objeto super, para hacer referencia al prototipo padre, del cual hereda propiedades
         return this.saludar()+" , saludos!!!"
    }
}

console.log( amigo )
// console.log( amigo.saludar())

// Heredamos las propiedades de persona, en amigo
Object.setPrototypeOf(amigo, persona)
console.log( amigo )
console.log( amigo.saludar2())