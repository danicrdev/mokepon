let ataqueJugador
let ataqueEnemigo
let resultado


function iniciarJuego(){
	let botonMascotaJugador = document.getElementById('boton-mascota')
	botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
	
	let botonAgua = document.getElementById('boton-agua')
	botonAgua.addEventListener('click', ataqueAgua)
	let botonFuego = document.getElementById('boton-fuego')
	botonFuego.addEventListener('click', ataqueFuego)
	let botonTierra = document.getElementById('boton-tierra')
	botonTierra.addEventListener('click', ataqueTierra)
}

function seleccionarMascotaJugador(){
	let inputHipodogue = document.getElementById('hipodogue')
	let inputCapipepo = document.getElementById('capipepo')
	let inputRatigueya = document.getElementById('ratigueya')
	let spanMascotaJugador = document.getElementById('mascota-jugador')
	
	if(inputHipodogue.checked){
		spanMascotaJugador.innerHTML = "Hipodogue"
	}else if(inputCapipepo.checked){
		spanMascotaJugador.innerHTML = "Capipepo"
	}else if(inputRatigueya.checked){
		spanMascotaJugador.innerHTML = "Ratigueya"
	}else{
		alert('Porfavor selecciona algún animal')
	}
	seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
	let spanMascotaEnemigo = document.getElementById('mascota-oponente')
	let mascotaAleatoria = aleatorio(1,3)
	
	if (mascotaAleatoria == 1){
		spanMascotaEnemigo.innerHTML = 'Hipodogue'
	}else if(mascotaAleatoria == 2){
		spanMascotaEnemigo.innerHTML = 'Capipepo'
	}else{
		spanMascotaEnemigo.innerHTML = 'Ratigueya'
	}
}

function ataqueAgua(){
	ataqueJugador = 'Agua'
	ataqueAleatorioEnemigo()
}
function ataqueFuego(){
	ataqueJugador = 'Fuego'
	ataqueAleatorioEnemigo()
}
function ataqueTierra(){
	ataqueJugador = 'Tierra'
	ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
	let ataqueAleatorio = aleatorio(1, 3)
	
	if (ataqueAleatorio == 1){
		ataqueEnemigo = 'Agua'
	} else if(ataqueAleatorio == 2){
		ataqueEnemigo = 'Fuego'
	}else{
		ataqueEnemigo = 'Tierra'
	}
	resultadoCombate()
}

function resultadoCombate(){ 
	if(ataqueJugador == ataqueEnemigo){
		resultado = 'Empate'
	}else if((ataqueJugador=='Agua' &&  ataqueEnemigo=='Fuego')||(ataqueJugador=='Fuego' &&  ataqueEnemigo=='Tierra')||(ataqueJugador=='Tierra' &&  ataqueEnemigo=='Agua')){
		resultado = 'Ganaste'
	} else{
		resultado = 'Perdiste'
	}	
	mensaje()
}

function mensaje(){
	let section = document.getElementById('mensaje')
	let parrafo = document.createElement('p')
	parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador +', y el enemigo atacó con ' + ataqueEnemigo +'.'+ resultado
	section.appendChild(parrafo)
} 

function aleatorio(min, max){
	return Math.floor(Math.random()*(max-min+1)+min)
}

window.addEventListener('load', iniciarJuego)