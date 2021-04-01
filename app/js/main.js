  $(document).ready(function() {
    $('.burger-icon, .menu-item').click(function() {
      $('.burger-icon').toggleClass("change");
      $('.header-menu').toggleClass("pushed");
    })
    $("#menu").on("click","a", function (event) {
      event.preventDefault(); //опустошим стандартную обработку
      var id  = $(this).attr('href'), //заберем айдишник блока с параметром URL
        top = $(id).offset().top; //определим высоту от начала страницы до якоря
    $('body,html').animate({scrollTop: top}, 1000); //сделаем прокрутку за 1 с
    });

});
