let id = Symbol.for('id')
let numero = 10
let texto = '10'
let bool = true
let NotANumber = NaN

// Javascript es flexible en cuanto a los casteos
console.log( numero + Number(texto) );
console.log( bool + bool );
console.log( numero + NotANumber );

// Los simbolos no son tan flexibles
// console.log( texto + id );
// console.log( "Mi simbolo es: "+id );

// Si queremos mostrar el simbolo lo tenemos que hacer de la siguiente manera
console.log( "Mi simbolo es: ", id );
// Si lo queremos a string
console.log( "Mi simbolo es: ", String(id) );
