const menuButton = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");
const CloseMenuBtn = document.querySelector(".close-menu-btn");

menuButton.addEventListener("click", () => {
  menu.classList.add("nav--active");
  menuButton.classList.add(".menu-btn--active");
})

CloseMenuBtn.addEventListener("click",()=>{
    menu.classList.remove("nav--active");
    menuButton.classList.remove(".menu-btn--active");
})
//анимация
const animateItems = document.querySelectorAll("._animateItems");
if (animateItems.length > 0) {
	window.addEventListener("scroll", animationOnScroll)
	animationOnScroll();
	function animationOnScroll(params) {
		for (let index = 0; index < animateItems.length; index++) {
			const animateItem = animateItems[index];
			const animateItemHeight = animateItem.offsetHeight;
			const animateItemoffSet = offset(animateItem).top;
			const animateStart = 3;
			let animateItemPointer = window.innerHeight - animateItemHeight / animateStart;
			if (animateItemHeight > window.innerHeight) {
				animateItemPointer = window.innerHeight - window.innerHeight / animateStart;
			}
			if ((scrollY > animateItemoffSet - animateItemPointer) && screenY < (animateItemoffSet + animateItemHeight)) {
				animateItem.classList.add("_active");
			} else {
				animateItem.classList.remove("_active");
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect()
		const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
		const scrollTop = window.scrollY || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }

	}
}