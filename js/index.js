$(
    function () {
        $('.card').each(function (index, el) {
           $(el).delay(index * 200).animate({'margin-top': '16'}, 800);
        });
        
        
        $('.card .list-head a').each(function (index, el) {
            if ($(this).attr('class') !== '') {
                $(el).click(function (event) {
                    var $i = $(el).find('i');
                    if ($i.css('color') !== 'rgb(133, 133, 133)') {
                        $i.css('color', '#858585');
                    } else {
                        $i.css('color', '#F4C600');
                    }
                });
            }
        });
    }
);