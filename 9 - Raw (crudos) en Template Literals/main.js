// PARA PODER MOSTRAR EN CRUDO UN STRING, SIN REALIZAR NINGUN ESCAPE DE NINGUN CARACTER
var mensaje = `Hola \n Mundo \\`

// Es como un TAG predefinido para los Template Literals
var mensaje2 = String.raw`Hola \n Mundo \\`

console.log( mensaje )
console.log( mensaje2 )