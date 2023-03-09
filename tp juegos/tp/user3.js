const contadorPalabras = document.getElementById('contadorPalabras');
const letrasUsadasElemento = document.getElementById('letrasUsadas');
const botonComienzo = document.getElementById('boton-comienzo');

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d'); //setear propiedad 2d del canvas
ctx.canvas.width = 0; //setear ancho del canvas
ctx.canvas.height = 0; //setear alto del canvas
//console.log(lienzo);

const cuerpo = [ // partes del hombrecito ahorcado (donde va a estar)
    [4,2,1,1], //cabeza
    [4,3,1,2], //cuerpo/torso (2 pixeles)
    [3,5,1,1],
    [5,5,1,1],
    [3,3,1,1],
    [5,3,1,1]
];

let palabraSelec; // palabra seleccionada
let letrasUsadas; //letras usadas
let errores = 0; 
let aciertos = 0;

var palabras = ['crash','gameboy','atari','pacman','luigi'
,'robocop','asteroids','peach','playstation','bandicoot','tetris',
'brickgame', 'nintendo','galaxian','adventure'];

function agregarLetra(letra) { 
    const letraElemento = document.createElement('span');
    letraElemento.innerHTML = letra.toUpperCase();
    letrasUsadasElemento.appendChild(letraElemento);
};

function agregarCuerpo(cuerpo) { 
    ctx.fillStyle = '#fff'; // pinta al hombre ahorcado de blanco
    ctx.fillRect(...cuerpo); //toma los 4 parametros de cada posicion del array
};

function letraIncorrecta() { // si tocas una letra que no va en la palabra, se dibuja una parte del hombre ahorcado
    agregarCuerpo(cuerpo[errores]); //busca en el array de cuerpo las partes a eliminar del hombre ahorcado con las letras incorrectas
    errores++; // si la letra es incorrecta suma un error
    if(errores === cuerpo.length) finJuego(); //si los errores son iguales a la cantidad de partes del cuerpo (o al largo total del array cuerpo), llama a la funcion que termina el juego
};

function finJuego() { // funcion fin del juego
    document.removeEventListener('keydown', eventoLetra); //una vez terminada la partida, el usuario no puede ingresar mas letras
    botonComienzo.style.display = 'block';
};

function letraCorrecta(letra) {    
    const { children } = contadorPalabras; // obtiene todos los hijos del contenedor (letras en los elementos span)
    for(let i = 0; i<children.length; i++) { //ejecuta una repeticion hasta que no hay mas spans/letras
        if(children[i].innerHTML === letra) { // si el span en vista es igual a la letra que seleccionó el usuario
            children[i].classList.toggle('ocultado'); //muestra la palabra 
            aciertos++;
        }
    }
    if(aciertos === palabraSelec.length) finJuego(); //si la cantidad de aciertos es igual al largo de la palabra, termina la partida
};

function letraInput(letra) { // funcion en boton de start para volver a empezar; reinicia todas las variables a 0
    if(palabraSelec.includes(letra)) { // si la palabra correcta incluye la letra ingresada por el usuario
        letraCorrecta(letra);
    } else {
        letraIncorrecta(); // si la letra ingresada es incorrecta
    }
    agregarLetra(letra);
    letrasUsadas.push(letra); // agregamos la letra que usamos a letrasUsadas - agrega a la palabra si es correcta, y ademas la suma a las letras ya usadas
};

function eventoLetra(event) { // funcion en boton de start para volver a empezar; reinicia todas las variables a 0
    let nuevaLetra = event.key.toUpperCase();
    if(nuevaLetra.match(/^[a-zñ]$/i) && !letrasUsadas.includes(nuevaLetra)) {
        letraInput(nuevaLetra);
    }   
};

function dibujarPalabra () { 
        palabraSelec.forEach(letra => {
        const letraElemento = document.createElement('span');
        letraElemento.innerHTML = letra.toUpperCase(); //contenido: letra en mayuscula
        letraElemento.classList.add('letra'); //le agregamos al elemento letra a la clase letra
        letraElemento.classList.add('ocultado'); //le agregamos al elemento letra a la clase oculto
        contadorPalabras.appendChild(letraElemento);
    });
};

function cualquierPalabra() { // funcion en boton de start para volver a empezar; reinicia todas las variables a 0
    let palabra = palabras[Math.floor((Math.random() * palabras.length))].toUpperCase(); // selecciona al azar un valor del array de palabras
    palabraSelec = palabra.split(''); //separa las palabras en caracteres
};

function dibujoHombre () { // constantes = funciones
    ctx.canvas.width = 120; 
    ctx.canvas.height = 160;
    ctx.scale(20,20); // agrandar tamaño de los pixeles
    ctx.clearRect(0, 0, canvas.width, canvas.height); // vuelve a mostrar todo cuando se quiera jugar de nuevo
    ctx.fillStyle = '#553a19'; // color del poste
    //poste de la horca
    ctx.fillRect (0, 7, 4, 1); // en la posicion 0 de x y en la posicion 7 de y se pinta, se dibujan 4 pixeles en el sentido de x y 1 en el de y
    ctx.fillRect (1, 0, 1, 8); // en la posicion 1 de x y en la posicion 0 de y se pinta, se dibujan 1 pixel en el sentido de x y 7 en el de y
    ctx.fillRect (2, 0, 3, 1);
    ctx.fillRect (4, 1, 1, 1);
  };

function empezar () { // funcion en boton de start para volver a empezar; reinicia todas las variables a 0
    letrasUsadas = [];
    errores = 0;
    aciertos = 0;
    contadorPalabras.innerHTML = '';
    letrasUsadasElemento.innerHTML = '';
    botonComienzo.style.display = 'none';
    dibujoHombre();
    cualquierPalabra();
    dibujarPalabra();
    document.addEventListener('keydown', eventoLetra); // para que el usuario use letras del teclado
}