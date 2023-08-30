const inputBox = document.querySelector('.input-box')
const labelBox = document.querySelector('.label-box')

inputBox.addEventListener('click', (event) => {
	const arraySeason = event.target.parentNode.className

		Array.from(labelBox.children).forEach(element => {
			element.childNodes[1].classList.remove('books-box-opacity')

		if (arraySeason !== 'favorites-moduls') {
			element.classList.remove('open')}
		if (arraySeason.slice(6) === element.className.slice(6, 12)) {	
			element.classList.add('open')
		}
			
	})
})

document.querySelector('.input-winter').addEventListener('change', (event) =>{
	document.querySelector('.text-label-winter').classList.add('book-bold')
	document.querySelector('.text-label-spring').classList.remove('book-bold')
	document.querySelector('.text-label-summer').classList.remove('book-bold')
	document.querySelector('.text-label-autumn').classList.remove('book-bold')
}) 

document.querySelector('.input-spring').addEventListener('change', (event) =>{
	document.querySelector('.text-label-spring').classList.add('book-bold')
	document.querySelector('.text-label-winter').classList.remove('book-bold')
	document.querySelector('.text-label-summer').classList.remove('book-bold')
	document.querySelector('.text-label-autumn').classList.remove('book-bold')
}) 

document.querySelector('.input-summer').addEventListener('change', (event) =>{
	document.querySelector('.text-label-summer').classList.add('book-bold')
	document.querySelector('.text-label-winter').classList.remove('book-bold')
	document.querySelector('.text-label-spring').classList.remove('book-bold')
	document.querySelector('.text-label-autumn').classList.remove('book-bold')
}) 

document.querySelector('.input-autumn').addEventListener('change', (event) =>{
	document.querySelector('.text-label-autumn').classList.add('book-bold')
	document.querySelector('.text-label-winter').classList.remove('book-bold')
	document.querySelector('.text-label-spring').classList.remove('book-bold')
	document.querySelector('.text-label-summer').classList.remove('book-bold')
}) 






const preventDigits = (sender) => {
	sender.value = sender.value.replace(/\d/g, "")
}

