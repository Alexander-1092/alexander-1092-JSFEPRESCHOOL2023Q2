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

console.log(
	`Вёрстка соответствует макету. Ширина экрана 768px +26 (есть небольшое расхождение с макетом, но в рамках 10px)\n 
	Ни на одном из разрешений до 640px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +12\n
	На ширине экрана 1024px реализовано адаптивное меню, расстояния от элементов соблюдены, плавность есть (не работают ссылки в адаптивной версии - 2) +10 \n

	100/100`
)

const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav-list');


burger.addEventListener('click', () => {
	burger.classList.toggle('active')
	menu.classList.toggle('active')
})