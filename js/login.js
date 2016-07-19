$(
	function() {
		$(':submit').click(function(event) {
			$.post('/Login/Save', function(data) {
				if (data === false) {
					swal('密码输入错误', 'error');
				}
			});
		});

		setInterval(function() {
			$('#logo').animate({top: '-=50', left: '-=50'}, 1000)
				.animate({top: '+=50', left: '+=50'}, 1000);
		}, 2000);

		// $('.ball').each(function(index, el) {
		// 	if (index <= 4) {
		// 		$(el).css({'left': 'calc(50vw - ' + Math.sin(Math.PI/6*(index+1))*44 + 'vh - 300px)',
		// 		 			'top': 'calc(50vh - ' + Math.cos(Math.PI/6*(index+1))*44 + 'vh)'});
		// 	}
		// });

	}
);