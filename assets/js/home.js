const dignityBtn = document.querySelectorAll(".dignity-btn");
const popUpBox = document.querySelectorAll(".popUp-box");
$(".popUp-close").click(() => {
	$(".popUp-place").removeClass("popUp-place--active")
	$(".popUp-box").removeClass("popUp-box--active")
})
function popUpShowed() {
	if (window.innerWidth > 720) {
		$("#dignity1-popup").addClass("popUp-box--active")
	} else {
		$("#dignity1-popup").removeClass("popUp-box--active")
	}
}
popUpShowed()
window.addEventListener("resize", popUpShowed)
dignityBtn.forEach(item => {
	item.addEventListener("click", () => {
		const idElem = item.id;
		popUpBox.forEach(itempopup => {
			if (itempopup.classList.contains(idElem)) {
				popUpBox.forEach(it => {
					it.classList.remove("popUp-box--active");
				})
				itempopup.classList.add("popUp-box--active");
				$(".popUp-place").addClass("popUp-place--active")
			}
		})
	})
})



// employers
$(document).ready(() => {
	$(".employers-slider").slick({
		dots: true,
		autoplay: true,
		autoplayspeed: 7000
	});
})
// news
$(document).ready(() => {
	if (window.innerWidth > 1030) {
		$(".news-slider").slick({
			autoplay: true,
			autoplayspeed: 7000,
			slidesToShow: 3,
			appendArrows: $(".news-arrowscontainer"),
		});
	}
	if (window.innerWidth < 1030 && window.innerWidth > 720) {
		$(".news-slider").slick({
			autoplay: true,
			autoplayspeed: 7000,
			slidesToShow: 2,
			appendArrows: $(".news-arrowscontainer"),
		});
	}
	if (window.innerWidth < 720) {
		$(".news-slider").slick({
			autoplay: true,
			autoplayspeed: 7000,
			slidesToShow: 1,
			appendArrows: $(".news-arrowscontainer"),
		});
	}
	let currentSlide = 1;
	let cardlength = 0;
	$(".card").each((i, el) => {
		if ($(el).hasClass("slick-cloned") == false) {
			cardlength += 1;
		}
	})

	changeInfoNewSlider()
	$(".news-slider").on("afterChange", (e, slick, currentSl) => {
		currentSlide = currentSl + 1;

		changeInfoNewSlider()
	});
	function changeInfoNewSlider() {
		$(".title__info_slick-news").text(`${currentSlide}/${cardlength}`)
	}
})

const stata = document.querySelector(".stata");
const shkala = document.querySelector(".shkala");
const statisticNum = 52;
const time = 1000;
const step = 1;
function outNum(num, elem) {
	let e = document.querySelector(".statistic-num span");
	start = 0;
	let t = Math.round(time / (num / step));
	let interval = setInterval(() => {
		start = start + step;
		if (start == num) {
			clearInterval(interval);
		}
		e.innerHTML = start;
		shkala.style.width = `${start}%`;
	}, t);
}
outNum(statisticNum, ".statistic-num span");