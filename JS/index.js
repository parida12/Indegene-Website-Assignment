(function($, document, window){
	$(document).ready(function(){
		$(".testimonial, .hero-slider").flexslider({
			directionNav: false,
			controlNav: true
		});
	});
	$(window).load(function(){

	});
})(jQuery, document, window);

function hamburgermenu() {
	document.getElementById("Dropdownlink").classList.toggle("show");
}
  // Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
	if (!event.target.matches('.hamburger')) {
	  var dropdowns = document.getElementsByClassName("dropdown-content");
	  var index;
	  for (index = 0; index < dropdowns.length; index++) {
		var openDropdown = dropdowns[index];
		if (openDropdown.classList.contains('show')) {
		  openDropdown.classList.remove('show');
		}
	  }
	}
}
