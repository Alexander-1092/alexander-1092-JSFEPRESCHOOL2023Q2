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

const listSong = [
	'./assets/music/X2Download.app - K-ON - No Thank You full (128 kbps).mp3',
	'./assets/music/gul.mp3',
	'./assets/music/kill.mp3',
	'./assets/music/red.mp3'
]

const cardOpen = document.querySelectorAll('.card-open')
const card = document.querySelectorAll('.card')
const boxCard = document.querySelector('.box-card')
const btnNewGame = document.querySelector('.btn-new-game')
const modulWin = document.querySelector('.modul-win')
const wrapper = document.querySelector('.wrapper')
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
	playSound()
	if (flag === true && event.target.className != 'box-card') {
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
	newGame()
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

///New game
const newGame = () => {
	playSoundNewGame()
	delPic()
	randomNumOne = []
	randomNumTwo = []
	getArrRandomNum(randomNumOne)
	getArrRandomNum(randomNumTwo)
	counter = 0
	showCounter(counter)
}




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
		playSoundWin()
		modulWin.classList.add('modul-win-open')
		wrapper.classList.add('wrapper-inactive')
	}
}

///Show modul win
const btnWin = document.querySelector('.btn-win')
const inputWin = document.querySelector('.input-win')
const scoreRecord = {}

//get data local str
function getDataLocal() {
	if (localStorage.getItem('scoreUser')){
		let dataUser = localStorage.getItem('scoreUser')
		let dataUserScore = JSON.parse(dataUser)
		for (const key in dataUserScore) {
			scoreRecord[key] = dataUserScore[key]
		}
	}
}
getDataLocal()


//post in record
btnWin.addEventListener('click', ()=> {
	if (inputWin.value != 0) {
		scoreRecord[inputWin.value] = counter
		localStorage.setItem('scoreUser', JSON.stringify(scoreRecord))
		modulWin.classList.remove('modul-win-open')
	}
	inputWin.value = ''
	getDataLocal()
	SortRecordList()
	openModulRec()
})
//

//Show record
const btnScore = document.querySelector('.btn-score')
const textRecord = document.querySelector('.list-record')
const btnRecord = document.querySelector('.btn-record')
const modulRecord = document.querySelector('.modul-record')

let record = document.querySelectorAll('.record')

btnScore.addEventListener('click', ()=> {
	openModulRec()
	SortRecordList()
})
//

///
btnRecord.addEventListener('click', () => {
	modulRecord.classList.remove('modul-record-open')
	wrapper.classList.remove('wrapper-inactive')
	// newGame()

})


const SortRecordList = () => {
	let dataUser = localStorage.getItem('scoreUser')
	let dataUserScore = JSON.parse(dataUser)
	
	let sortRecord = []
	for (const key in dataUserScore) {
		sortRecord.push([key, dataUserScore[key]])
	}
	sortRecord.sort(function(a, b) {
		return a[1] - b[1]
	})

	for (let index = 0; index < record.length; index++) {
		if (sortRecord[index]) {
			record[index].textContent = `${sortRecord[index][0]} - ${sortRecord[index][1]}`
		}
	}		
}
////

const openModulRec = () => {
	modulRecord.classList.add('modul-record-open')
	wrapper.classList.add('wrapper-inactive')
}




///player
const audio = document.querySelector('.audio');
const btnPlay = document.querySelector('.btn-play')
const lineStopSong = document.querySelector('.line-stop-song') 
let playNow = false

window.addEventListener('load', () => {
	lineStopSong.classList.add('line-active')
})

function playAudio() {
	lineStopSong.classList.remove('line-active')
  audio.currentTime = 0;
  audio.play();
}




function pauseAudio() {
	lineStopSong.classList.add('line-active')
  audio.pause();
}


btnPlay.addEventListener('click', ()=> {
	if (playNow === false) {
		playAudio()
		playNow = true
	} else {
		pauseAudio()
		playNow = false
	}
})


let counterSong = 1


const nextSong = () => {

	if (audio.currentTime === audio.duration) {
		audio.src = listSong[counterSong]
		playAudio()
		playNow = true
		counterSong++
	}
	if (counterSong >= listSong.length) {
		counterSong = 0
	}
}

setInterval(nextSong, 1000)
//

//sound card
const soundCard = document.querySelector('.sound-card')

function playSound() {
  soundCard.currentTime = 0;
  soundCard.play();
}

//sound win
const soundWin = document.querySelector('.sound-win')

function playSoundWin() {
  soundWin.currentTime = 0;
  soundWin.play();
}

//sounf new game
const soundNewGame = document.querySelector('.sound-new-game')

function playSoundNewGame() {
  soundNewGame.currentTime = 0;
  soundNewGame.play();
}