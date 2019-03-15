// El nuevo cilo forOf es especializado para las colecciones (Arreglos, Sets, Maps)

let numeros = [100, 20, 30, 50, 200]

// Para poder obtener cada elemento tenemos muchas posibilidades
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
}

console.log("/* ----- -----  ----- ----- */");

for (let i in numeros) {
    console.log(numeros[i])
}

console.log("/* ----- -----  ----- ----- */");

// Ahora existe el for of que no crea innecesariamente variables i en un ciclo
for (value of numeros) {
    console.log(value);
}

/* ----- -----  ----- ----- */