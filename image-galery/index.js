const btn = document.querySelector('.btn')
const input = document.querySelector('.search')
const picBox = document.querySelector('.pic-box')
const mainPic = document.querySelector('.main-pic')
const showPic = document.querySelector('.show-pic')
const container = document.querySelector('.wrapper')
const picClose = document.querySelector('.pic-close')


let searchWord = 'winter'

async function GetPic() {
	const url = `https://api.unsplash.com/search/photos?query=${searchWord}&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`
	try {
		const response = await fetch(url)
		const data = await response.json()
		console.log(data)
		for (let index = 0; index < 10; index++) {
			let link = String(data.results[index].urls.regular)
			document.querySelectorAll('.pic')[index].src = link	
		}
	} catch (error) {
		console.log(error)
	}
}

btn.addEventListener('click', ()=> {
	searchWord = input.value
	GetPic()
})


for (let index = 0; index < 10; index++) {
	let photo = document.createElement('a')
	photo.innerHTML = `<img src="" alt="logo" class="pic">`
	picBox.appendChild(photo)
}


picBox.addEventListener('click', (event) => {
	container.classList.add('wrapper-inactive')
	showPic.classList.add('show-pic-active')
	mainPic.classList.add('main-pic-active')
	picClose.classList.add('pic-close-active')
	mainPic.src = event.target.src
})


picClose.addEventListener('click', (e) => {
	container.classList.remove('wrapper-inactive')
	showPic.classList.remove('show-pic-active')
	mainPic.classList.remove('main-pic-active')
	picClose.classList.remove('pic-close-active')
	mainPic.src = ''
})