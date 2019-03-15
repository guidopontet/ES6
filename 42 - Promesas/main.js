// JAVASCRIPT SIEMPRE HA SIDO SINCRONO, TODO VA EN SECUENCIA
function tareaAsincrona(){
    setTimeout(function(){
        console.log( "Proceso asincrono terminado" )
    },1300)
}

// Esta funcion la coloca en el pool de procedimientos de javascript y sigue la ejecucion
tareaAsincrona()

console.log( "Codigo secuencial" )



/* ----- ----- PROMESAS ----- ----- */
// Necesitamos ejecutar codigo solamente si el otro se ejecuta correctamente
function tareaAsincrona(){
    // Resolve funcion se ejecuta si todo va bien, recject si algo falla
    let promesa = new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log( "Proceso asincrono terminado" )
            resolve()
        },1300)
    })

    return promesa
}

// Esta funcion la coloca en el pool de procedimientos de javascript y sigue la ejecucion
tareaAsincrona()
    // Codigo que se ejecuta al terminar
    .then(function(){
        console.log( "Success!!" )
    },function(){
        console.err( "Error!!" )
    })

console.log( "Codigo secuencial" )