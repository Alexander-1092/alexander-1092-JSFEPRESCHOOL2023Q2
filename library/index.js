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

btnNext.addEventListener('click', (event) => {
	
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


btnPrew.addEventListener('click', (event) => {
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


