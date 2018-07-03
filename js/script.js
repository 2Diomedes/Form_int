$(document).ready(function() {

  var allInputs = $('.text');
  // bouton send
  $('#send').click(function() {

    console.log($('#pseudo').val().length);

    if ($('#pseudo').val().length > 12) {
      alert('Your pseudo is too long! It must contain a maximum of 12 characters.');
    } else if ($('input').val() == "") {
      alert('An input is empty');
    } else if ($('#password').val() != $('#verifyPassword').val()) {
      alert('Your password is different than your verifyPassword');
    } else {}

    $("#validate").bind("click", validate);

    $(allInputs).each(function(i) {
      if ($(this).val() == "") {
        $(this).css({
          'border-color': 'red',
        })
      } else if ($(this).val().length < 5) {
        alert('It\'s too short. It must content at least 5 characters.');
        $(this).css({
          'border-color': 'red',
        });
      } else if ($('#password').val() != $('#verifyPassword').val()) {
        $(this).css({
          'border-color': 'red',
        });
      } else {
        $(this).css({
          'border-color': 'green',
        });
      }
    });
  });
  // bouton send


  // bouton reset
  $('#reset').click(function() {
    $('.text').val('');
  });
  // bouton reset


});
