
$(document).ready(function(){
	$('#target').submit(function(event){
		$("#data").html("");
		let baseURL = 'https://www.omdbapi.com/?s=';
		let query = $('#mySearch').val();
		let url = baseURL + query + '&apikey=thewdb';
		event.preventDefault();
		$.getJSON(url, function(data){
			let search = data.Search;
			// Add search data to html	
			$(search).each(function(index, value){
				console.log(value.Actors);
				$('#data').append($('<li><a href="' + value.Poster + '">' + value.Title + ' - ' + value.Year + '</a></li>'));
				$('.colorText').css('background', "#E9F0F2");
			});	
		});
	});
});

window.onload = function(){
	let today = new Date();
	let hourNow = today.getHours();
	let greeting;
	if (hourNow > 18){
	greeting = 'Good evening';
}else if (hourNow > 12){
	greeting = 'Good afternoon';
}else if (hourNow > 0){
	greeting = 'Good morning';
}else{
	greeting = 'Welcome!';
}
document.getElementById('greetMe').innerHTML = greeting.toUpperCase();
};

