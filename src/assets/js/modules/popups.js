/* eslint-disable */
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".js-lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.querySelector('.popup_' + popupName);
			popupOpen('.popup_' + popupName);
			e.preventDefault();
		});
	}
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

function popupOpen(curentPopupSelector, noCloseActivePopup) {
	const curentPopup = document.querySelector(curentPopupSelector);
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (!noCloseActivePopup && popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener("click", function (e) {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}

window.popupInit = popupOpen;

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}

function popupCloseCustom(doUnlock = true) {
	if (unlock) {
		const popupActive = document.querySelectorAll('.popup.open');
		if (popupActive) {
			popupActive.forEach((el) => {
				el.classList.remove('open');
			})
		}
		if (doUnlock) {
			bodyUnLock();
		}
	}
}

window.popupCLoseGlobal = popupCloseCustom;

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock-popup');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock-popup');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive);
		}
	}
});

(function () {
	// проверяем поддержку
	if (!Element.prototype.closest) {
		// реализуем
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();

function popupOpenUniversalForm(title = '', text = '', noCloseActivePopup = false) {
	const modalSelector = '.popup_template';
	let modal = document.querySelector('.popup_template');
	let titleModal = modal ? modal.querySelector('.popup-template__title') : null;
	let textModal = modal ? modal.querySelector('.popup-template__text') : null;
	// titleModal.innerHTML = title;
	if (titleModal) {
		titleModal.innerHTML = title;
	}
	if (textModal) {
		textModal.innerHTML = text;
	}

	if (modalSelector) {
		popupOpen(modalSelector, noCloseActivePopup);
	}
}

window.popupOpenUniversal = popupOpenUniversalForm;

export default popupOpen;

/* eslint-enable */
