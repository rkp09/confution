$(document).ready(function () {
	$('#mycarousel').carousel({ interval: 2000 });
	$('#carouselButton').click(function () {
		if ($('#carouselButton').children('span').hasClass('fa-pause')) {
			$('#mycarousel').carousel('pause');
			$('#carouselButton').children('span').removeClass('fa-pause');
			$('#carouselButton').children('span').addClass('fa-play');
		} else if ($('#carouselButton').children('span').hasClass('fa-play')) {
			$('#mycarousel').carousel('cycle');
			$('#carouselButton').children('span').removeClass('fa-play');
			$('#carouselButton').children('span').addClass('fa-pause');
		}
	});

	// reserve button toggling and data showing
	$('#reserve-table-btn').click(function () {
		if ($('#dinner-booking').modal('show')) {
			$('#dinner-booking').modal();
		} else {
			$('#dinner-booking').modal('show')
		};
	});

	// login button toggling and data showing
	$('#login-btn-modal').click(function () {
		if ($('#loginModal').modal('show')) {
			$('#loginModal').modal();
		} else {
			$('#loginModal').modal('show');
		}
	});
});