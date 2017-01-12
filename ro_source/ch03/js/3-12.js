//

$(document).ready(function() {
    window.$switcher = $('#switcher');
    window.$buttons = $switcher.find('button');

    $switcher.find('h3').hover(function() {
        $(this).addClass('hover');
    }, function() {
        $(this).removeClass('hover');
    });
});
$(document).ready(function() {
    $switcher.click(function(event) {
        if (event.target == this) {
            $buttons.toggleClass('hidden');
        }
    });
});
$(document).ready(function() {
    $('#switcher-default').addClass('selected');

    $buttons.click(function() {
        var bodyClass = this.id.split('-')[1];
        $('body').removeClass().addClass(bodyClass);

        $buttons.removeClass('selected');
        $(this).addClass('selected');
    })
});