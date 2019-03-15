// function crearJugador(nickname, opciones){
function crearJugador(nickname,
    { hp, sp, clase } = { hp: 100, sp: 50, clase: "mago" }
) { /* Es mas legible la definicion de la función y asignamos parametros por defecto */
    // opciones = opciones || {}

    // let hp = opciones.hp,
    //     sp = opciones.sp,
    //     clase = opciones.clase

    console.log(nickname, hp, sp, clase)

    // Codigo para crear jugador
}

/* crearJugador("Guido", {
    hp: 100,
    sp: 50,
    clase: "Mago"
}) */

crearJugador("Guido")