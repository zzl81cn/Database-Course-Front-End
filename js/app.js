$(
    function () {
        var $body = $('body'),
            $window = $(window),
            $title = $('title');

        if ($title.html() !== 'Login') {
            $body.height($window.height() - 50);
        } else {
            $body.height($window.height());
        }

        $('#showFriends').click(function () {
            var $friends = $('#friends');
            if ($friends.css('right') === '0px') {
                $friends.animate({right: '-82%'}, 800);
            } else {
                $friends.animate({right: '0'}, 800);
            }
        });
    }
);