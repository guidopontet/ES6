let texto = "Hola"

console.log( texto.repeat(5) )

const ESPACIOS = 12

let nombres = ["Fernando","Guido","Juan"]
let telefonos = ["99887744", "6546873", "31547657"]

for (const i in nombres) {
    let dif = ESPACIOS - nombres[i].length
    
    console.log( nombres[i] + " ".repeat(dif)+ "| " + telefonos[i] )
}