//smooth scroll
$('.smooth-scrl').on('click',function(e){

		let link = $(this).attr('href');
		let dest = $(link);
		$('html').animate({
			scrollTop: $(dest).offset().top-50
		},1500);
	});

//parallax effect
$(window).scroll(function(){
	let scrl = $(this).scrollTop();

	$('.header img').css({
		'transform':`translate(-${scrl / 8}%, 0px )`
	})

	$('.header .judul').css({
		'transform':`translate(${scrl / 8}%, 0px )`
	})

	if(scrl>$('.skills').offset().top-400){
		$('.skillbar').each(function(){
			$(this).find('.skillbar-bar').animate({
				width:$(this).attr('data-percent')
			},4500);
		});
	}

	if(scrl>$('.socmed').offset().top-400){
		$('.socmed .icn').each(function(i){
			setTimeout(function(){
				$('.socmed .icn').eq(i).addClass('landing');
			},375*(i+1));
		});
	}

	if(scrl>$('.socmed').offset().top-250){
		$('.socmed .judul').addClass('landing');
	}
});