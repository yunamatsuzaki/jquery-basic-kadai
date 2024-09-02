$(function () {
    //change-color
    $('#change-color').on('click',function(){
      $('#target').css('color','red');
    });

    // change-text
    $('#change-text').on('click', function() {
      $('#target').text('Hello！');
    });

    // fade-in
   $('#fade-in').on('click', function() {
    $('#target').fadeIn();

    // fade-out
    $('#fade-out').on('click', function() {
      $('#target').fadeOut();
    });
   });
});
