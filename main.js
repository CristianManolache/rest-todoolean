$(document).ready(function() {
  // Aggiungo URL base
  var url_base = 'http://157.230.17.132:3000/todos/';
  // Color
  var red = {'color': '#e20000'};

// Richiam ajax per prendere l informazioni dal url con il GET
  print_todo ();
  post_todo ();

  function print_todo(get) {
    $.ajax({
      'url': url_base,
      'method': 'GET',
      'success': function(data) {
        for (var i = 0; i < data.length; i++) {
          var listcontent = data[i];
          var thumb = '<i class="fas fa-thumbtack"></i>';
          $(thumb).css(red);
          var bin = '<i class="fas fa-trash-alt"></i>';
          $('#lista').append('<li>' + thumb + listcontent.text + bin +'</li>');
        }
      },
      'error': function() {
        alert('Qualcosa e andato storto !!!')
      }
    })
  }

  // AJAX post + click
  function post_todo(post) {
    $('fa fa-plus-circle').click(function() {
      var add_text = $('#input').val();
        $.ajax({

          'url': url_base,
          'method': 'POST',
          'data': {
            'text': add_text
          },
          'success': function(response) {
              $('#lista').append('<li>' + thumb + response.text + bin +'</li>');
            }
          },
          'error': function() {
            alert('Qualcosa e andato storto !!!')
          }
        })
      }
    })

})
