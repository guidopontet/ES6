var funciones = []

// Da siempre 10 por el contexto global de la variable i
// for( var i=0; i<10; i++){
//     funciones.push(function(){ console.log( i )})
// }

// funciones.forEach(function(fn) {
//     fn()
// });

/* ----- ----- EN EL ES5 HAY QUE HACER ESTO (muy enredado para solucionarlo) ----- ----- */
// Da siempre 10 por el contexto global de la variable i
// for( var i=0; i<10; i++){
//     funciones.push(
//         (function(valor){
//             return function(){console.log( valor )}
//         })(i)
//     )
// }

// funciones.forEach(function(fn) {
//     fn()
// });

/* ----- ----- EN EL ES6 SE SOLUCIONA SIMPLEMENTE CON LET ----- ----- */
for( let i=0; i<10; i++){
    funciones.push(function(){ console.log( i )})
}

funciones.forEach(function(fn) {
    fn()
});
