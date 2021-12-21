let humburger = document.querySelector('.humburger');
let navMobile = document.querySelector('.header__navigation_mobile');
let back = document.querySelector('body');
let navList = document.querySelector('.header-navigation__list');
let links = document.querySelector('.header-navigation__link');
let aboutContent = document.querySelector('.about-me__content');
let overlay = document.querySelector('.about-me');

function burgerMenu(selector) { 
	humburger.addEventListener("click", (e) => {
		e.preventDefault();
		animateBurger();
		hideContent()
		showNavigation();
		hideNavigation();
	});

	function animateBurger() { 
		humburger.addEventListener("click", () => {
			humburger.classList.toggle('._active');
		});		
	}

	function hideContent() { 
		navMobile.classList.toggle('._active');
		if (navMobile.classList.contains('._active')) {
			aboutContent.style.visibility = "hidden";
		} else { 
			aboutContent.style.visibility = "visible";
		}
	}

	function showNavigation() { 
		if (navMobile.classList.contains('._active')) {
			navMobile.style.visibility = "visible";
		} else { 
			navMobile.style.visibility = "hidden";
		}
	}

	function hideNavigation() { 
		overlay.addEventListener("click", () => {
			navMobile.style.visibility = "hidden";
			hideContent();
		});
	}
}

burgerMenu();




// [].forEach.call(links, function (el) {
// 	el.addEventListener("click", () => hideMenu());
// });

// humburger.onclick = function () { 
// 	humburger.classList.toggle('._active');
// 	navMobile.classList.toggle('._active');
// 	back.classList.toggle('._lock');
// }

// navList.onclick = function () { 
// 	navList.classList.remove('._active');
// 	back.classList.toggle('._lock');
// }

