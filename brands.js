 $(document).ready(function(){
  $('.multiple-items').slick({
    arrows: true,
	autoplay: true,
	infinite: true,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 1,
	variableWidth: true,
	appendArrows: $('.brands')
  });
});