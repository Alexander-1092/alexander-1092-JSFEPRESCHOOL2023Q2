const btn = document.querySelector('.btn')
const input = document.querySelector('.search')
const picBox = document.querySelector('.pic-box')

let searchWord = 'winter'

async function GetPic() {
	const url = `https://api.unsplash.com/search/photos?query=${searchWord}&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`
	try {
		const response = await fetch(url)
		const data = await response.json()
		for (let index = 0; index < 10; index++) {
			let link = String(data.results[index].urls.raw)
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
