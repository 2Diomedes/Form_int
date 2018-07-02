$(document).ready(function() {

    var allInputs = $('.text');
    // bouton send
    $('#send').click(function() {

        $(allInputs).each(function(i) {
            if ($(this).val() == "") {
                alert('One or more inputs are empty');
                $(this).css({
                    'border-color': 'red',
                })
            } else if ($(this).val().length < 5) {
                alert('It\'s too short. It must content at least 5 characters.');
                $(this).css({
                    'border-color': 'red',
                });
            } else if ($('#password').val() != $('#verifyPassword').val()) {
                alert('Your password is different than your verifyPassword');
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
