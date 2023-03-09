//JUEGO DE DADOS
function empezarJuego() {
    console.log('Started');
    document.getElementById('boton-comienzo').classList.add('oculto');
    document.getElementById('tarjPreguntas').classList.remove('oculto');
    document.formulario1.boton1.disabled = false;
} 

var rondas = 1; // cantidad de rondas, se inicializa contando la primera ronda
var puntosJ1 = 0; // jugador 1
var puntosJ2 = 0; // jugador2

function jugador1() { //jugador 1: dados, puntos

let dadosJ1 = new Array(); //dados del jugador 1
    dadosJ1[0] = document.getElementById('dado1');
     dadosJ1[1] = document.getElementById('dado2');
     dadosJ1[2] = document.getElementById('dado3');
     dadosJ1[3] = document.getElementById('dado4');
     dadosJ1[4] = document.getElementById('dado5');

dado1.src = 'img/dados/' + Math.floor(Math.random() * 5 + 1) + '.png'; //random entre los dados
dado2.src = 'img/dados/' + Math.floor(Math.random() * 5 + 1) + '.png';
dado3.src = 'img/dados/' + Math.floor(Math.random() * 5 + 1) + '.png';
dado4.src = 'img/dados/' + Math.floor(Math.random() * 5 + 1) + '.png';
dado5.src = 'img/dados/' + Math.floor(Math.random() * 5 + 1) + '.png';

        if(rondas <= 19) { // 20 rondas en total: 10 por cada jugador
    if(dado1.src == dado2.src && dado1.src == dado3.src && dado1.src == dado4.src && dado1.src == dado5.src) {

    puntosJ1 += 12; //si saca todos los dados iguales suma 12 puntos al jugador 1
    rondas++; // cuenta 1 ronda
    //document.formulario2.boton2.disabled = false;

    } else if((dado1.src == dado2.src && dado1.src == dado3.src && dado1.src == dado4.src) ||
  (dado1.src == dado3.src && dado1.src == dado4.src && dado1.src == dado5.src) ||
  (dado1.src == dado2.src && dado1.src == dado3.src && dado1.src == dado5.src) || 
  (dado1.src == dado2.src && dado1.src == dado4.src && dado1.src == dado5.src) || 
  (dado2.src == dado3.src && dado2.src == dado4.src && dado2.src == dado5.src)) {

    puntosJ1 += 6;// si saca 4 dados iguales suma 6 puntos al jugador 1
    rondas++; // cuenta 1 ronda al jugador 1

    } else if((dado1.src == dado2.src && dado1.src == dado3.src) ||
    (dado2.src == dado3.src && dado2.src == dado4.src) ||
    (dado3.src == dado4.src && dado3.src == dado5.src) ||
    (dado5.src == dado1.src && dado5.src == dado2.src) ||
    (dado4.src == dado1.src && dado4.src == dado2.src) ||
    (dado1.src == dado5.src && dado1.src == dado4.src) ||
    (dado1.src == dado3.src && dado1.src == dado4.src) ||
    (dado1.src == dado3.src && dado1.src == dado5.src) ||
    (dado2.src == dado4.src && dado2.src == dado5.src) || 
    (dado2.src == dado3.src && dado2.src == dado5.src)) {

    puntosJ1 += 3; //si saca 3 dados iguales suma 3 puntos al jugador 1
    rondas++; //cuenta 1 ronda al jugador 1
    
    } else if((dado1.src == dado2.src) ||
    (dado1.src == dado3.src) ||
    (dado1.src == dado4.src) ||
    (dado1.src == dado5.src) ||
    (dado2.src == dado3.src) ||
    (dado2.src == dado4.src) ||
    (dado2.src == dado5.src) ||
    (dado3.src == dado4.src) ||
    (dado3.src == dado5.src) ||
    (dado4.src == dado5.src)) {

        rondas++; // cuenta 1 ronda y no tendria que hacerlo al jugador 1
        
    } else {
    rondas++; // si todos los dados son distintos, no suma puntos y pasa el turno al proximo jugador
    }
        let txtPuntos = document.getElementById('puntos1');
        txtPuntos.innerHTML = 'Puntaje del jugador 1: ' + puntosJ1;
    }
}

