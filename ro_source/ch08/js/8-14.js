/******************************************************************************
 * Plugin code
******************************************************************************/

/******************************************************************************
 * $.sum()
 * Return the total of the numeric values in an array/object.
******************************************************************************/

(function($) {
$.mathUtils = {
    sum: function(array) {
        var total = 0;

        $.each(array, function(index, value) {
            value = $.trim(value);
            value = parseFloat(value) || 0;

            total += value;
        });
        return total;
    },
    average: function(array) {
        if ($.isArray(array)) {
            return $.mathUtils.sum(array) / array.length;
        }
        return '';
    }
};
})(jQuery);

/******************************************************************************
  * .swapClass()
  * Exchange one class for another on the selected elements.
******************************************************************************/

(function($) {
$.fn.swapClass = function(class1, class2) {
    return this.each(function() {
        var $element = $(this);
        if ($element.hasClass(class1)) {
            $element.removeClass(class1).addClass(class2);
        }
        else if ($element.hasClass(class2)) {
            $element.removeClass(class2).addClass(class1);
        }
    });
};
})(jQuery);

/******************************************************************************
  * .shadow()
  * Create a shadow effect on any element by brute-force copying.
******************************************************************************/

(function($) {
$.fn.shadow = function(opts) {
    var defaults = {
        copies: 5,
        opacity: 0.1,
        copyOffset: function(index) {
            return {x: index, y: index};
        }
    };
    var options = $.extend(defaults, opts);

    return this.each(function() {
        var $originalElement = $(this);
        for (var i = 0; i < options.copies; i++) {
            var offset = options.copyOffset(i);
            $originalElement
                .clone()
                .css({
                    position: 'absolute',
                    left: $originalElement.offset().left + offset.x,
                    top: $originalElement.offset().top + offset.y,
                    margin: 0,
                    zIndex: -1,
                    opacity: options.opacity
                })
                .appendTo('body');
        }
    });
};
})(jQuery);

/******************************************************************************
 * Script code
******************************************************************************/

$(document).ready(function() {
    var $inventory = $('#inventory').find('tbody');
    var quantities = $inventory.find('td:nth-child(2)')
        .map(function(index, qty) {
            return $(qty).text();
        }).get();

    var prices = $inventory.find('td:nth-child(3)')
        .map(function(index, qty) {
            return $(qty).text();
        }).get();

    var sum = $.mathUtils.sum(quantities);
    var average = $.mathUtils.average(prices);
    $('#sum').find('td:nth-child(2)').text(sum);
    $('#average').find('td:nth-child(3)').text(average.toFixed(2));

    $('table').click(function() {
        $('tr').swapClass('one', 'two');
    });

    $('h1').shadow({
        copyOffset: function(index) {
            return {x: -index, y: -2 * index};
        }
    });
});
