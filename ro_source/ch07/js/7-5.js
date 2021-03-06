//

$(document).ready(function() {
    var $books = $('#books').cycle({
        slides: 'li',
        timeout: 2000,
        speed: 200,
        pauseOnHover: true
    });

    var $controls = $('<div id="books-controls"></div>').insertAfter($books);
    $('<button>Pause</button>').click(function(event) {
        event.preventDefault();
        $books.cycle('pause');
    }).appendTo($controls);
    $('<button>Resume</button>').click(function(event) {
        event.preventDefault();
        $('.cycle-paused').cycle('resume'); // cycle2 doesn't support pseudo selectors
    }).appendTo($controls);
});