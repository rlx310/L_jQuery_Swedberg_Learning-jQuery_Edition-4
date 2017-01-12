/******************************************************************************
 * Plugin code
******************************************************************************/

/******************************************************************************
 * $.sum()
 * Return the total of the numeric values in an array/object.
******************************************************************************/

(function($) {
    $.sum = function(array) {
        var total = 0;

        $.each(array, function(index, value) {
            value = $.trim(value);
            value = parseFloat(value) || 0;

            total += value;
        });
        return total;
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

    var sum = $.sum(quantities);
    $('#sum').find('td:nth-child(2)').text(sum);
});
