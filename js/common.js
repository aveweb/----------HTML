$(document).ready(function() {


	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "send.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});


	$(".modal").fancybox({
		'titlePosition' : 'inside',
		'transitionIn' : 'none',
		'transitionOut' : 'none'
	});


$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});