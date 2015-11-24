$(function() {
	//getting content from index.html
	var content = $('.content');

	//Every time the button is clicked...
	$('button').on('click', function(){
		//make an ajax call...
		$.ajax({
		//to '/balance'
		url: '/balance'
	}).done(function(html){
		//append the output of /balance
		//to the div '.display'
		$('.account').hide().delay(200).text("" + html).fadeIn(500);
		})
	});
	
});