function saludo ( mensaje="Hola Mundo", tiempo=1000){

    // NO HACE FALTA COMPROBAR SI VIENEN PARAMETROS YA QUE ASIGNAMOS VALORES POR DEFECTO
    // Los paremetros opcionales deben ir ultimo en el orden
    
    setTimeout(function (){
        console.log( mensaje )
    }, tiempo);
}

saludo(10);