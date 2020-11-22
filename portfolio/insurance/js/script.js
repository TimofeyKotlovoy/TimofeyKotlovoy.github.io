$(document).ready(function(){
  

  $(".btn-nav").on('click', function(event) {
  	var target = $(this).data('target');
  	$(target).toggleClass('nav__list--open');
  });
});