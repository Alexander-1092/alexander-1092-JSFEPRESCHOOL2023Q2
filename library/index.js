let userBaseData = {}

let govno = 0

const visitsCounter = document.querySelector('.visit-counter')
const bonusCounter = document.querySelector('.bonus-counter')
const BookCounter = document.querySelector('.book-counter')



const openRegistMenu = () => {
	modalRegister.classList.add('modal-register-active')
	wrapper.classList.add('wrapper-inactive')
	document.body.classList.add('body-hidden')
}

const openLoginMenu = () => {
	modalLogin.classList.add('modal-register-active')
	wrapper.classList.add('wrapper-inactive')
	document.body.classList.add('body-hidden')
}

//close modules when clicked outside of them
window.addEventListener('click', (event) => {
	if (event.target.parentNode.className != 'modal-register modal-register-active' 
	&&	event.target.parentNode.className != 'form-register'
	&& event.target.parentNode.className != 'get-box'
	&& event.target.parentNode.className != 'modal-header'
	&& event.target.parentNode.className != 'profil-modal'
	&& event.target.parentNode.className != 'modal-login modal-register-active'
	&& event.target.parentNode.className != 'body-hidden'
	&& event.target.parentNode.className != 'form-login'
	&& event.target.parentNode.className != 'img-profil'
	&& event.target.className != 'book-btn'
	&& event.target.className != 'profil-myprofil profil-text'
	&& event.target.parentNode.className != 'profil-Myregistr profil-modal-active'
	&& event.target.parentNode.className != 'modal-profil-box modal-profil-box-active'
	&& event.target.parentNode.className != 'modal-profil-inform'
	&& event.target.parentNode.className != 'modal-profile-card'
	&& event.target.parentNode.className != 'modal-profil-bonus-box'
	&& event.target.parentNode.className != 'modal-profil-books-box'
	&& event.target.parentNode.className != 'profile-list-book'
	&& event.target.parentNode.className != 'modal-profil-name'
	&& event.target.parentNode.className != 'modal-profile-header'
	&& event.target.parentNode.className != 'profile-footer-card'
	)	{
		modalRegister.classList.remove('modal-register-active')
		modalLogin.classList.remove('modal-register-active')
		wrapper.classList.remove('wrapper-inactive')
		document.body.classList.remove('body-hidden')
		profilRegistr.classList.remove('profil-modal-active')
		modalProfile.classList.remove('modal-profil-box-active')
	}
})
/////////

///////slider favorites
const inputBox = document.querySelector('.input-box')
const labelBox = document.querySelector('.label-box')

inputBox.addEventListener('click', (event) => {
	const arraySeason = event.target.parentNode.className

		Array.from(labelBox.children).forEach(element => {
			element.childNodes[1].classList.remove('books-box-opacity')

		if (arraySeason !== 'favorites-moduls') {
			element.classList.remove('open')}
		if (arraySeason.slice(6) === element.className.slice(6, 12)) {	
			element.classList.add('open')
		}
			
	})
})

document.querySelector('.input-winter').addEventListener('change', (event) =>{
	document.querySelector('.text-label-winter').classList.add('book-bold')
	document.querySelector('.text-label-spring').classList.remove('book-bold')
	document.querySelector('.text-label-summer').classList.remove('book-bold')
	document.querySelector('.text-label-autumn').classList.remove('book-bold')
}) 

document.querySelector('.input-spring').addEventListener('change', (event) =>{
	document.querySelector('.text-label-spring').classList.add('book-bold')
	document.querySelector('.text-label-winter').classList.remove('book-bold')
	document.querySelector('.text-label-summer').classList.remove('book-bold')
	document.querySelector('.text-label-autumn').classList.remove('book-bold')
}) 

document.querySelector('.input-summer').addEventListener('change', (event) =>{
	document.querySelector('.text-label-summer').classList.add('book-bold')
	document.querySelector('.text-label-winter').classList.remove('book-bold')
	document.querySelector('.text-label-spring').classList.remove('book-bold')
	document.querySelector('.text-label-autumn').classList.remove('book-bold')
}) 

document.querySelector('.input-autumn').addEventListener('change', (event) =>{
	document.querySelector('.text-label-autumn').classList.add('book-bold')
	document.querySelector('.text-label-winter').classList.remove('book-bold')
	document.querySelector('.text-label-spring').classList.remove('book-bold')
	document.querySelector('.text-label-summer').classList.remove('book-bold')
}) 
//======================//
////validator in card
const preventDigits = (sender) => {
	sender.value = sender.value.replace(/\d/g, "")
}

