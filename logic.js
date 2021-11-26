
const btn = document.querySelector('#enviar');
const nombre = document.querySelector('#nombre')
const email = document.querySelector('#email')
const mensaje = document.querySelector('#mensaje')
const form = document.querySelector('#formulario')
// MENU IN RESPOSIVE
const menuIcon = document.querySelector(".navbar");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".link");


menuIcon.addEventListener("click", showMenu);

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", showMenu);
}

function showMenu() {
  menu.classList.toggle("toggleMenu");
}

// CONTACT
const er = /^((^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

EventListener();
function EventListener() {
	document.addEventListener('DOMContentLoaded', iniciarApp);

	nombre.addEventListener('blur', validarCampo)
	email.addEventListener('blur', validarCampo)
	mensaje.addEventListener('blur', validarCampo)
}


function iniciarApp() {
	btn.disabled = true;
	btn.classList.add('not-allowed', 'opacity-50')
}


function validarCampo(e) {
	if (e.target.value.length > 0) {
		//Elimina los errores
		const error = document.querySelector('p.error')
		if (error) {
			error.remove();
		}
		e.target.classList.remove('border', 'border-danger')
		e.target.classList.add('border', 'border-success')


	} else {
		e.target.classList.remove('border', 'border-success')
		e.target.classList.add('border', 'border-danger')
		mostrarError('Todos los campos son obligatorios')
	}

	if (e.target.type === 'email') {
		if (er.test(e.target.value)) {
			e.target.classList.remove('border', 'border-danger')
			e.target.classList.add('border', 'border-success')
			const error = document.querySelector('p.error')
			if (error) {
				error.remove();
			}

		} else {
			mostrarError('El email no es valido')
			e.target.classList.remove('border', 'border-success')
			e.target.classList.add('border', 'border-danger')

		}
	}

	if (er.test(email.value) && email.value != "" && mensaje.value != "") {
		btn.disabled = false;
		btn.classList.remove('not-allowed', 'opacity-50')

	} else {
		btn.disabled = true;
		btn.classList.add('not-allowed', 'opacity-50')
	}

}

function mostrarError(mensaje) {
	const mensajeError = document.createElement('p');
	mensajeError.textContent = mensaje;
	mensajeError.classList.add('text-center', 'border', 'border-danger', 'p-3', 'mt-2', 'text-danger', 'error')

	const errores = document.querySelectorAll('.error')
	if (errores.length === 0) {
		form.appendChild(mensajeError)
	}

}

// TYPED
const typed = new Typed(".typed", {
  strings: [
    
    '<i class="text-typed">Cursos de capacitación</i>',
	'<i class="text-typed">Habilitar Ips</i>',
	'<i class="text-typed">PAMEC</i>',
   
  ],
  typeSpeed: 75, 
  startDelay: 300, 
  backSpeed: 75,
  smartBackspace: true, 
  shuffle: false, 
  backDelay: 1500, 
  loop: true, 
  loopCount: false, 
  showCursor: true, 
  cursorChar: '<i class="cursosChar">|</i>', 
  contentType: "html", 
});


// Set the date we're counting down to
var countDownDate = new Date("Nov 26, 2021 23:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
