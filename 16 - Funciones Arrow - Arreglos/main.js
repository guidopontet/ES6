/* ----- ----- ES5 ----- ----- */
var arreglo = [5,10,11,2,1,9,20,4]
var ordenado = arreglo.sort(function(a,b){
    return a>b
})

console.log( "ES5: ", ordenado )

/* ----- ----- ES6 ----- ----- */
let arreglo2 = [5,10,11,2,1,9,20,4]
let ordenado2 = arreglo2.sort((a,b)=>a>b)

console.log( "ES6: ", ordenado2 )

var funcion1 = function(){
    console.log( this )
}

var funcion2 = ()=>{console.log( this )}

console.log( funcion1 )
console.log( funcion2 )