function jugador2 (){ //jugador 2: dados, puntos

let dadosJ2 = new Array(); //dados del jugador 2
     dadosJ2[0] = document.getElementById('dado11');
     dadosJ2[1] = document.getElementById('dado22');
     dadosJ2[2] = document.getElementById('dado33');
     dadosJ2[3] = document.getElementById('dado44');
     dadosJ2[4] = document.getElementById('dado55');

dado11.src = 'img/dados/' + Math.floor(Math.random() * 5 + 1) + '.png'; // ranndom de los dados del jugador 2
dado22.src = 'img/dados/' + Math.floor(Math.random() * 5 + 1) + '.png';
dado33.src = 'img/dados/' + Math.floor(Math.random() * 5 + 1) + '.png';
dado44.src = 'img/dados/' + Math.floor(Math.random() * 5 + 1) + '.png';
dado55.src = 'img/dados/' + Math.floor(Math.random() * 5 + 1) + '.png';


        if(rondas <= 19) {
    if(dado11.src == dado22.src && dado11.src == dado33.src && dado11.src == dado44.src && dado11.src == dado55.src) {

    puntosJ2 += 12; // si son todos los dados iguales, suma 12 puntos al jugador 2
    rondas++; //suma una ronda

    }else if((dado11.src == dado22.src && dado11.src == dado33.src && dado11.src == dado44.src) ||
  (dado11.src == dado33.src && dado11.src == dado44.src && dado11.src == dado55.src) ||
  (dado11.src == dado22.src && dado11.src == dado33.src && dado11.src == dado55.src) || 
  (dado11.src == dado22.src && dado11.src == dado44.src && dado11.src == dado55.src) || 
  (dado22.src == dado33.src && dado22.src == dado44.src && dado22.src == dado55.src)) {

    puntosJ2 += 6; // si hay 4 dados iguales, suma 6 puntos al jugador 2
    rondas++; //suma una ronda

    } else if((dado11.src == dado22.src && dado11.src == dado33.src) ||
    (dado22.src == dado33.src && dado22.src == dado44.src) ||
    (dado33.src == dado44.src && dado33.src == dado55.src) ||
    (dado55.src == dado11.src && dado55.src == dado22.src) ||
    (dado44.src == dado11.src && dado44.src == dado22.src) ||
    (dado11.src == dado55.src && dado11.src == dado44.src) ||
    (dado11.src == dado33.src && dado11.src == dado44.src) ||
    (dado11.src == dado33.src && dado11.src == dado55.src) ||
    (dado22.src == dado44.src && dado22.src == dado55.src) || 
    (dado22.src == dado33.src && dado22.src == dado55.src)) {

    puntosJ2 += 3; // si hay 3 dados iguales, suma 3 puntos al jugador 2
    rondas++; //suma una ronda
 
    } else if((dado11.src == dado22.src) ||
    (dado11.src == dado33.src) ||
    (dado11.src == dado44.src) ||
    (dado11.src == dado55.src) ||
    (dado22.src == dado33.src) ||
    (dado22.src == dado44.src) ||
    (dado22.src == dado55.src) ||
    (dado33.src == dado44.src) ||
    (dado33.src == dado55.src) ||
    (dado44.src == dado55.src)) {
        
        rondas++; 
        
    } else {
        
    rondas++; // si todos los dados son distintos, no suma puntos y pasa el turno al proximo jugador

    }
        } else if(puntosJ1 == puntosJ2) { // si empatan ambos jugadores
            alert('Ambos jugadores empataron, se habilitará una ronda más para desempatar :)');
            rondas--; // agrega una ronda mas
        } else if(rondas >= 20) { // termina el juego, muestra el boton para comenzar de nuevo
            document.getElementById('tarjPreguntas').classList.add('oculto'); //termina el juego
            document.getElementById('boton-fin').classList.remove('oculto');

            if(puntosJ1>puntosJ2) { // muestra al ganador
                document.getElementById('resultado').innerHTML = 'GANADOR: JUGADOR 1 - PUNTOS: ' + puntosJ1; 
            } else {
                document.getElementById('resultado').innerHTML = 'GANADOR: JUGADOR 2 - PUNTOS: ' + puntosJ2;
            }
        } 
        let txtPuntos2 = document.getElementById('puntos2');
        txtPuntos2.innerHTML = 'Puntaje del jugador 2: ' + puntosJ2;
}

function terminoJuego() {
    document.getElementById('tarjPreguntas').classList.remove('oculto'); //vuelve a mostrar el juego
    rondas = 1; //reinicia los contadores para empezar de vuelta
    puntosJ1 = 0;
    puntosJ2 = 0;
    //console.log(puntosJ1 + puntosJ2);
        let txtPuntos = document.getElementById('puntos1'); //muestra puntajes de ambos jugadores
        txtPuntos.innerHTML = 'Puntaje del jugador 1: ' + puntosJ1;
        let txtPuntos2 = document.getElementById('puntos2');
        txtPuntos2.innerHTML = 'Puntaje del jugador 2: ' + puntosJ2;
}