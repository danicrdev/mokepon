let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3;
let vidasEnemigo = 3;
let resultado


function iniciarJuego(){
	let botonMascotaJugador = document.getElementById('boton-mascota');
	botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

	let sectionOcultarAtaque =document.getElementById('seleccionar-ataque');
	sectionOcultarAtaque.style.display = 'none';
	
	let sectionOcultarReinicio =document.getElementById('reiniciar');
	sectionOcultarReinicio.style.display = 'none';
	
	let botonAgua = document.getElementById('boton-agua');
	botonAgua.addEventListener('click', ataqueAgua);
	let botonFuego = document.getElementById('boton-fuego');
	botonFuego.addEventListener('click', ataqueFuego);
	let botonTierra = document.getElementById('boton-tierra');
	botonTierra.addEventListener('click', ataqueTierra);
	let botonreiniciarJuego = document.getElementById('boton-reiniciar');
	botonreiniciarJuego.addEventListener('click', reiniciarJuego);
}

function seleccionarMascotaJugador(){
	let sectionOcultarSeleccion =document.getElementById('seleccionar-mascota');
	sectionOcultarSeleccion.style.display = 'none';

	let sectionOcultarAtaque =document.getElementById('seleccionar-ataque');
	sectionOcultarAtaque.style.display = 'block';

	let inputHipodogue = document.getElementById('hipodogue');
	let inputCapipepo = document.getElementById('capipepo');
	let inputRatigueya = document.getElementById('ratigueya');
	let spanMascotaJugador = document.getElementById('mascota-jugador');
	
	if(inputHipodogue.checked){
		spanMascotaJugador.innerHTML = "Hipodogue";;
	}else if(inputCapipepo.checked){
		spanMascotaJugador.innerHTML = "Capipepo";;
	}else if(inputRatigueya.checked){
		spanMascotaJugador.innerHTML = "Ratigueya";;
	}else{
		alert('Porfavor selecciona algún animal');
	}
	seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo(){
	let spanMascotaEnemigo = document.getElementById('mascota-oponente');
	let mascotaAleatoria = aleatorio(1,3);
	
	if (mascotaAleatoria == 1){
		spanMascotaEnemigo.innerHTML = 'Hipodogue';
	}else if(mascotaAleatoria == 2){
		spanMascotaEnemigo.innerHTML = 'Capipepo';
	}else{
		spanMascotaEnemigo.innerHTML = 'Ratigueya';
	}
}

function ataqueAgua(){
	ataqueJugador = 'Agua';
	ataqueAleatorioEnemigo();
}
function ataqueFuego(){
	ataqueJugador = 'Fuego';
	ataqueAleatorioEnemigo();
}
function ataqueTierra(){
	ataqueJugador = 'Tierra';
	ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo(){
	let ataqueAleatorio = aleatorio(1, 3);
	
	if (ataqueAleatorio == 1){
		ataqueEnemigo = 'Agua';
	} else if(ataqueAleatorio == 2){
		ataqueEnemigo = 'Fuego';
	}else{
		ataqueEnemigo = 'Tierra';
	}
	resultadoCombate();
}

function resultadoCombate(){ 
	let spanVidasJugador = document.getElementById('vidas-jugador');
	let spanVidasEnemigo = document.getElementById('vidas-enemigo');

	if(ataqueJugador == ataqueEnemigo){
		resultado = 'Empate';
	}else if((ataqueJugador=='Agua' &&  ataqueEnemigo=='Fuego')||(ataqueJugador=='Fuego' &&  ataqueEnemigo=='Tierra')||(ataqueJugador=='Tierra' &&  ataqueEnemigo=='Agua')){
		resultado = 'Ganaste';
		vidasEnemigo--;
		spanVidasEnemigo.innerHTML = vidasEnemigo;
	} else{
		resultado = 'Perdiste';
		vidasJugador--;
		spanVidasJugador.innerHTML = vidasJugador;
	}
	mensaje();
	revisarVidas();

}
function revisarVidas(){
	if (vidasEnemigo==0){
		mensajeFinal('Ganaste!');
	} else if (vidasJugador==0){
		mensajeFinal('Perdiste');
	}
}

function mensaje(){
	let section = document.getElementById('mensaje');
	let parrafo = document.createElement('p');
	parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador +', y el enemigo atacó con ' + ataqueEnemigo +'.'+ resultado;
	section.appendChild(parrafo);
} 
function mensajeFinal(resultadoFinal){
	let section = document.getElementById('mensaje');
	let parrafo = document.createElement('p');
	parrafo.innerHTML = resultadoFinal;
	section.appendChild(parrafo);

	let botonAgua = document.getElementById('boton-agua');
	botonAgua.disabled = true;
	let botonFuego = document.getElementById('boton-fuego');
	botonFuego.disabled = true;
	let botonTierra = document.getElementById('boton-tierra');
	botonTierra.disabled = true;

	let sectionOcultarReinicio =document.getElementById('reiniciar');
	sectionOcultarReinicio.style.display = 'block';

}
function reiniciarJuego(){
	location.reload();
}

function aleatorio(min, max){
	return Math.floor(Math.random()*(max-min+1)+min);
}

window.addEventListener('load', iniciarJuego);