const preventLetters = (sender) => {
	sender.value = sender.value.replace(/[a-z]/, "").replace(/[A-Z]/, "").replace(/[*,_,&,^,%,$,#,@,!,<,>,?,/]/, "")
}



const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav-list');
const link = document.querySelector('.nav-menu');


burger.addEventListener('click', () => {
	burger.classList.toggle('active')
	menu.classList.toggle('active')
})


link.addEventListener('click', () => {
	menu.classList.toggle('active')
})

window.addEventListener('click', (event) => {
	if (event.target !== burger) {
		menu.classList.remove('active')
		burger.classList.remove('active')
	}
})

const btnNext = document.querySelector('.arrowRight')
const btnPrew = document.querySelector('.arrow-prew')
const slide = document.querySelector('.slide')

const sliderDots = document.querySelector('.slider-dots')

let size = 0

btnNext.addEventListener('click', () => {
	
	if (size >= 1800) {
	} else {
		size = size + 470
	}
	slide.style.right = size + 'px'
	
	if (size < 470) {sliderDots.children[0].classList.add('dot-Active')}
	else if (size === 470) {
		sliderDots.children[0].classList.remove('dot-Active')
		sliderDots.children[1].classList.add('dot-Active')
	}
	else if (size === 940) {
		sliderDots.children[1].classList.remove('dot-Active')
		sliderDots.children[2].classList.add('dot-Active')
	} else if (size === 1410) {
		sliderDots.children[2].classList.remove('dot-Active')
		sliderDots.children[3].classList.add('dot-Active')
	} else if (size === 1880) {
		sliderDots.children[3].classList.remove('dot-Active')
		sliderDots.children[4].classList.add('dot-Active')
	}
})


btnPrew.addEventListener('click', () => {
	if (size < 470) {sliderDots.children[0].classList.add('dot-Active')}
	else if (size === 470) {
		sliderDots.children[1].classList.remove('dot-Active')
		sliderDots.children[0].classList.add('dot-Active')
	}
	else if (size === 940) {
		sliderDots.children[2].classList.remove('dot-Active')
		sliderDots.children[1].classList.add('dot-Active')
	} else if (size === 1410) {
		sliderDots.children[3].classList.remove('dot-Active')
		sliderDots.children[2].classList.add('dot-Active')
	} else if (size === 1880) {
		sliderDots.children[4].classList.remove('dot-Active')
		sliderDots.children[3].classList.add('dot-Active')
	}

	if (size < 450) {
	} else {
		size = size - 470
	}
	slide.style.right = size + 'px'
})

const WidthsliderContainer = document.querySelector('.slider-wrapper').clientWidth


sliderDots.addEventListener('click', (event) => {
	for (let index = 0; index < sliderDots.children.length; index++) {
		sliderDots.children[index].classList.remove('dot-Active')
	}

	if ( WidthsliderContainer > 940) {
		if (event.target.className === 'slider-dot1 dots') {
			sliderDots.children[0].classList.add('dot-Active')
			size = 0
		} else if (event.target.className === 'slider-dot2 dots') {
			sliderDots.children[1].classList.add('dot-Active')
			size = 470
		} else if (event.target.className === 'slider-dot3 dots') {
			sliderDots.children[2].classList.add('dot-Active')
			size = 940
		} else if (event.target.className === 'slider-dot4 dots') {
			sliderDots.children[3].classList.add('dot-Active')
			size = 940
		} else if (event.target.className === 'slider-dot5 dots') {
			sliderDots.children[4].classList.add('dot-Active')
			size = 940
		}
	} else if (WidthsliderContainer > 450) {
		if (event.target.className === 'slider-dot1 dots') {
			sliderDots.children[0].classList.add('dot-Active')
			size = 0
		} else if (event.target.className === 'slider-dot2 dots') {
			sliderDots.children[1].classList.add('dot-Active')
			size = 470
		} else if (event.target.className === 'slider-dot3 dots') {
			sliderDots.children[2].classList.add('dot-Active')
			size = 940
		} else if (event.target.className === 'slider-dot4 dots') {
			sliderDots.children[3].classList.add('dot-Active')
			size = 1410
		} else if (event.target.className === 'slider-dot5 dots') {
			sliderDots.children[4].classList.add('dot-Active')
			size = 1410
		}
	} else if (WidthsliderContainer <= 450) {
		if (event.target.className === 'slider-dot1 dots') {
			sliderDots.children[0].classList.add('dot-Active')
			size = 0
		} else if (event.target.className === 'slider-dot2 dots') {
			sliderDots.children[1].classList.add('dot-Active')
			size = 470
		} else if (event.target.className === 'slider-dot3 dots') {
			sliderDots.children[2].classList.add('dot-Active')
			size = 940
		} else if (event.target.className === 'slider-dot4 dots') {
			sliderDots.children[3].classList.add('dot-Active')
			size = 1410
		} else if (event.target.className === 'slider-dot5 dots') {
			sliderDots.children[4].classList.add('dot-Active')
			size = 1880
		}
	}

	slide.style.right = size + 'px'
})


const imgProfil = document.querySelector('.img-profil')
const profilModul = document.querySelector('.profil-modal')

const ShowProfilModal = imgProfil.addEventListener('click', (event) => {
	profilModul.classList.toggle('profil-modal-active')
})

window.addEventListener('click', (event) => {
	if (event.target.className !== 'img-pic') {
		profilModul.classList.remove('profil-modal-active')
	}
})

const profilLink = document.querySelector('.profil-registr')
const modalRegister = document.querySelector('.modal-register')
const wrapper = document.querySelector('.wrapper')

const showFormRegister = profilLink.addEventListener('click', () => {
	modalRegister.classList.add('modal-register-active')
	wrapper.classList.add('wrapper-inactive')
	document.body.classList.add('body-hidden')
})

const closeModal = document.querySelector('.close-modal')


const closeFormRegistr = closeModal.addEventListener('click', () =>{
	modalRegister.classList.remove('modal-register-active')
	wrapper.classList.remove('wrapper-inactive')
	document.body.classList.remove('body-hidden')
})


window.addEventListener('click', (event) => {
	if (event.target.className === 'welcome-body' 
	|| event.target.className === 'about-body'
	|| event.target.className === 'header-body') {
		modalRegister.classList.remove('modal-register-active')
		wrapper.classList.remove('wrapper-inactive')
		document.body.classList.remove('body-hidden')
	}
})



const btnForm = document.querySelector('.form-register')
let countUser = 1

const showDataUser = btnForm.addEventListener('submit', () => {
	let userData = {
		name: document.getElementById('form-register-name').value,
		lastName: document.getElementById('form-register-lastName').value,
		email: document.getElementById('form-register-email').value,
		password: document.getElementById('form-register-password').value,
	}
	let nameKeyUser = 'user' + countUser.toString()
	localStorage.setItem(nameKeyUser, JSON.stringify(userData))
	countUser++
	modalRegister.classList.remove('modal-register-active')
})



