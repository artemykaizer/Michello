(() => {
	const slidesCount = Array.from($(".slider")).length;
	let currentSlide = 1;
	let translateWidth = 0;
	const slideInterval = 4000;

			function prevSlide() {
			    if (currentSlide === 1 || currentSlide <= 0 || currentSlide > slidesCount) {
			        translateWidth = -$('#viewport').width() * (slidesCount - 1);
			        $('#slidewrapper').css({
			            'transform':  `translate(${translateWidth}px, 0)`,
			            '-webkit-transform':  `translate(${translateWidth}px, 0)`,
			            '-ms-transform':  `translate(${translateWidth}px, 0)`,
			        });
			        currentSlide = slidesCount;
			    } else {
			        translateWidth = -$('#viewport').width() * (currentSlide- 2);
			        $('#slidewrapper').css({
			            'transform': `translate(${translateWidth}px, 0)`,
			            '-webkit-transform': `translate(${translateWidth}px, 0)`,
			            '-ms-transform': `translate(${translateWidth}px, 0)`,
			        });
			        currentSlide--;
			    }
			}

			function nextSlide() {
		    if (currentSlide === slidesCount || currentSlide <= 0 || currentSlide > slidesCount) {
		        $('#slidewrapper').css('transform', 'translate(0, 0)');
		        currentSlide = 1;
		    } else {
		        translateWidth = -$('#viewport').width() * (currentSlide);
		        $('#slidewrapper').css({
		            'transform': `translate(${translateWidth}px, 0)`,
		            '-webkit-transform': `translate(${translateWidth}px, 0)`,
		            '-ms-transform': `translate(${translateWidth}px, 0)`,
		        });
		        currentSlide++;
		    }
		}

		$(document).ready(function () {
	    let interval = setInterval(nextSlide, slideInterval);

			$(".main-slider-wrapper:eq(0)").mouseover(() => {
				clearInterval(interval)
			})
			$(".main-slider-wrapper:eq(0)").mouseout(() => {
				interval = setInterval(nextSlide, slideInterval)
			})
	});

	$(".slider__button--prev").click(() => {
		prevSlide()
	});

	$(".slider__button--next").click(() => {
		nextSlide()
	});

})();



(() => {
	const buttons = $(".discover__buttons")
	const items = $(".food__item")
	let currentButton = {};

	buttons.click((e) => {
		Array.from(buttons).forEach((elem) => {
			if (!$(elem).hasClass("discover__buttons--active") && elem.value === e.target.value) {
					$(e.target).addClass("discover__buttons--active")
					currentButton = elem
			} else {
				$(elem).removeClass("discover__buttons--active")
			}
		})

		Array.from(items).forEach((elem) => {
			if($(elem).hasClass(currentButton.value)) {
				$(elem).show()
			} else {
				$(elem).hide()
			}
		})
	})
})();
