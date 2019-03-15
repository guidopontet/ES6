let frutas = ["banana", "pera", "uva"]

// En este caso es por orden secuencial
let [fruta1, fruta2] = frutas
console.log(fruta1, fruta2)

// Si queremos solamente el 3ro
let [, , fruta3] = frutas
console.log(fruta3)

// Para arreglos anidados
let colores = ["blanco", ["rojo", "azul"], "naranja"]
let [color1, [color2, color3], color4] = colores

console.log(color1, color2, color3, color4)

// Con el operador SPREAD
let colores2 = ["blanco", "rojo", "azul", "naranja"]
let [colorPrincipal, ...demasColores] = colores2
console.log("Principal: ", colorPrincipal, "Demas: ", demasColores)