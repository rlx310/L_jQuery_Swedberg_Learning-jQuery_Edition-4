$(document).ready(function() {
  var $ajaxForm = $('#ajax-form'),
      $response = $('#response'),
      noresults = 'There were no search results.',
      failed = 'Sorry, but the request could not ' +
        'reach its destination. Try again later.';

  var buildItem = function(item) {
    var title = item.name,
        args = [],
        output = '<li>';

    if (item.type == 'method' || !item.type) {
      if (item.signatures[0].params) {
        $.each(item.signatures[0].params, function(index, val) {
          args.push(val.name);
        });
      }
      title = (/^jQuery|deferred/).test(title) ? title : '.' + title;
      title += '(' + args.join(', ') + ')';
    } else if (item.type == 'selector') {
      title += ' selector';
    }
    output += '<h3><a href="' + item.url + '">' + title + '</a></h3>';
    output += '<div>' + item.desc + '</div>';
    output += '</li>';

    return output;
  };

  var response = function(json) {
    var output = '';
    if (json && json.length) {
      output += '<ol>';
      $.each(json, function(index, val) {
        output += buildItem(val);
      });
      output += '</ol>';
    } else {
      output += noresults;
    }

    $response.html(output);
  };

  $ajaxForm.on('submit', function(event) {
    event.preventDefault();

    $response.addClass('loading').empty();

    $.ajax({
      url: 'http://book.learningjquery.com/api/',
      dataType: 'jsonp',
      data: {
        title: $('#title').val()
      },
      timeout: 15000
    })
    .done(response)
    .fail(function() {
      $response.html(failed);
    })
    .always(function() {
      $response.removeClass('loading');
    });
  });
});
