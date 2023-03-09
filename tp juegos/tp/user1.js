//JUEGO DE PREGUNTAS
		function empezarJuego() {
			console.log('Started');
			document.getElementById('boton-comienzo').classList.add('oculto');
			document.getElementById('tarjPreguntas').classList.remove('oculto');
			document.formulario1.pregunta1.disabled = false;
		} 
				
		var preguntas = new Array(); //preguntas
		var respuestas = new Array('sonic','1980','bowser','pong',
			'donkey kong','extraterrestres','3','4','pinball','playstation');//respuestas
		var puntos = 0; 
		
		function comprobar1() {	
			preguntas[0] = document.getElementById('pregunta1').value; //al array 0 se le asigna la pregunta 1
			
				if(preguntas[0].toLowerCase() == respuestas[0]) { //pregunta 1
					puntos += 10; //respuesta correcta: suma 10 puntos
					document.formulario2.pregunta2.disabled = false; //habilita proxima pregunta si es correcta
				} else {
					puntos += 0; //respuesta incorrecta: no suma puntos
					alert('La respuesta es incorrecta, no se han sumado puntos');
					document.formulario2.pregunta2.disabled = true; //habilita proxima pregunta tambien si es incorrecta
				} 
			document.formulario1.pregunta1.disabled = true; //vuelve a inhabilitar la pregunta ya respondida
			document.getElementById('btn-pista2').disabled = false; //habilita el boton de la primera pista en la proxima pregunta
			alert('Puntos hasta el momento: ' + puntos);
			let nuevo = document.getElementById('punt');
			nuevo.innerHTML = 'Puntos: ' + puntos; //muestra los puntos en el p con el id 'punt'
		}

		function comprobar2() {
			preguntas[1] = document.getElementById('pregunta2').value;//al array 1 se le asigna la pregunta 2
			
				if(preguntas[1].toLowerCase() == respuestas[1]) { //pregunta 2
					puntos += 10; //respuesta correcta: suma 10 puntos
					document.formulario3.pregunta3.disabled = false; //habilita proxima pregunta si es correcta
				} else {
					puntos += 0; //respuesta incorrecta: no suma puntos
					//alert('La respuesta es incorrecta, no se han sumado puntos');
				} 
			document.formulario3.pregunta3.disabled = false;//habilita proxima pregunta tambien si es incorrecta
			document.formulario2.pregunta2.disabled = true; //vuelve a inhabilitar la pregunta ya respondida
			document.getElementById('btn-pista3').disabled = false; //habilita el boton de la primera pista en la proxima pregunta
			alert('Puntos hasta el momento: ' + puntos);
			let nuevo = document.getElementById('punt');
			nuevo.innerHTML = 'Puntos: ' + puntos; //muestra los puntos en el p con el id 'punt'
		}

		function comprobar3() {
			preguntas[2] = document.getElementById('pregunta3').value; //al array 2 se le asigna la pregunta 3

				if(preguntas[2].toLowerCase() == respuestas[2]) { //pregunta 3
					puntos += 10; //respuesta correcta: suma 10 puntos
					document.formulario4.pregunta4.disabled = false; //habilita proxima pregunta si es correcta
				} else {
					puntos += 0; //respuesta incorrecta: no suma puntos
				} 
			document.formulario4.pregunta4.disabled = false; //habilita proxima pregunta tambien si es incorrecta
			document.formulario3.pregunta3.disabled = true; //vuelve a inhabilitar la pregunta ya respondida
			document.getElementById('btn-pista4').disabled = false; //habilita el boton de la primera pista en la proxima pregunta
			alert('Puntos hasta el momento: ' + puntos);
			let nuevo = document.getElementById('punt');
			nuevo.innerHTML = 'Puntos: ' + puntos; //muestra los puntos en el p con el id 'punt'
		}

		function comprobar4() { 
			preguntas[3] = document.getElementById('pregunta4').value;//al array 3 se le asigna la pregunta 4
			
				if(preguntas[3].toLowerCase() == respuestas[3]) { //pregunta 4
					puntos += 10; //respuesta correcta: suma 10 puntos
					document.formulario5.pregunta5.disabled = false; //habilita proxima pregunta si es correcta
				} else {
					puntos += 0; //respuesta incorrecta: no suma puntos
				} 
			document.formulario5.pregunta5.disabled = false; //habilita proxima pregunta tambien si es incorrecta
			document.formulario4.pregunta4.disabled = true; //vuelve a inhabilitar la pregunta ya respondida
			document.getElementById('btn-pista5').disabled = false; //habilita el boton de la primera pista en la proxima pregunta
			alert('Puntos hasta el momento: ' + puntos);
			let nuevo = document.getElementById('punt');
			nuevo.innerHTML = 'Puntos: ' + puntos; //muestra los puntos en el p con el id 'punt'
		}

		function comprobar5() { 
			preguntas[4] = document.getElementById('pregunta5').value;//al array 4 se le asigna la pregunta 5

				if(preguntas[4].toLowerCase() == respuestas[4]) { //pregunta 5
					puntos += 10; //respuesta correcta: suma 10 puntos
					document.formulario6.pregunta6.disabled = false; //habilita proxima pregunta si es correcta
				} else {
					puntos += 0; //respuesta incorrecta: no suma puntos
				} 
			document.formulario6.pregunta6.disabled = false; //habilita proxima pregunta tambien si es incorrecta
			document.formulario5.pregunta5.disabled = true; //vuelve a inhabilitar la pregunta ya respondida
			document.getElementById('btn-pista6').disabled = false; //habilita el boton de la primera pista en la proxima pregunta
			alert('Puntos hasta el momento: ' + puntos);
			let nuevo = document.getElementById('punt');
			nuevo.innerHTML = 'Puntos: ' + puntos; //muestra los puntos en el p con el id 'punt'
		}

		function comprobar6() { 
			preguntas[5] = document.getElementById('pregunta6').value;//al array 5 se le asigna la pregunta 6
				if(preguntas[5].toLowerCase() == respuestas[5]) { //pregunta 6
					puntos += 10; //respuesta correcta: suma 10 puntos
					document.formulario7.pregunta7.disabled = false; //habilita proxima pregunta si es correcta
				} else {
					puntos += 0; //respuesta incorrecta: no suma puntos
				} 
				
			document.formulario7.pregunta7.disabled = false; //habilita proxima pregunta tambien si es incorrecta
			document.formulario6.pregunta6.disabled = true; //vuelve a inhabilitar la pregunta ya respondida
			document.getElementById('btn-pista7').disabled = false; //habilita el boton de la primera pista en la proxima pregunta
			alert('Puntos hasta el momento: ' + puntos);
			let nuevo = document.getElementById('punt');
			nuevo.innerHTML = 'Puntos: ' + puntos; //muestra los puntos en el p con el id 'punt'
		}

		function comprobar7() {
			preguntas[6] = document.getElementById('pregunta7').value;//al array 6 se le asigna la pregunta 7

				if(preguntas[6].toLowerCase() == respuestas[6]) { //pregunta 7
					puntos += 10; //respuesta correcta: suma 10 puntos
					document.formulario8.pregunta8.disabled = false; //habilita proxima pregunta si es correcta
				} else {
					puntos += 0; //respuesta incorrecta: no suma puntos
				} 
			document.formulario8.pregunta8.disabled = false; //habilita proxima pregunta tambien si es incorrecta
			document.formulario7.pregunta7.disabled = true; //vuelve a inhabilitar la pregunta ya respondida
			document.getElementById('btn-pista8').disabled = false; //habilita el boton de la primera pista en la proxima pregunta
			alert('Puntos hasta el momento: ' + puntos);
			let nuevo = document.getElementById('punt');
			nuevo.innerHTML = 'Puntos: ' + puntos;//muestra los puntos en el p con el id 'punt'
		}

		function comprobar8() {
			preguntas[7] = document.getElementById('pregunta8').value;//al array 7 se le asigna la pregunta 8

				if(preguntas[7].toLowerCase() == respuestas[7]) { //pregunta 8
					puntos += 10; //respuesta correcta: suma 10 puntos
					document.formulario9.pregunta9.disabled = false; //habilita proxima pregunta si es correcta
				} else {
					puntos += 0; //respuesta incorrecta: no suma puntos
				} 
			document.formulario9.pregunta9.disabled = false; //habilita proxima pregunta tambien si es incorrecta
			document.formulario8.pregunta8.disabled = true; //vuelve a inhabilitar la pregunta ya respondida
			document.getElementById('btn-pista9').disabled = false; //habilita el boton de la primera pista en la proxima pregunta
			alert('Puntos hasta el momento: ' + puntos);
			let nuevo = document.getElementById('punt');
			nuevo.innerHTML = 'Puntos: ' + puntos;//muestra los puntos en el p con el id 'punt'
		}

		function comprobar9() {
			preguntas[8] = document.getElementById('pregunta9').value;//al array 8 se le asigna la pregunta 9

				if(preguntas[8].toLowerCase() == respuestas[8]) { //pregunta 9
					puntos += 10; //respuesta correcta: suma 10 puntos
					document.formulario10.pregunta10.disabled = false; //habilita proxima pregunta si es correcta
				} else {
					puntos += 0; //respuesta incorrecta: no suma puntos
				} 
			document.formulario10.pregunta10.disabled = false; //habilita proxima pregunta tambien si es incorrecta
			document.formulario9.pregunta9.disabled = true; //vuelve a inhabilitar la pregunta ya respondida
			document.getElementById('btn-pista10').disabled = false; //habilita el boton de la primera pista en la proxima pregunta
			alert('Puntos hasta el momento: ' + puntos);
			let nuevo = document.getElementById('punt');
			nuevo.innerHTML = 'Puntos: ' + puntos;//muestra los puntos en el p con el id 'punt'
		}

		function comprobar10() {
			preguntas[9] = document.getElementById('pregunta10').value;//al array 9 se le asigna la pregunta 10

				if(preguntas[9].toLowerCase() == respuestas[9]) { //pregunta 10
					puntos += 10; //respuesta correcta: suma 10 puntos
				} else {
					puntos += 0; //respuesta incorrecta: no suma puntos
				} 
				document.formulario10.pregunta10.disabled = true; //vuelve a inhabilitar la pregunta ya respondida

			alert('Puntos hasta el momento: ' + puntos);
			let nuevo = document.getElementById('punt');
			nuevo.innerHTML = 'Puntos: ' + puntos;//muestra los puntos en el p con el id 'punt'
			document.getElementById('next10').disabled = true; //Deshabilita el next una vez usado para que no siga sumando puntos
		}
			
		var datosPistas = new Array ();
		var mostrarPistas = new Array();
		var pistasUsadas = 0;
		var sinPistas;
		var opcion1;
		var opcion2;

		//pistas sonic
		function pista1() {
			opcion1 = confirm("¿Estás seguro que quieres gastar la primera pista? Se te restarán 2 puntos");
			mostrarPistas[0] = document.getElementById('mostrarpista1');
			datosPistas[0] = "Pista 1: El nombre del personaje empieza con la letra S"; //primera pista pregunta 1: sonic

				if (opcion1 == true && pistasUsadas<5) {
					pistasUsadas++;
					mostrarPistas[0].innerHTML = datosPistas[0]; //muestra pista 1 de la pregunta 1 (sonic)
					puntos = puntos - 2;
					document.getElementById('btn-pista1b').disabled = false; //habilita el boton para acceder a la segunda pista
				} else {
					document.getElementById('btn-pista1').disabled = true;
					document.getElementById('btn-pista1b').disabled = true;
					sinPistas = document.getElementById('sinPistas');
					sinPistas.innerHTML = 'No hay mas pistas disponibles';
					alert('No hay más pistas disponibles');
				}
	}

		function pista1b() {
			opcion2 = confirm("¿Estás seguro que quieres gastar otra pista? Se te restarán 5 puntos más.");
			mostrarPistas[1] = document.getElementById('mostrarpista1b');
			datosPistas[1] = "Pista 2: su mejor amigo se llama Tails"; //segunda pista pregunta 1: sonic

				if (opcion2 == true && pistasUsadas<5) {
					pistasUsadas++;
					puntos = puntos - 5;
					mostrarPistas[1].innerHTML = datosPistas[1]; //muestra pista 2 de la pregunta 1 (sonic)
				} else {
					document.getElementById('btn-pista1').disabled = true;
					document.getElementById('btn-pista1b').disabled = true;
					sinPistas = document.getElementById('sinPistas');
					sinPistas.innerHTML = 'No hay mas pistas disponibles';
					alert('No hay más pistas disponibles');
				} 
		}

		//pistas pacman
    	function pista2() {
			opcion1 = confirm("¿Estás seguro que quieres gastar la primera pista? Se te restarán 2 puntos");
			mostrarPistas[2] = document.getElementById('mostrarpista2');
			datosPistas[2] = "Pista 1: se creó entre 1970 y 1990"; //primera pista pregunta 2: pacman

				if(opcion1 == true && pistasUsadas<5) {
					pistasUsadas++;
					mostrarPistas[2].innerHTML = datosPistas[2]; //muestra pista 1 de la pregunta 2 (pacman)
					puntos = puntos - 2;
					document.getElementById('btn-pista2b').disabled = false; //habilita el boton para acceder a la segunda pista
				} else {
					document.getElementById('btn-pista2').disabled = true;
					document.getElementById('btn-pista2b').disabled = true;
					sinPistas = document.getElementById('sinPistas');
					sinPistas.innerHTML = 'No hay mas pistas disponibles';
					alert('No hay más pistas disponibles');
				}
		}
	
		function pista2b() {
			opcion2 = confirm("¿Estás seguro que quieres gastar otra pista? Se te restarán 5 puntos más");
			mostrarPistas[3] = document.getElementById('mostrarpista2b');
			datosPistas[3] = "Pista 2: fue en la decada del 80"; //segunda pista 2 pregunta 2: pacman

				if (opcion2 == true && pistasUsadas<5) {
					pistasUsadas++;
					puntos = puntos - 5;
					mostrarPistas[3].innerHTML = datosPistas[3]; //muestra pista 2 de la pregunta 2 (pacman)
				} else {
					document.getElementById('btn-pista2').disabled = true;
					document.getElementById('btn-pista2b').disabled = true;
					sinPistas = document.getElementById('sinPistas');
					sinPistas.innerHTML = 'No hay mas pistas disponibles';
					alert('No hay más pistas disponibles');
				}
	}

	//pistas mario bros
    function pista3() {
		opcion1 = confirm("¿Estás seguro que quieres gastar la primera pista? Se te restarán 2 puntos.");
		mostrarPistas[4] = document.getElementById('mostrarpista3');
		datosPistas[4] = "Pista 1: su nombre termina con la letra -R-"; //primera pista pregunta 3: mario bros
            
			if(opcion1 == true && pistasUsadas<5) {
				pistasUsadas++;
            	mostrarPistas[4].innerHTML = datosPistas[4]; //muestra pista 1 de la pregunta 3 (mario bros)
				puntos = puntos - 2;
            	document.getElementById('btn-pista3b').disabled = false; //habilita el boton para acceder a la segunda pista
			} else {
				document.getElementById('btn-pista3').disabled = true;
				document.getElementById('btn-pista3b').disabled = true;
				sinPistas = document.getElementById('sinPistas');
				sinPistas.innerHTML = 'No hay mas pistas disponibles';
				alert('No hay más pistas disponibles');
			}
		}
	
	function pista3b() {

		opcion2 = confirm("¿Estás seguro que quieres gastar otra pista? Se te restarán 5 puntos más. ATENCIÓN: si ya fueron utilizadas las 5 pistas, no se mostrará");
		mostrarPistas[5] = document.getElementById('mostrarpista3b');
		datosPistas[5] = "Pista 2: las primeras 3 letras de su nombre son -bow-"; //segunda pista pregunta 3: mario bros

			if (opcion2 == true && pistasUsadas<5) {
				pistasUsadas++;
				puntos = puntos - 5;
				mostrarPistas[5].innerHTML = datosPistas[5]; //muestra pista 2 de la pregunta 3 (mario bros)
			} else {
				document.getElementById('btn-pista3').disabled = true;
				document.getElementById('btn-pista3b').disabled = true;
				sinPistas = document.getElementById('sinPistas');
				sinPistas.innerHTML = 'No hay mas pistas disponibles';
				alert('No hay más pistas disponibles');
			}
	}
	
	//pistas arcade
    function pista4() {

        opcion1 = confirm("¿Estás seguro que quieres gastar la primera pista? Se te restarán 2 puntos. ATENCIÓN: si ya fueron utilizadas las 5 pistas, no se mostrará");
        mostrarPistas[6] = document.getElementById('mostrarpista4');
        datosPistas[6] = "Pista 1: fue diseñado por Al Alcom para Nolan Bushnell, poco antes de ser fundada la compañía Atari"; //primera pista pregunta 4: arcade

            if(opcion1 == true && pistasUsadas<5) {
				pistasUsadas++;
            	mostrarPistas[6].innerHTML = datosPistas[6]; //muestra pista 1 de la pregunta 4 (arcade)
				puntos = puntos - 2;
            	document.getElementById('btn-pista4b').disabled = false; //habilita el boton para acceder a la segunda pista
			} else {
				document.getElementById('btn-pista4').disabled = true;
				document.getElementById('btn-pista4b').disabled = true;
				sinPistas = document.getElementById('sinPistas');
				sinPistas.innerHTML = 'No hay mas pistas disponibles';
				alert('No hay más pistas disponibles');
			}
	}

	function pista4b() {

		opcion2 = confirm("¿Estás seguro que quieres gastar otra pista? Se te restarán 5 puntos más. ATENCIÓN: si ya fueron utilizadas las 5 pistas, no se mostrará");
		mostrarPistas[7] = document.getElementById('mostrarpista4b');
		datosPistas[7] = "Pista 2: El juego comienza con la letra -P-"; //segunda pista pregunta 4: arcade

			if (opcion2 == true && pistasUsadas<5) {
				pistasUsadas++;
				puntos = puntos - 5;
				mostrarPistas[7].innerHTML = datosPistas[7]; //muestra pista 2 de la pregunta 4 (arcade)
			} else {
			document.getElementById('btn-pista4').disabled = true;
				document.getElementById('btn-pista4b').disabled = true;
				sinPistas = document.getElementById('sinPistas');
				sinPistas.innerHTML = 'No hay mas pistas disponibles';
				alert('No hay más pistas disponibles');
			}
	}

	//pistas donkey kong
    function pista5() {

        opcion1 = confirm("¿Estás seguro que quieres gastar la primera pista? Se te restarán 2 puntos. ATENCIÓN: si ya fueron utilizadas las 5 pistas, no se mostrará");
        mostrarPistas[8] = document.getElementById('mostrarpista5');
        datosPistas[8] = "Pista 1: tiene, en su nombre, la palabra -mono- en inglés "; //primera pista pregunta 5: donkey kong

            if(opcion1 == true && pistasUsadas<5) {
				pistasUsadas++;
            	mostrarPistas[8].innerHTML = datosPistas[8]; //muestra pista 1 de la pregunta 5 (donkey kong)
				puntos = puntos - 2;
            	document.getElementById('btn-pista5b').disabled = false; //habilita el boton para acceder a la segunda pista
			} else {
				document.getElementById('btn-pista5').disabled = true;
				document.getElementById('btn-pista5b').disabled = true;
				sinPistas = document.getElementById('sinPistas');
				sinPistas.innerHTML = 'No hay mas pistas disponibles';
				alert('No hay más pistas disponibles');
			}
	}

	function pista5b() {

		opcion2 = confirm("¿Estás seguro que quieres gastar otra pista? Se te restarán 5 puntos más. ATENCIÓN: si ya fueron utilizadas las 5 pistas, no se mostrará");
		mostrarPistas[9] = document.getElementById('mostrarpista5b');
		datosPistas[9] = "Pista 2: tiene, en su nombre, una parte del nombre de la ciudad -Hong Kong-"; //segunda pista pregunta 5: donkey kong

			if (opcion2 == true && pistasUsadas<5) {
				pistasUsadas++;
				puntos = puntos - 5;
				mostrarPistas[9].innerHTML = datosPistas[9]; //muestra pista 2 de la pregunta 5 (donkey kong)
			} else {
				document.getElementById('btn-pista5').disabled = true;
				document.getElementById('btn-pista5b').disabled = true;
				sinPistas = document.getElementById('sinPistas');
				sinPistas.innerHTML = 'No hay mas pistas disponibles';
				alert('No hay más pistas disponibles');
			}
	}

	//pistas space invaders
    function pista6() {

        opcion1 = confirm("¿Estás seguro que quieres gastar la primera pista? Se te restarán 2 puntos. ATENCIÓN: si ya fueron utilizadas las 5 pistas, no se mostrará");
        mostrarPistas[10] = document.getElementById('mostrarpista6');
        datosPistas[10] = "Pista 1: Katy Perry tiene una canción sobre ellos"; //primera pista pregunta 6: space invaders

            if(opcion1 == true && pistasUsadas<5) {
				pistasUsadas++;
            	mostrarPistas[10].innerHTML = datosPistas[10]; //muestra pista 1 de la pregunta 6 (space invaders)
				puntos = puntos - 2;
            	document.getElementById('btn-pista6b').disabled = false; //habilita el boton para acceder a la segunda pista
			} else {
				document.getElementById('btn-pista6').disabled = true;
				document.getElementById('btn-pista6b').disabled = true;
				sinPistas = document.getElementById('sinPistas');
				sinPistas.innerHTML = 'No hay mas pistas disponibles';
				alert('No hay más pistas disponibles');
			}
	}

	function pista6b() {

		opcion2 = confirm("¿Estás seguro que quieres gastar otra pista? Se te restarán 5 puntos más. ATENCIÓN: si ya fueron utilizadas las 5 pistas, no se mostrará");
		mostrarPistas[11] = document.getElementById('mostrarpista6b');
		datosPistas[11] = "Pista 2: El personaje principal de la película E.T. pertenece a la especie de los seres que se deben eliminar en el juego"; //segunda pista pregunta 5: donkey kong

			if (opcion2 == true && pistasUsadas<5) {
				pistasUsadas++;
				puntos = puntos - 5;
			mostrarPistas[11].innerHTML = datosPistas[11]; //muestra pista 2 de la pregunta 6 (space invaders)
			} else {
			document.getElementById('btn-pista6').disabled = true;
			document.getElementById('btn-pista6b').disabled = true;
			sinPistas = document.getElementById('sinPistas');
			sinPistas.innerHTML = 'No hay mas pistas disponibles';
			alert('No hay más pistas disponibles');
			}
	}

	//pistas arkanoid
	function pista7() {

        opcion1 = confirm("¿Estás seguro que quieres gastar la primera pista? Se te restarán 2 puntos. ATENCIÓN: si ya fueron utilizadas las 5 pistas, no se mostrará");
        mostrarPistas[12] = document.getElementById('mostrarpista7');
        datosPistas[12] = "Pista 1: La respuesta esta entre 1 y 5 incluido"; //primera pista pregunta 7: arkanoid

            if(opcion1 == true && pistasUsadas<5) {
				pistasUsadas++;
            	mostrarPistas[12].innerHTML = datosPistas[12]; //muestra pista 1 de la pregunta 7 (arkanoid)
				puntos = puntos - 2;
            	document.getElementById('btn-pista7b').disabled = false; //habilita el boton para acceder a la segunda pista
			} else {
				document.getElementById('btn-pista7').disabled = true;
				document.getElementById('btn-pista7b').disabled = true;
				sinPistas = document.getElementById('sinPistas');
				sinPistas.innerHTML = 'No hay mas pistas disponibles';
				alert('No hay más pistas disponibles');
			}
	}

	function pista7b() {

		opcion2 = confirm("¿Estás seguro que quieres gastar otra pista? Se te restarán 5 puntos más. ATENCIÓN: si ya fueron utilizadas las 5 pistas, no se mostrará");
        mostrarPistas[13] = document.getElementById('mostrarpista7b');
        datosPistas[13] = "Pista 2: La respuesta esta entre 1 y 3 incluido"; //segunda pista pregunta 7 (arkanoid)

            if(opcion2 == true && pistasUsadas<5) {
				pistasUsadas++;
				puntos = puntos - 5;
            	mostrarPistas[13].innerHTML = datosPistas[13]; //muestra pista 2 de la pregunta 7 (arkanoid)
			} else {
				document.getElementById('btn-pista7').disabled = true;
				document.getElementById('btn-pista7b').disabled = true;
				sinPistas = document.getElementById('sinPistas');
				sinPistas.innerHTML = 'No hay mas pistas disponibles';
				alert('No hay más pistas disponibles');
			}
	}

	//pistas tetris
	function pista8() {

        opcion1 = confirm("¿Estás seguro que quieres gastar la primera pista? Se te restarán 2 puntos. ATENCIÓN: si ya fueron utilizadas las 5 pistas, no se mostrará");
        mostrarPistas[14] = document.getElementById('mostrarpista8');
        datosPistas[14] = "Pista 1: es un numero par"; //primera pista pregunta 8: tetris

            if(opcion1 == true && pistasUsadas<5) {
				pistasUsadas++;
            	mostrarPistas[14].innerHTML = datosPistas[14]; //muestra pista 1 de la pregunta 8 (tetris)
				puntos = puntos - 2;
            	document.getElementById('btn-pista8b').disabled = false; //habilita el boton para acceder a la segunda pista
			} else {
				document.getElementById('btn-pista8').disabled = true;
				document.getElementById('btn-pista8b').disabled = true;
				sinPistas = document.getElementById('sinPistas');
				sinPistas.innerHTML = 'No hay mas pistas disponibles';
				alert('No hay más pistas disponibles');
			}
	}

	function pista8b() {

		opcion2 = confirm("¿Estás seguro que quieres gastar otra pista? Se te restarán 5 puntos más. ATENCIÓN: si ya fueron utilizadas las 5 pistas, no se mostrará");
        mostrarPistas[15] = document.getElementById('mostrarpista8b');
        datosPistas[15] = "Pista 2: es menor a 5"; //segunda pista pregunta 8 (tetris)
	 
            if(opcion2 == true && pistasUsadas<5) {
				pistasUsadas++;
				puntos = puntos - 5;
            	mostrarPistas[15].innerHTML = datosPistas[15]; //muestra pista 2 de la pregunta 8 (tetris)
			} else {
				document.getElementById('btn-pista8').disabled = true;
				document.getElementById('btn-pista8b').disabled = true;
				sinPistas = document.getElementById('sinPistas');
				sinPistas.innerHTML = 'No hay mas pistas disponibles';
				alert('No hay más pistas disponibles');
			}
	}

	//pistas pinball
	function pista9() {

        opcion1 = confirm("¿Estás seguro que quieres gastar la primera pista? Se te restarán 2 puntos. ATENCIÓN: si ya fueron utilizadas las 5 pistas, no se mostrará");
        mostrarPistas[16] = document.getElementById('mostrarpista9');
        datosPistas[16] = "Pista 1: empieza con -P-"; //primera pista pregunta 9: pinball

            if(opcion2 == true && pistasUsadas<5) {
				pistasUsadas++;
            	mostrarPistas[16].innerHTML = datosPistas[16]; //muestra pista 1 de la pregunta 9 (pinball)
				puntos = puntos - 2;
            	document.getElementById('btn-pista9b').disabled = false; //habilita el boton para acceder a la segunda pista
			} else {
				document.getElementById('btn-pista9').disabled = true;
				document.getElementById('btn-pista9b').disabled = true;
				sinPistas = document.getElementById('sinPistas');
				sinPistas.innerHTML = 'No hay mas pistas disponibles';
				alert('No hay más pistas disponibles');
			}
	}

	function pista9b() {

		opcion2 = confirm("¿Estás seguro que quieres gastar otra pista? Se te restarán 5 puntos más. ATENCIÓN: si ya fueron utilizadas las 5 pistas, no se mostrará");
        mostrarPistas[17] = document.getElementById('mostrarpista9b');
        datosPistas[17] = "Pista 2: tiene en su nombre la palabra 'pelota' en ingles"; //segunda pista pregunta 9 (pinball)
	
            if(opcion2 == true && pistasUsadas<5){
				puntos = puntos - 5;
            	mostrarPistas[17].innerHTML = datosPistas[17]; //muestra pista 2 de la pregunta 9 (pinball)
			} else {
				document.getElementById('btn-pista9').disabled = true;
				document.getElementById('btn-pista9b').disabled = true;
				sinPistas = document.getElementById('sinPistas');
				sinPistas.innerHTML = 'No hay mas pistas disponibles';
				alert('No hay más pistas disponibles');
			}
	}

	//pistas crash
	function pista10() {

        opcion1 = confirm("¿Estás seguro que quieres gastar la primera pista? Se te restarán 2 puntos. ATENCIÓN: si ya fueron utilizadas las 5 pistas, no se mostrará");
        mostrarPistas[18] = document.getElementById('mostrarpista10');
        datosPistas[18] = "Pista 1: la consola salio a la venta en 1994"; //primera pista pregunta 10: crash

            if(opcion2 == true && pistasUsadas<5) {
				pistasUsadas++;
            	mostrarPistas[18].innerHTML = datosPistas[18]; //muestra pista 1 de la pregunta 10 (crash)
				puntos = puntos - 2;
            	document.getElementById('btn-pista10b').disabled = false; //habilita el boton para acceder a la segunda pista
			} else {
				document.getElementById('btn-pista10').disabled = true;
				document.getElementById('btn-pista10b').disabled = true;
				sinPistas = document.getElementById('sinPistas');
				sinPistas.innerHTML = 'No hay mas pistas disponibles';
				alert('No hay más pistas disponibles');
			}
	}

	function pista10b() {

		opcion2 = confirm("¿Estás seguro que quieres gastar otra pista? Se te restarán 5 puntos más. ATENCIÓN: si ya fueron utilizadas las 5 pistas, no se mostrará");
        mostrarPistas[19] = document.getElementById('mostrarpista10b');
        datosPistas[19] = "Pista 2: tiene en su nombre la palabra -jugar- en ingles"; //segunda pista pregunta 10 (crash)
				
            if(opcion2 == true && pistasUsadas<5) {
				pistasUsadas++;
				puntos = puntos - 5;
            	mostrarPistas[19].innerHTML = datosPistas[19]; //muestra pista 2 de la pregunta 10 (crash)
			} else {
				document.getElementById('btn-pista10').disabled = true;
				document.getElementById('btn-pista10b').disabled = true;
				sinPistas = document.getElementById('sinPistas');
				sinPistas.innerHTML = 'No hay mas pistas disponibles';
				alert('No hay más pistas disponibles');
			}
	}
	
		var puntFinal;

	function multiplicar() {
		alert('Si al finalizar el juego te quedaron pistas sin usar, podes intentar multiplicar tu puntaje por un número del 0 al 9. El último intento de multiplicar el puntaje será el definitivo para el total final.');
		var btnAleatorio = document.getElementById('numero'); //tira un numero al azar entre 1 y 9
		puntFinal = puntos;
		let num = Math.floor(Math.random() * 10);
		let numAleatorio;
		let pistasQuedan = document.getElementById('pistasQuedan');

		if(pistasUsadas < 5 && num != 0) { //chances de multiplicar si quedaron pistas sin usar
			btnAleatorio.innerHTML = num;
			numAleatorio = num;
			puntFinal = numAleatorio *= puntos; //multiplica los puntos por el numero aleatorio
			pistasUsadas--; //una vez que multiplica, resta una pista de las que quedaron libres

			pistasQuedan.innerHTML = 'Pistas restantes para multiplicar el puntaje: ' + pistasUsadas; //muestra pistas que quedan disponibles para multiplicar
		} 
		if(pistasUsadas >= 5 || num == 0) { //cuando no hay mas pistas disponibles, se deshabilita el boton de multiplicar
			btnAleatorio.disabled = true;
		}
		document.getElementById('puntajeFinal').innerHTML = 'Puntaje final: ' + puntFinal;
		console.log('puntos: ' + puntos);
	}

	function terminarJuego() {
		let contenedorPreg = document.getElementById('tarjPreguntas').classList.add('oculto'); //oculta el juego, no se juega mas
		let puntosFinal = document.getElementById('puntajeFinal');
		puntosFinal.innerHTML = 'PUNTAJE FINAL ' + puntos; //muestra el puntaje final del jugador
		}