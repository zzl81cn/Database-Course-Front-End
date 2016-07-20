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
	}
);