const preventLetters = (sender) => {
	sender.value = sender.value.replace(/[a-z]/, "").replace(/[A-Z]/, "").replace(/[*,_,&,^,%,$,#,@,!,<,>,?,/]/, "")
}
//////////////////

//burger menu
const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav-list');
const link = document.querySelector('.nav-menu');


burger.addEventListener('click', () => {
	burger.classList.toggle('active')
	menu.classList.toggle('active')
})


link.addEventListener('click', () => {
	menu.classList.toggle('active')
})

window.addEventListener('click', (event) => {
	if (event.target !== burger) {
		menu.classList.remove('active')
		burger.classList.remove('active')
	}
})
///////////////

//slider in about
const btnNext = document.querySelector('.arrowRight')
const btnPrew = document.querySelector('.arrow-prew')
const slide = document.querySelector('.slide')

const sliderDots = document.querySelector('.slider-dots')

let size = 0

btnNext.addEventListener('click', () => {
	
	if (size >= 1800) {
	} else {
		size = size + 470
	}
	slide.style.right = size + 'px'
	
	if (size < 470) {sliderDots.children[0].classList.add('dot-Active')}
	else if (size === 470) {
		sliderDots.children[0].classList.remove('dot-Active')
		sliderDots.children[1].classList.add('dot-Active')
	}
	else if (size === 940) {
		sliderDots.children[1].classList.remove('dot-Active')
		sliderDots.children[2].classList.add('dot-Active')
	} else if (size === 1410) {
		sliderDots.children[2].classList.remove('dot-Active')
		sliderDots.children[3].classList.add('dot-Active')
	} else if (size === 1880) {
		sliderDots.children[3].classList.remove('dot-Active')
		sliderDots.children[4].classList.add('dot-Active')
	}
})


btnPrew.addEventListener('click', () => {
	if (size < 470) {sliderDots.children[0].classList.add('dot-Active')}
	else if (size === 470) {
		sliderDots.children[1].classList.remove('dot-Active')
		sliderDots.children[0].classList.add('dot-Active')
	}
	else if (size === 940) {
		sliderDots.children[2].classList.remove('dot-Active')
		sliderDots.children[1].classList.add('dot-Active')
	} else if (size === 1410) {
		sliderDots.children[3].classList.remove('dot-Active')
		sliderDots.children[2].classList.add('dot-Active')
	} else if (size === 1880) {
		sliderDots.children[4].classList.remove('dot-Active')
		sliderDots.children[3].classList.add('dot-Active')
	}

	if (size < 450) {
	} else {
		size = size - 470
	}
	slide.style.right = size + 'px'
})

const WidthsliderContainer = document.querySelector('.slider-wrapper').clientWidth


sliderDots.addEventListener('click', (event) => {
	for (let index = 0; index < sliderDots.children.length; index++) {
		sliderDots.children[index].classList.remove('dot-Active')
	}

	if ( WidthsliderContainer > 940) {
		if (event.target.className === 'slider-dot1 dots') {
			sliderDots.children[0].classList.add('dot-Active')
			size = 0
		} else if (event.target.className === 'slider-dot2 dots') {
			sliderDots.children[1].classList.add('dot-Active')
			size = 470
		} else if (event.target.className === 'slider-dot3 dots') {
			sliderDots.children[2].classList.add('dot-Active')
			size = 940
		} else if (event.target.className === 'slider-dot4 dots') {
			sliderDots.children[3].classList.add('dot-Active')
			size = 940
		} else if (event.target.className === 'slider-dot5 dots') {
			sliderDots.children[4].classList.add('dot-Active')
			size = 940
		}
	} else if (WidthsliderContainer > 450) {
		if (event.target.className === 'slider-dot1 dots') {
			sliderDots.children[0].classList.add('dot-Active')
			size = 0
		} else if (event.target.className === 'slider-dot2 dots') {
			sliderDots.children[1].classList.add('dot-Active')
			size = 470
		} else if (event.target.className === 'slider-dot3 dots') {
			sliderDots.children[2].classList.add('dot-Active')
			size = 940
		} else if (event.target.className === 'slider-dot4 dots') {
			sliderDots.children[3].classList.add('dot-Active')
			size = 1410
		} else if (event.target.className === 'slider-dot5 dots') {
			sliderDots.children[4].classList.add('dot-Active')
			size = 1410
		}
	} else if (WidthsliderContainer <= 450) {
		if (event.target.className === 'slider-dot1 dots') {
			sliderDots.children[0].classList.add('dot-Active')
			size = 0
		} else if (event.target.className === 'slider-dot2 dots') {
			sliderDots.children[1].classList.add('dot-Active')
			size = 470
		} else if (event.target.className === 'slider-dot3 dots') {
			sliderDots.children[2].classList.add('dot-Active')
			size = 940
		} else if (event.target.className === 'slider-dot4 dots') {
			sliderDots.children[3].classList.add('dot-Active')
			size = 1410
		} else if (event.target.className === 'slider-dot5 dots') {
			sliderDots.children[4].classList.add('dot-Active')
			size = 1880
		}
	}

	slide.style.right = size + 'px'
})
////////////



const imgProfil = document.querySelector('.img-profil')
const profilModul = document.querySelector('.profil-modal')

const ShowProfilModal = imgProfil.addEventListener('click', (event) => {
	profilModul.classList.toggle('profil-modal-active')
})

window.addEventListener('click', (event) => {
	if (event.target.className !== 'img-pic') {
		profilModul.classList.remove('profil-modal-active')
	}
})

const profilLink = document.querySelector('.profil-registr')
const modalRegister = document.querySelector('.modal-register')
const wrapper = document.querySelector('.wrapper')

////open register
const showFormRegister = profilLink.addEventListener('click', () => {
	openRegistMenu()
})

const modalLogin = document.querySelector('.modal-login')
const underLoginLink = document.querySelector('.profil-login')

///open login
const showFormLogin = underLoginLink.addEventListener('click', () => {openLoginMenu()})


const closeModal = document.querySelector('.close-modal')

const closeFormRegistr = closeModal.addEventListener('click', () =>{
	modalRegister.classList.remove('modal-register-active')
	wrapper.classList.remove('wrapper-inactive')
	document.body.classList.remove('body-hidden')
})


const closeLogin = document.querySelector('.close-login')

const closeFormLogin = closeLogin.addEventListener('click', () =>{
	modalLogin.classList.remove('modal-register-active')
	wrapper.classList.remove('wrapper-inactive')
	document.body.classList.remove('body-hidden')
})


/// open modul register
const btnForm = document.querySelector('.form-register')

const useAvatar = document.querySelector('.user-avatar')
const imgPic = document.querySelector('.img-pic')

let CardNumber = Math.random().toFixed(9) * 10**9

const showDataUser = btnForm.addEventListener('submit', () => {	
	userBaseData.name = document.getElementById('form-register-name').value
	userBaseData.lastName = document.getElementById('form-register-lastName').value
	userBaseData.email = document.getElementById('form-register-email').value
	userBaseData.password = document.getElementById('form-register-password').value
	userBaseData.cardNumber = String(CardNumber)
	userBaseData.vizites = 1
	userBaseData.counterBook = 0

	let userIdentif = userBaseData.name + userBaseData.password

	localStorage.setItem(userIdentif, JSON.stringify(userBaseData))
	modalRegister.classList.remove('modal-register-active')
	wrapper.classList.remove('wrapper-inactive')
	document.body.classList.remove('body-hidden')

	useAvatar.classList.add('user-avatar-active')
	useAvatar.innerHTML = userBaseData.name[0] + userBaseData.lastName[0]


	useAvatar.title = userBaseData.name + ' ' + userBaseData.lastName
	imgPic.classList.add('img-pic-inactive')

	visitsCounter.innerHTML = userBaseData.vizites

	BookCounter.innerHTML = userBaseData.counterBook

	
})



/// open login
const profilRegistr = document.querySelector('.profil-Myregistr')
const profilNumberCard = document.querySelector('.profil-number-card')


const showMyProfil = useAvatar.addEventListener('click', () => {
	profilModul.classList.remove('profil-modal-active')
	profilRegistr.classList.toggle('profil-modal-active')
	let loginPlusPassword = String(document.getElementById('form-login-name').value + document.getElementById('form-login-password').value)
	let parsCard = JSON.parse(localStorage.getItem(loginPlusPassword))
	profilNumberCard.innerHTML = String(parsCard.cardNumber)
	
})


const formLogin = document.querySelector('.form-login')

const indetifLoginAndPassword = formLogin.addEventListener('submit', () => {
	userBaseData.name = document.getElementById('form-login-name').value
	userBaseData.password = document.getElementById('form-login-password').value

	let = dataForUserBaseData = JSON.parse(localStorage.getItem(userBaseData.name + userBaseData.password))	
	let identifKey = String(userBaseData.name + userBaseData.password)
	userBaseData.cardNumber = dataForUserBaseData.cardNumber
	userBaseData.email = dataForUserBaseData.email
	userBaseData.lastName = dataForUserBaseData.lastName
	userBaseData.vizites = dataForUserBaseData.vizites
	userBaseData.vizites = userBaseData.vizites + 1
	userBaseData.counterBook = 0



	localStorage.setItem(identifKey, JSON.stringify(userBaseData))
	if (localStorage.getItem(identifKey)) {
		modalLogin.classList.remove('modal-register-active')
		wrapper.classList.remove('wrapper-inactive')
		document.body.classList.remove('body-hidden')

		let UserIndefData = JSON.parse(localStorage.getItem(identifKey))
		useAvatar.classList.add('user-avatar-active')
		useAvatar.innerHTML = UserIndefData.name[0] + UserIndefData.lastName[0]
		useAvatar.title = UserIndefData.name + ' ' + UserIndefData.lastName
		imgPic.classList.add('img-pic-inactive')
	} else {
		alert('password or logs are incorrect')
	}
	
	visitsCounter.innerHTML = userBaseData.vizites

	console.log(userBaseData.counterBook)
	BookCounter.innerHTML = userBaseData.counterBook

})
/////



const profilLogOut = document.querySelector('.profil-log-out')

const exitProfile = profilLogOut.addEventListener('click', () => {
	useAvatar.classList.remove('user-avatar-active')
	imgPic.classList.remove('img-pic-inactive')
	profilRegistr.classList.remove('profil-modal-active')
})

/// for btn Sign Up
const getSignUp = document.querySelector('.get-sign-up')
getSignUp.addEventListener('click', () => {
	openRegistMenu()
})


const getLogin = document.querySelector('.get-login')
getLogin.addEventListener('click', () => {openLoginMenu()})

///btn buy
labelBox.addEventListener('click', (event) => {
	console.log(event.target.innerHTML)
	if(useAvatar.className != 'user-avatar user-avatar-active') {
		openLoginMenu()
	}
	else {
		if(event.target.innerHTML === 'Own'){
			userBaseData.counterBook = userBaseData.counterBook - 1
			event.target.innerHTML = 'Buy'
			localStorage.setItem(userBaseData.name + userBaseData.password, JSON.stringify(userBaseData))
		} else {
		userBaseData.counterBook = userBaseData.counterBook + 1
		event.target.innerHTML = 'Own'
		// event.target.setAttribute('disabled', 'disabled')
		localStorage.setItem(userBaseData.name + userBaseData.password, JSON.stringify(userBaseData))
		}
		
	}
})



//// open modul my-profile
	const profilMyprofil = document.querySelector('.profil-myprofil')
	const modalProfile = document.querySelector('.modal-profil-box')
	const inicial = document.querySelector('.inicial')
	const nameAndSurname = document.querySelector('.name-and-surname')

	const ShowmodulMyProfil = profilMyprofil.addEventListener('click', (event) => {

		let identifKey = String(userBaseData.name + userBaseData.password)
		let userIndefData = JSON.parse(localStorage.getItem(identifKey))
		inicial.innerHTML = userIndefData.name[0] + userIndefData.lastName[0]
		nameAndSurname.innerHTML = userIndefData.name + ' ' + userIndefData.lastName


		profilRegistr.classList.remove('profil-modal-active')
		wrapper.classList.add('wrapper-inactive')
		modalProfile.classList.toggle('modal-profil-box-active')
		document.body.classList.add('body-hidden')

		BookCounter.innerHTML = userBaseData.counterBook
		
	})


	///close modul my-profile
	const modalProfilClose = document.querySelector('.modal-profil-close')

	modalProfilClose.addEventListener('click', () => {
		modalProfile.classList.remove('modal-profil-box-active')
		document.body.classList.remove('body-hidden')
		wrapper.classList.remove('wrapper-inactive')
	})







	