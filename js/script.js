//SLIDERS
const btnAutopark = document.querySelectorAll('.autopark__button');
const sliders = document.querySelectorAll('.slider');
$('.gazpr').slick({
	infinite: true,
	speed: 1000,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: false,
	autoplaySpeed: 2000,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				dots: true
			}
		}
	]
});
btnAutopark.forEach(item => {
	item.addEventListener('click', event => {
		btnAutopark.forEach(item => {item.classList.remove('active');});
		sliders.forEach(item => {item.classList.remove('active');});
		item.classList.add('active');
		const idOfItem = '.' + item.getAttribute('id');
		document.querySelector(`${idOfItem}`).classList.add('active');
		$(`${idOfItem}`).slick({
			infinite: true,
			speed: 1000,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 2000,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						dots: true
					}
				}
			]
		});
	});
});
//=============================================================================================

//BURGER MENU
const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
	burger.classList.toggle('active');
	document.querySelector('.burger > span').classList.toggle('active');
	document.querySelector('.nav').classList.toggle('active');
	document.querySelector('body').classList.toggle('lock');
});
//=============================================================================================

//SLOW SCROLL
const btnMakeOrder = document.querySelectorAll('.kab__button, .card__button, .rightpart__button');
btnMakeOrder.forEach(item => {
	item.addEventListener('click', () => {
		document.querySelector('.order').scrollIntoView( {
			behavior: 'smooth',
			block: 'center'
		});
	});
});
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(item => {
	item.addEventListener('click', event => {
		event.preventDefault();
		const classGoTo = '.' + item.getAttribute('id');
		document.querySelector(`${classGoTo}`).scrollIntoView( {
			behavior: 'smooth',
			block: 'center'
		});
		document.querySelectorAll('.burger, .burger > span, .nav').forEach(item => {item.classList.remove('active')});
		document.querySelector('body').classList.remove('lock');
		
	});
});
const footerLinks = document.querySelectorAll('.navfooter__link');
footerLinks.forEach(item => {
	item.addEventListener('click', event => {
		event.preventDefault();
		const classGoTo = '.' + item.dataset.go;
		document.querySelector(`${classGoTo}`).scrollIntoView( {
			behavior: 'smooth',
			block: 'center'
		});
	});
});
//=============================================================================================

// MAKE AN ORDER
let isChecked = false;
const checkBoxText = document.querySelector('.order__checkbox_text');
const checkBox = document.querySelector('.order__checkbox');
const btnOrder = document.querySelector('.order__button')
checkBox.addEventListener('change', () => {
	isChecked = !isChecked;
	if(checkBoxText.classList.contains('underline')) checkBoxText.classList.remove('underline');
});
btnOrder.addEventListener('click', (event) => {
	if (isChecked) return true;
	 else {
		event.preventDefault();
		checkBoxText.classList.add('underline');
	}
});
//=============================================================================================

