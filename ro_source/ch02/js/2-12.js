//

$(document).ready(function() {
    var $plays = $('#selected-plays');
    $plays.find('> li').addClass('horizontal');
    $plays.find('li:not(.horizontal)').addClass('sub-level');

    $('a[href^="mailto:"]').addClass('mailto');
    $('a[href$=".pdf"]').addClass('pdflink');
    $('a[href^="http"][href*="henry"]').addClass('henrylink');

    $('a').filter(function() {
        return this.hostname && this.hostname != location.hostname;
    }).addClass('external');

    $('tr:nth-child(odd)').addClass('alt');
    $('td:contains(Henry)').nextAll().addBack().addClass('highlight');
});