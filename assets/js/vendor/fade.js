$("#viewbtn").click(function () {

   // $("#about").slideUp()

    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1500);
});