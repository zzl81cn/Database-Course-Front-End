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
            if ($friends.css('height') === '0px') {
                $friends.css('height', 'calc(100% - 50px)');
            } else {
                $friends.css('height', '0');
            }
        });

        $('#messageList li a').each(function (index, el) {
            $(el).click(function (event) {
               if ($(el).attr('class') === 'yes') {

               } else {

               }

                $(el).parent()
                    .animate({'margin-left': '-100%'}, 400, function () {
                        $(this).remove();
                    });
            });
        });
    }
);