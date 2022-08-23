/* eslint-disable */
let spollers = document.querySelectorAll("._spoller");
let spollersGo = true;

let slideUp = (target, duration = 500) => {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let slideDown = (target, duration = 500) => {
	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none')
		display = 'block';

	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let slideToggle = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (window.getComputedStyle(target).display === 'none') {
			return slideDown(target, duration);
		} else {
			return slideUp(target, duration);
		}
	}
}

function spollerCLick(e) {
	e.preventDefault();
	const spoller = e.target;
	if (spollersGo) {
		spollersGo = false;

		if (spoller.closest('._spollers').classList.contains('_one')) {
			let curentSpollers = spoller.closest('._spollers').querySelectorAll('._spoller');
			for (let i = 0; i < curentSpollers.length; i++) {
				let el = curentSpollers[i];
				if (el != spoller) {
					el.classList.remove('_active');
					slideUp(el.nextElementSibling);
				}
			}
		}
		spoller.classList.toggle('_active');
		slideToggle(spoller.nextElementSibling);

		setTimeout(function () {
			spollersGo = true;
		}, 500);
	}
}
function spollersInit(spollers) {
	for (let index = 0; index < spollers.length; index++) {
		const spoller = spollers[index];
		let spollerMax = spoller.getAttribute('data-max');

		if (spollerMax && window.innerWidth > spollerMax) {
			if (spoller.classList.contains('_init')) {
				spoller.classList.remove('_active');
				spoller.classList.remove('_init');
				spoller.nextElementSibling.style.cssText = '';
				spoller.removeEventListener("click", spollerCLick);
			}
		} else if (!spoller.classList.contains('_init')) {
			spoller.classList.add('_init');
			spoller.addEventListener("click", spollerCLick);
		}
	}
}
function spollersShowActive(spollers) {
	for (let index = 0; index < spollers.length; index++) {
		const spoller = spollers[index];
		if (spoller.classList.contains('_active')) {
			slideToggle(spoller.nextElementSibling);
		}
	}
}

function initSpoller() {
	let spollers = document.querySelectorAll("._spoller");
	setTimeout(function () {
		spollersInit(spollers);
	}, 0);
}

if (spollers) {
	window.addEventListener("resize", spollersInit);
	setTimeout(function () {
		spollersShowActive(spollers);
		spollersInit(spollers);
	}, 0);
}

window.initSpollersGlobal = initSpoller;

/* eslint-enable */
