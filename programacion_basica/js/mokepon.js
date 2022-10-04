function iniciarJuego(){
	let botonMascotaJugador=document.getElementById('boton-mascota')
	botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
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
	let ataqueAleatorio = aleatorio(1,3)
	
	if (ataqueAleatorio == 1){
		spanMascotaEnemigo.innerHTML = 'Hipodogue'
	}else if(ataqueAleatorio == 2){
		spanMascotaEnemigo.innerHTML = 'Capipepo'
	}else{
		spanMascotaEnemigo.innerHTML = 'Ratigueya'
	}
}
function aleatorio(min, max){
	return Math.floor(Math.random()*(max-min+1)+min)
}

window.addEventListener('load', iniciarJuego)