let main = document.getElementsByTagName('main')[0]
let tablero = document.getElementById('tablero')

let tamañoFilas = 10
let tamañoColumna = 10

let posicionObjetivo, posicionJugado1, posicionJugado2
let jugador1, jugador2, objetivo
let posJugado1, posJugado2, posObjetivo
let contadorJugador1, contadorJugador2

let contadorJ1 = 0
let contadorJ2 = 0

//let tiempo = 15
//let segundos = document.getElementById('segundos')

tablero.classList.add('container')

tablero.addEventListener('load', pintarTablero())

/*
La funcion pintarTablero como su nombre nos indica genera un tablero 10x10 con 3 fichas totalmente
de forma aleatoria. a las casillas le vamos a propocionar una clase y las tres fichas le vamos a proporcionar 
nombre que las diferencia del resto
*/
function pintarTablero(){

    /*Posicion objetivo es la ficha a la que tenemos que llevas
    y posicionJugador1 y posicionJugador2 son los dos jugadores que juegan*/
    posicionObjetivo = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]
    posicionJugado1 = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]
    posicionJugado2 = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]

    for (let i = 0; i < tamañoFilas; i++){
        for (let j = 0; j < tamañoColumna; j++){

            div = document.createElement('div')
            div.classList.add('card')

            //Le damos un identificador
            div.classList.add(i+ 'f');
            div.classList.add(j+'c');

            if(i == posicionObjetivo[0] && j == posicionObjetivo[1]){
                div.classList.add('objetivo')
            }
            if(i == posicionJugado1[0] && j == posicionJugado1[1]){
                div.classList.add('posicionJugado1')
            }
            if(i == posicionJugado2[0] && j == posicionJugado2[1]){
                div.classList.add('posicionJugado2')
            }
            tablero.appendChild(div)
        }
    }
}


//Agregamos el evento con el que vamos a poder mover las fichas
document.addEventListener('keydown', mover)

