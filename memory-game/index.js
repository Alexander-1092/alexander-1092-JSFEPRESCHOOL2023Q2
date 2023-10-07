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
const btnNewGame = document.querySelector('.btn-new-game')
let randomNumOne = []
let randomNumTwo = []

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
const rezult = () => {
	return [...randomNumOne, ...randomNumTwo]
}

//

//assigning pictures to the matrix
const distributeCards = () => {
	for (let index = 0; index < rezult().length; index++) {
		cardOpen[index].src = listOpenCard[rezult()[index]]
	}
}

distributeCards()
//

let counter = 0
let OpenCardOne = ''
let cardOne = ''
let flag = true

boxCard.addEventListener('click', (event) => {
	if (flag === true) {
		event.target.classList.add('card-open-show')
		if (event.target.className !== 'card-open card-open-show'){
			if (counter % 2 !== 0) {
				if (event.target.nextElementSibling.src === OpenCardOne.src){
				} else {
					setTimeout(removeCard, 800, cardOne, event)
					flag = false
					setTimeout(topFlag, 1000)
				}		
			}
			winGame(getOpenCard())
			cardOne = event.target
			OpenCardOne = event.target.nextElementSibling
			counter++
			showCounter(counter)
		}
	}
})


const topFlag = () => {flag = true}

function removeCard (cardOne, event) {
	cardOne.classList.remove('card-open-show')
	event.target.classList.remove('card-open-show')
}

const score = document.querySelector('.score')

//show counter
const showCounter = (counter) => {
	score.textContent = `Score: ${counter}`
}
//

//modul for new game
btnNewGame.addEventListener('click', () => {
	delPic()
	randomNumOne = []
	randomNumTwo = []
	getArrRandomNum(randomNumOne)
	getArrRandomNum(randomNumTwo)
	counter = 0
	score.textContent = `Score: ${counter}`
	setTimeout(distributeCards, 500)
})


//del pic for new game
const delPic = () => {
	card.forEach(element => {
		element.classList.remove('card-open-show')
	})
}
//

//finish game
const getOpenCard = () => {
	let counterOpenCard = 0
	card.forEach(element => {
		if (element.className === 'card card-open-show'){
			counterOpenCard++
		}
	})
	return counterOpenCard
}

const winGame = (counterOpenCard) => {
	if (counterOpenCard === card.length) {
		alert('WIN!')
	}
}