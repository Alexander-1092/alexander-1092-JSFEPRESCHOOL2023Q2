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



////btn plae and stop
isPlay = false

function playAudio() {
	setInterval(() => showCounerTime(), 1000);
	if (isPlay === false) {
		// audio.currentTime = 0;
		scrool()
		listenListSong()
		showCoverSong()
		showNameSing()
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

picStop.addEventListener('click', () => {
	pauseAudio()
});


function listenListSong() {
	audio.setAttribute('src', listSongs[playNum])
}

function showCoverSong() {
	covers.setAttribute('src', coversForSongs[playNum])
}

function songProgress() {
	console.log(audio.duration)
	trackProgress.setAttribute('max', audio.duration)
	trackProgress.setAttribute('value', audio.currentTime)
}


const showCounerTime = ()=> timeCounter.innerHTML = `<div class="total-time">${Math.floor(audio.currentTime)}</div>`

function scrool() {
	totalTime.innerHTML = `<div class="time-Couneter">0${Math.floor(audio.duration)
		.toString().slice(0,1)}:${Math.floor(audio.duration).toString().slice(1)}</div>`
	
	timerId = setInterval(() => songProgress(), 1000);
	// setTimeout(() => { clearInterval(timerId); console.log('stop'); }, audio.duration * 100);
}


function showNameSing() {
	nameSing.innerHTML = nameSingsList[playNum]
}

trackProgress.addEventListener('change', (event)=> {
	audio.currentTime = trackProgress.value
})