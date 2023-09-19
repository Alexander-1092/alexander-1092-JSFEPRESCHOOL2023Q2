const audio = document.querySelector('audio');
const playBtn = document.querySelector('.play-btn');
const picPlay = document.querySelector('.pic-play')
const picStop = document.querySelector('.pic-stop')

////btn plae and stop
isPlay = false

function playAudio() {
	if (isPlay === false) {
		audio.currentTime = 0;
		ShowPicBtn()
  	audio.play();
		isPlay = true
	} else {
		ShowPicBtn()
		pauseAudio()
		isPlay = false
	}
}

function pauseAudio() {
  audio.pause();
}

function ShowPicBtn() {
	picPlay.classList.toggle('pic-player-inactive')
	picStop.classList.toggle('pic-player-active')
}


playBtn.addEventListener('click', () => {
	playAudio()
});
pauseBtn.addEventListener('click', () => {
	pauseAudio()
});



////