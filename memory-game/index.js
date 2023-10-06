//path to pictures
const listOpenCard = [
	'./assets/img/feature.jpg',
	'./assets/img/felix.jpg',
	'./assets/img/gyl.jpg',
	'./assets/img/kalcifer.jpg',
	'./assets/img/meliodos.jpg',
	'./assets/img/nacima.jpg',
	'./assets/img/nagotora.jpg',
	'./assets/img/onydjyki.jpg',
	'./assets/img/saitama.jpg',
	'./assets/img/Overlord_Second_Season_TV_2_767244776desctop.webp'
]
//

const cardOpen = document.querySelectorAll('.card-open')
const card = document.querySelectorAll('.card')
const boxCard = document.querySelector('.box-card')
const randomNumOne = []
const randomNumTwo = []

//we get two arrays of random numbers
const getArrRandomNum = (arr) => {
	while (arr.length != 10) {
		let num = (Math.random() * 10).toFixed()
		if (!arr.includes(num) && arr.length < 10 && num < 10) {
			arr.push(num)
		}
	}
}

getArrRandomNum(randomNumOne)
getArrRandomNum(randomNumTwo)
//

//Combining arrays
const rezult = [...randomNumOne, ...randomNumTwo]
//

//assigning pictures to the matrix
const distributeCards = () => {
	for (let index = 0; index < rezult.length; index++) {
		cardOpen[index].src = listOpenCard[rezult[index]]
	}
}

distributeCards()
//

let counter = 0
let OpenCardOne = ''
let cardOne = ''


boxCard.addEventListener('click', (event) => {
	event.target.classList.add('card-open-show')
	if (event.target.className !== 'card-open card-open-show'){
		if (counter % 2 !== 0) {
			if (event.target.nextElementSibling.src === OpenCardOne.src){
			} else {
				setTimeout(removeCard, 1000, cardOne, event)
			}
		} 
		cardOne = event.target
		OpenCardOne = event.target.nextElementSibling
		counter++
	}
})


function removeCard (cardOne, event) {
	cardOne.classList.remove('card-open-show')
	event.target.classList.remove('card-open-show')
}