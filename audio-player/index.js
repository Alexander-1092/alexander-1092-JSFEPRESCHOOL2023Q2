const audio = document.querySelector('audio');
const playBtn = document.querySelector('.play-btn');
const picPlay = document.querySelector('.pic-play')
const picStop = document.querySelector('.pic-stop')
const picNext = document.querySelector('.pic-btn-next')
const picPrev = document.querySelector('.pic-btn-prev')
const boxBtn = document.querySelector('.box-btn')
const covers = document.querySelector('.covers')


let playNum = 0

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

////btn plae and stop
isPlay = false

function playAudio() {

	if (isPlay === false) {
		console.log(audio.duration)
		audio.currentTime = 0;
		listenListSong()
		showCoverSong()
		ShowPicBtn()
  	audio.play();
		isPlay = true
	} else {	
		pauseAudio()
		ShowPicBtnStop()
		isPlay = false
	}
}


function pauseAudio() {
  audio.pause();
}


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
	if (isPlay === true) {isPlay = false; playAudio();
	} else {isPlay = false; ShowPicBtn();	playAudio();
	}
})

picPrev.addEventListener('click', () => {
	prevSong(); 
	if (isPlay === true) {isPlay = false; playAudio();
	} else {isPlay = false; playAudio();
	}
})


playBtn.addEventListener('click', () => {playAudio()});

pauseBtn.addEventListener('click', () => {pauseAudio()});

function listenListSong() {
	audio.setAttribute('src', listSongs[playNum])
}

function showCoverSong() {
	covers.setAttribute('src', coversForSongs[playNum])
}