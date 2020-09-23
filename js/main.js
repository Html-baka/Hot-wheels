
$(document).ready(function(){

	// Nav menu
	const mobileNavContainer = document.querySelector('#mobile-header-nav');

	document.querySelector('.menu-icon-wrapper').onclick = function(){
	  document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
	  mobileNavContainer.classList.toggle('mobile-header-nav-active');
}
	// OwlCarousel
  $(".owl-carousel").owlCarousel(
  	{
  		items:1
  	});


  // Scroll to top
  const scrollBtn = $('.scroll-to-top');


  // $('.scroll-to-top').hide();

  $(window).scroll(function(){
  		if( $(this).scrollTop() > 100) {
  			scrollBtn.fadeIn();
  		}
  		else {
  			scrollBtn.fadeOut();
  		}
  })

  scrollBtn.click(function(){
  	$('html, body').animate({ scrollTop: 0 }, 360);
  	return false;
  })


  // MixItUp
  var mixer = mixitup('.products-row');

});