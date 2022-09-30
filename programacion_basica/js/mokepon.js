function iniciarJuego(){
	let botonMascotaJugador=document.getElementById('boton-mascota')
	botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}
function seleccionarMascotaJugador(){
	if(document.getElementById('hipodogue').checked){
		alert('has seleciccionado a hipodogue')
	}else if(document.getElementById('capipepo').checked){
		alert('has seleciccionado a capipepo')
	}else if(document.getElementById('ratigueya').checked){
		alert('has seleciccionado a capipepo')
	}else{
		alert('Porfavor selecciona algún animal')
	}
}


window.addEventListener('load', iniciarJuego)