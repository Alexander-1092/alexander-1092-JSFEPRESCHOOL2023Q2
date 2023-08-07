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
	`Вёрстка валидная +10 \n 
	Вёрстка семантическая (header, main, footer +2, 6 секций + 2, олько один заголовок <h1> +2, 5 заголовков <h2> + 2, один элемент <nav> + 2, два списка ul > li > a + 2, 7 кнопок + 2, 2 инпута + 2 ) + 16  \n
	Вёрстка соответствует макету +54 \n
	header - между меню 30px, являются якорями, эффект hover и cursor pointer, от меню до иконки 40px, h1 +8 \n
	welcome +4
	about - добавлены все картинки, кнопка 26px, видимая часть 16px (расстояние между 10px), cursor:pointer + 6 \n
	Favorites - кнопки сделаны при помощи label и input, область 5px, все картинки добавлены кнопки рабочие, кнопка buy меняет цвет, own - disabled + 8 \n
	CoffeShop + 6 \n
	Contacts - карта есть, цифры - ссылки, и сслыка на почту + 6 \n
	LibraryCard - форма с полями есть, ограничения по вводу есть, кнопки плавно меняют цвет, иконки модального окна в папке +8 \n
	footer - фдресс ссылка, иконки ссылки мое имя ссылка на гитхаб +8 \n
	Общие требования к верстке +20: \n
	использованы флексы и гриды +2\n
	страница по центру +2 \n
	иконки добавлены в формате .svg +2 \n
	изображения добавлены в формате .jpg (.jpeg) или .png +2 \n
	есть favicon +2\n
	плавная прокрутка по якорям +2 \n
	в футере название ссылки Username заменено и ведет на GitHub студента +2 \n
	в футере ссылка The Rolling Scopes School ведет на страницу курса +2 \n
	интерактивность элементов согласно макету +2 \n
	изменение внешнего вида элемента при наведении и клике не влияет на соседние элементы +2. \n
	100/100`
)

const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav-list');


burger.addEventListener('click', () => {
	burger.classList.toggle('active')
	menu.classList.toggle('active')
})