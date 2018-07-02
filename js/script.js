$(document).ready(function() {

  // bouton send
  $('#send').click(function() {

    if ($('.text').val('')) {
      console.log($('.text').val(''));
      alert('Inputs are empty');
    } else if ($('.text').val().length < 5) {
      $('.text').val('');
      alert('It\'s too short. It must content at least 5 characters.');
    } else if (password != verifyPassword) {
      $('#password, #verifyPassword').val('');
      alert('Your password is different than your verifyPassword');
    }

  });
  // bouton send


  // bouton reset
  $('#reset').click(function() {
    $('.text').val('');
  });
  // bouton reset


});
