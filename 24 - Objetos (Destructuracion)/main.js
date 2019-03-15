let ajustes = {
    nombre : "Guido Pontet",
    email : "guidopontet@gmail.com",
    facebook : "guidopontet",
    premium : true,
    otroNodo:{
        subNodo:{
            cursor:{
                linea:11,
                columna:12
            }
        }
    }
}

/* ----- ----- ES5 ----- ----- */
// let nombre = ajustes.nombre,
//     email = ajustes.email,
//     facebook = ajustes.facebook,
//     premium = ajustes.premium

// console.log( nombre, email, facebook, premium )

/* ----- ----- ES6 ----- ----- */ /* Mas simple */
let { nombre, email, facebook, premium:dePago, noExiste="No existe" } = ajustes

console.log( nombre, email, facebook, dePago, noExiste )

// Para acceder a un subnodo
let { otroNodo:{subNodo:{cursor}} } = ajustes
console.log( cursor )