/*
En la funcion mover, lo que hacemos es obtener el nombre que le proporcionamos anteriormente a las 
fichas que vamos a mover. Utilizamos el parseInt en las cuales se almacenara la poscion que se encuentran
dichas fichas.
*/
function mover(event){

    //obtenemos la posicion de ambos jugadores
    jugador1  = document.getElementsByClassName('posicionJugado1')[0]
    jugador2  = document.getElementsByClassName('posicionJugado2')[0]

    posJugado1 = [parseInt(jugador1.classList[1]), parseInt(jugador1.classList[2])]
    posJugado2 = [parseInt(jugador2.classList[1]), parseInt(jugador2.classList[2])]

    switch(event['key']){
        //movimientos jugador1
        case 'ArrowUp':
            /*
            console.log('has pulsado la tecla hacia arriba')
            alert('arriba')
            */

            /*
            Verifica si la posicion se encuentra dentro de cuadrado, de ser así analizará si el jugador 2 se 
            encuentra en la posicion a la que nos queremos mover la ficha del jugador 1
            */
            if ((posJugado1[0] - 1) != -1){
                if(!(posJugado1[0] - 1 == posJugado2[0] && posJugado1[1] == posJugado2[1])){
                    let posicionNuevaArriba1 = document.getElementsByClassName((posJugado1[0] - 1) + 'f')[posJugado1[1]]
                    jugador1.classList.remove('posicionJugado1')
                    posicionNuevaArriba1.classList.add('posicionJugado1')
                }
            }

            break
        case 'ArrowDown':
            /*
            console.log('has pulsado la tecla hacia abajo')
            alert('abajo')
            */

            /*
            Verificamos si se encuentra el la fila inferios del tablero, en el caso de la ficha se pueda mover 
            se analizara si la ficha del jugador 2 se encuentra a la posicion en la que el jugador 1 quiere avanzar
            */
            if ((posJugado1[0] + 1) != 10){
                if(!(posJugado1[0] + 1 == posJugado2[0] && posJugado1[1] == posJugado2[1])){
                    let posicionNuevaAbajo1 = document.getElementsByClassName((posJugado1[0] + 1) + 'f')[posJugado1[1]]
                    jugador1.classList.remove('posicionJugado1')
                    posicionNuevaAbajo1.classList.add('posicionJugado1')
                }
            }
            break
        case 'ArrowLeft':
            /*
            console.log('has pulsado la tecla hacia izquierda')
            alert('izquierda')
            */

            /*Lo mismo que el caso de arriba solo que para la izquierda*/
            if ((posJugado1[1] - 1) != -1){
                if(!(posJugado1[0] == posJugado2[0] && posJugado1[1] - 1 == posJugado2[1])){
                    let posicionNuevaDerecha1 = document.getElementsByClassName((posJugado1[1] - 1) + 'c')[posJugado1[0]]
                    jugador1.classList.remove('posicionJugado1')
                    posicionNuevaDerecha1.classList.add('posicionJugado1')
                }
            }
            break
        case 'ArrowRight':
            /*
            console.log('has pulsado la tecla hacia derecha')
            alert('derecha')
            */

            /*Lo mismo que el caso de abajo solo que para la derecha*/
            if ((posJugado1[1] + 1) != 10){
                if(!(posJugado1[0] == posJugado2[0] && posJugado1[1] + 1 == posJugado2[1])){
                    let posicionNuevaIzquierda1 = document.getElementsByClassName((posJugado1[1] + 1) + 'c')[posJugado1[0]]
                    jugador1.classList.remove('posicionJugado1')
                    posicionNuevaIzquierda1.classList.add('posicionJugado1')
                }
            }
            break
        //añadimos ahora al jugador 2
        //Ponemos tanto la mayuscula como la miniscula por si el jugador2 decidirera jugar de alguna de esas formas
        case 'w':
        case 'W':
            /*
            console.log('has pulsado la tecla hacia arriba')
            alert('arriba')
            */

            if ((posJugado2[0] - 1) != -1){
                if(!(posJugado1[0] == posJugado2[0] - 1 && posJugado1[1] == posJugado2[1])){
                    let posicionNuevaArriba2 = document.getElementsByClassName((posJugado2[0] - 1) + 'f')[posJugado2[1]]
                    jugador2.classList.remove('posicionJugado2')
                    posicionNuevaArriba2.classList.add('posicionJugado2')
                }
            }

            break
        case 's':
        case 'S':
            /*
            console.log('has pulsado la tecla hacia abajo')
            alert('abajo')
            */
            if ((posJugado2[0] + 1) != 10){
                if(!(posJugado1[0] == posJugado2[0] + 1 && posJugado1[1] == posJugado2[1])){
                    let posicionNuevaAbajo2 = document.getElementsByClassName((posJugado2[0] + 1) + 'f')[posJugado2[1]]
                    jugador2.classList.remove('posicionJugado2')
                    posicionNuevaAbajo2.classList.add('posicionJugado2')
                }
            }
            break
        case 'a':
        case 'A':
            /*
            console.log('has pulsado la tecla hacia izquierda')
            alert('izquierda')
            */
            if ((posJugado2[1] - 1) != -1){
                if(!(posJugado1[0] == posJugado2[0] && posJugado1[1] == posJugado2[1] - 1)){
                    let posicionNuevaDerecha2 = document.getElementsByClassName((posJugado2[1] - 1) + 'c')[posJugado2[0]]
                    jugador2.classList.remove('posicionJugado2')
                    posicionNuevaDerecha2.classList.add('posicionJugado2')
                }
            }
            break
        case 'd':
        case 'D':
            /*
            console.log('has pulsado la tecla hacia derecha')
            alert('derecha')
            */
            if ((posJugado2[1] + 1) != 10){
                if(!(posJugado1[0] == posJugado2[0] && posJugado1[1] == posJugado2[1] + 1)){
                    let posicionNuevaIzquierda2 = document.getElementsByClassName((posJugado2[1] + 1) + 'c')[posJugado2[0]]
                    jugador2.classList.remove('posicionJugado2')
                    posicionNuevaIzquierda2.classList.add('posicionJugado2')
                }
            }
            break
        default:
            break
    }
    //Se comprueba quien es el ganador entre el jugador 1 y jugador 2
    ganador()
}

