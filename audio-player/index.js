//
const listSongs = [
	'./assets/media/Nirvana_-_Smells_Like_Teen_Spirit_47829249.mp3',
	'./assets/media/Elvis Presley — JAILHOUSE ROCK.mp3',
	'./assets/media/Goombay-Dance-Band_-_Seven-Tears.mp3',
	'./assets/media/Frank_Sinatra_-_Strangers_in_the_Night_(musmore.com).mp3',
	'./assets/media/Little Richard - Tutti-Frutti.mp3'
]

const coversForSongs = [
	'./assets/img/Kobein.png',
	'./assets/img/Elvis.jpg',
	'./assets/img/Goombay_Dance_Band_Seven_Tears_single_cover.jpg',
	'./assets/img/sinatra.jpg',
	'./assets/img/little.jpg'
]

const nameSingsList = [
	'<div class="name-sing">Nirvana - Smells Like Teen Spirit</div>',
	'<div class="name-sing">Elvis Presley — JAILHOUSE ROCK</div>',
	'<div class="name-sing">Goombay-Dance-Band_-_Seven-Tears</div>',
	'<div class="name-sing">Frank_Sinatra_-_Strangers_in_the_Night</div>',
	'<div class="name-sing">Little Richard - Tutti-Frutti</div>'
]
//
const audio = document.querySelector('audio');
const playBtn = document.querySelector('.play-btn');
const picPlay = document.querySelector('.pic-play')
const picStop = document.querySelector('.pic-stop')
const picNext = document.querySelector('.pic-btn-next')
const picPrev = document.querySelector('.pic-btn-prev')
const boxBtn = document.querySelector('.box-btn')
const covers = document.querySelector('.covers')
const trackProgress = document.querySelector('.track-progress')
const timeCounter = document.querySelector('.time-Couneter')
const nameSing = document.querySelector('.name-sing')
const totalTime = document.querySelector('.total-time')
let playNum = 0
let isPlay = false
let timePause = 0

////base parameter
function playAudio() {
	setInterval(() => showCounterTime(), 1000);
	if (isPlay === false) {
		scrool()
		listenListSong()
		showCoverSong()
		showNameSing()
		ShowPicBtn()
  	audio.play();
		audio.currentTime = timePause
		isPlay = true
	} else {
		timePause = audio.currentTime
		pauseAudio()
		ShowPicBtnStop()
		isPlay = false
	}
}


function pauseAudio() {
  audio.pause();
}

//funct btn
function ShowPicBtn() {
	picPlay.classList.add('pic-player-inactive')
	picStop.classList.add('pic-player-active')
}

function ShowPicBtnStop() {
	picPlay.classList.remove('pic-player-inactive')
	picStop.classList.remove('pic-player-active')
}


function nextSong() {
	listSongs.length - 1 === playNum ? playNum = 0 : playNum++
}

function prevSong() {
	playNum === 0 ? playNum = listSongs.length - 1 : playNum--
}


picNext.addEventListener('click', () => {
	nextSong(); 
	if (isPlay === true) {isPlay = false; timePause = 0; playAudio();
	} else {isPlay = false; ShowPicBtn(); timePause = 0;	playAudio();
	}
})

picPrev.addEventListener('click', () => {
	prevSong(); 
	if (isPlay === true) {isPlay = false; timePause = 0; playAudio();
	} else {isPlay = false; timePause = 0; playAudio();}
})

playBtn.addEventListener('click', () => {playAudio()});

picStop.addEventListener('click', () => {pauseAudio()});
//

//change singl
function listenListSong() {audio.setAttribute('src', listSongs[playNum])}

//change pic for singl
function showCoverSong() {covers.setAttribute('src', coversForSongs[playNum])}

//change name singl
function showNameSing() {nameSing.innerHTML = nameSingsList[playNum]}



function songProgress() {
	if (audio.duration === audio.currentTime) {
		pauseAudio()
		ShowPicBtnStop()
		isPlay = false
	}
	showCounterTime()
	showTotalTime()
	trackProgress.setAttribute('max', audio.duration)
	trackProgress.value = audio.currentTime
}

trackProgress.addEventListener('change', () => {
	audio.currentTime = trackProgress.value
})


const showCounterTime = () => {
	let timeNow = Math.floor(audio.currentTime)
	let sec = 0
	let min = 0
	
	if (timeNow < 60) {
		sec = timeNow
	} else {
		min = Math.floor(timeNow / 60)
		sec = Math.floor(timeNow % 60)
	}
	if (sec < 10) {
		timeCounter.innerHTML = `<div class="total-time">0${min}:0${sec}</div>`
	} else {
		timeCounter.innerHTML = `<div class="total-time">0${min}:${sec}</div>`
	}

}

const showTotalTime = () => {
	let min = Math.floor(audio.duration / 60)
	let sec = Math.floor(audio.duration % 60)
	if (sec < 10) {
		totalTime.innerHTML = `<div class="time-Couneter">0${min}:0${sec}</div>`
	} else {
		totalTime.innerHTML = `<div class="time-Couneter">0${min}:${sec}</div>`
	}
}

function scrool() {
	timerId = setInterval(() => songProgress(), 1000);
}


