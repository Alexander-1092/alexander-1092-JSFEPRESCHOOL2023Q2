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

