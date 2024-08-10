/** 
 * swiper 관련 이벤트
*/
//dashboard banner slide
function bannerSlide() {
	var swiper = new Swiper('.banner_slider', {
		slidesPerView: 1, 
		pagination: {
			el: '.banner_slider .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
    loop: true,
		autoplay: {
			delay: 4000,  
			disableOnInteraction: false,
		},
	});
}