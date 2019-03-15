// ES6 crea un pool de todos los simbolos utilizados, para poder utilizarlos en cualquier parte del codigo
// Para verificar que no existe, o si existe, usarlo; Se utilizar el for
let userID = Symbol.for("userID")
let objeto = {}

objeto[userID] = "12345"

console.log( objeto[userID] );
console.log( userID );

let userID2 = Symbol.for("userID");

console.log( userID == userID2 );
console.log( userID === userID2 );
console.log( Object.is(userID, userID2) );

/* ----- -----  ----- ----- */

let id = Symbol.for("id unico")
// Para recuperar los datos
console.log( Symbol.keyFor(id) );