/*
La funcion de la volverAJugar solo funcionara en el caso de que el jugador 
pulse el boton, y en esta re reinician los valores como el contador y el mensaje de ganados.
Así como, se reinicia el tablero
*/
function volverAJugar(){
    //Inicializamos los valores a 0  y pintamos de nuevo el tablero
    contadorJ1 = 0
    contadorJ2 = 0

    document.getElementById('jugador1').innerHTML = contadorJ1
    document.getElementById('jugador2').innerHTML = contadorJ2

    tablero.textContent = ""
    document.getElementById('mensaje').innerHTML = ''

    pintarTablero()
}

boton.addEventListener('click', volverAJugar)

/*
AnadirPuntuacion, lo que hace es que el contador se actualiza a medida que se compueba quien es el ganador
*/
function añadirPuntuacion(){
    contadorJugador1 = document.getElementById('jugador1')
    contadorJugador2 = document.getElementById('jugador2')

    contadorJugador1.textContent = contadorJ1
    contadorJugador2.textContent = contadorJ2
}

/*
Finalmente en la funcion ganador, tenemos que analiza la posicion asi como hicimos para las
colisiones, solo que en este caso en vez de ser entre las fichas, es con una ficha y el objetivo.
En el caso de que gane uno de los jugadores, el contador perteneciente a jugador ganador aumentará de 1
y proporcionará el mensaje de ganador. Así como, se generará un nuevo tablero en el cual los jugadores podrán
seguir jugando, hasta que decidan crear una nueva partida y empezar de 0.
*/
function ganador(){

    jugador1  = document.getElementsByClassName('posicionJugado1')[0]
    jugador2  = document.getElementsByClassName('posicionJugado2')[0]
    objetivo = document.getElementsByClassName('objetivo')[0]

    posJugado1 = [parseInt(jugador1.classList[1]), parseInt(jugador1.classList[2])]
    posJugado2 = [parseInt(jugador2.classList[1]), parseInt(jugador2.classList[2])]
    posObjetivo = [parseInt(objetivo.classList[1]), parseInt(objetivo.classList[2])]

    if (posJugado1[0] == posObjetivo[0] && posJugado1[1] == posObjetivo[1]) {
        //alert('jugador 1 has ganado')
        contadorJ1++
        document.getElementById('mensaje').classList.add('visible')
        document.getElementById('mensaje').innerHTML = 'ENHORABUENA JUGADOR YOSHI HA GANADO'
        añadirPuntuacion()
        tablero.textContent = ""
        pintarTablero()
    }else if (posJugado2[0] == posObjetivo[0] && posJugado2[1] == posObjetivo[1]) {
        //alert('jugador 2 has ganado')
        contadorJ2 ++
        document.getElementById('mensaje').classList.add('visible')
        document.getElementById('mensaje').innerHTML = 'ENHORABUENA JUGADOR BROWSER HA GANADO'
        añadirPuntuacion()
        tablero.textContent = ""
        pintarTablero()
    }
}

/*
function cuentaAtras(){
    tiempo = --tiempo <= -1 ? 15 : tiempo

    //Imprimimos el valor de los segundos que quedan
    segundos.textContent = tiempo

    //en el momento de que el tiempo llegue a 0 avisamos al jugador que le toca que ha perdido su turno
    if (tiempo == 0){
        document.getElementById('mensaje').innerHTML = 'TIEMPO FINALIZADO'
        
        volverAJugar()

    }else{
        document.getElementById('mensaje').innerHTML = ''
    }
}

let temporizador = setInterval(cuentaAtras, 1000)
*/