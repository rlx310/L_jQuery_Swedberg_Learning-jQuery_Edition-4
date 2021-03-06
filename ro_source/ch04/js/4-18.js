//

$(document).ready(function() {
    var $speech = $('div.speech');
    var defaultSize = $speech.css('fontSize');

    $('#switcher').find('button').click(function() {
        var num = parseFloat($speech.css('fontSize'));

        switch (this.id) {
            case 'switcher-large':
                num *= 1.4;
                break;
            case 'switcher-small':
                num /= 1.4;
                break;
            default:
                num = parseFloat(defaultSize);
        }
        $speech.animate({fontSize: num + 'px'}, 'slow');
    });

    var $firstPara = $('p').eq(1);
    $firstPara.hide();
    $('a.more').click(function(event) {
        event.preventDefault();

        $firstPara.animate({
            opacity: 'toggle',
            height: 'toggle'
        }, 'slow');

        var $link = $(this);
        if ($link.text() == 'read more') {
            $link.text('read less');
        }
        else {
            $link.text('read more');
        }
    });

    $('div.label').click(function() {
        var paraWidth = $('div.speech p').outerWidth();
        var $switcher = $(this).parent();
        var switcherWidth = $switcher.outerWidth();
        $switcher
            .css({position: 'relative'})
            .animate({left: paraWidth - switcherWidth}, 'slow')
            .animate({height: '+=20px'}, 'slow')
            .animate({borderWidth: '5px'}, 'slow');
    });
});