$(document).ready(function() {
  // Aggiungo URL base
  var url_base = 'http://157.230.17.132:3000/todos/';
  // Color
  var red = {'color': '#e20000'};
  var thumb = '<i class="fas fa-thumbtack"></i>';
  var bin = '<i class="fas fa-trash-alt"></i>';
  // Richiam ajax per prendere l informazioni dal url con il GET
  print_todo ();
  add_todo ();
  task_delete();
  // AJAX GET
    function print_todo(get) {
      $('#lista').html('');
      $.ajax({
        'url': url_base,
        'method': 'GET',
        'success': function(data) {
          for (var i = 0; i < data.length; i++) {
            var listcontent = data[i];
            $('#lista').append('<li><span id="' + listcontent.id '> + bin</span> ' + listcontent.text + '</li>'  );
          }
        },
        'error': function() {
          alert('Qualcosa e andato storto !!!');
        }
    })
  }

  // AJAX post + click
  function add_todo(post) {
    $('#circle').click (function () {
      var add_task = $('#input').val();
      $('#input').val('');
      $.ajax ({
        'url': url_base,
        'method': 'POST',
        'data': {
          'text': add_task
        },
        'success': function() {
          print_todo();
        },
        'error': function () {
          alert('Qualcosa e andato storto !!!');
        }
      });
    });
  }
  // Ajax delete
  function task_delete(cancel) {
    $('#lista').on('click', 'i' , function() {
      var id_delete = $(this).attr('data-id');
      $.ajax({
        'url': url_base + id_delete,
        'method': 'DELETE',
        'success': function() {
          print_todo();
        },
        'error': function() {
          alert('error');
        }
      });
    });
  }


})
