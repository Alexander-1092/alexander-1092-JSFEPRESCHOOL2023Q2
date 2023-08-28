const checkboxWinter = document.getElementById('input-winter')
const checkboxSpring = document.getElementById('input-spring')
const checkboxSummer = document.getElementById('input-summer')
const checkboxAutumn = document.getElementById('input-autumn')

const labelWinter = document.getElementById('label-winter')
const labelspring = document.getElementById('label-spring')
const labelSummer = document.getElementById('label-summer')
const labelAutumn = document.getElementById('label-autumn')


function checkCheckboxWinter(){
	if (checkboxWinter.checked) {
		labelspring.classList.remove('open')
		labelSummer.classList.remove('open')
		labelAutumn.classList.remove('open')
		labelWinter.classList.add('open')
	}
}

checkboxWinter.addEventListener('change', function(){
	checkCheckboxWinter()
})

function checkCheckboxSpring(){
	if (checkboxSpring.checked) {
		labelSummer.classList.remove('open')
		labelAutumn.classList.remove('open')
		labelWinter.classList.remove('open')
		labelspring.classList.add('open')
	}
}

checkboxSpring.addEventListener('change', function(){
	checkCheckboxSpring()
})

function checkCheckboxSummer(){
	if (checkboxSummer.checked) {
		labelAutumn.classList.remove('open')
		labelWinter.classList.remove('open')
		labelspring.classList.remove('open')
		labelSummer.classList.add('open')
	}
}

checkboxSummer.addEventListener('change', function(){
	checkCheckboxSummer()
})

function checkCheckboxAutumn(){
	if (checkboxAutumn.checked) {
		labelWinter.classList.remove('open')
		labelspring.classList.remove('open')
		labelSummer.classList.remove('open')
		labelAutumn.classList.add('open')
	}
}

checkboxAutumn.addEventListener('change', function(){
	checkCheckboxAutumn()
})

checkCheckboxWinter()


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

const showFormRegister = profilLink.addEventListener('click', () => {
	modalRegister.classList.add('modal-register-active')
})

const closeModal = document.querySelector('.close-modal')


const closeFormRegistr = closeModal.addEventListener('click', () =>{
	modalRegister.classList.remove('modal-register-active')
})