var saludo = "Hola Mundo!"

/* ----- ----- ES5 ----- ----- */
console.log( saludo.substr(0,1) === 'H' )

/* ----- ----- ES6 ----- ----- */
console.log( saludo.startsWith("H") )
console.log( saludo.endsWith("o!") )
console.log( saludo.includes("Muns") )

console.log( saludo.includes("Mun",5) )
