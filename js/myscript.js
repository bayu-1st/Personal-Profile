$(document).ready(function(){
	$('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:$(this).attr('data-percent')
		},6000);
	});

	$('.smooth-scrl').on('click',function(e){

		let link = $(this).attr('href');
		let dest = $(link);
		$('html').animate({
			scrollTop: $(dest).offset().top-50
		},1500);
	});
});

