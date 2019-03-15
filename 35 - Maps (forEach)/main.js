let mapa = new Map([["nombre", "Guido"], ["edad", 31]])

mapa.forEach(function (value, key, mapaOriginal){
    console.log(`Llave: ${key}, Valor: ${value}` );
})

