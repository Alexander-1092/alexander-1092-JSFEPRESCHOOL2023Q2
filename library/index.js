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