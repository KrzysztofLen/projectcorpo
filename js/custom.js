$(document).ready(function() {

    $('.timer').countTo();

    $('#parallax').parallax("50%", 0.1);

    $('#menu').onePageNav({currentClass: 'active', scrollOffset: 30});

    $(".header h1").mouseenter(function() {
        $(this).toggleClass("underline");
    }).mouseleave(function() {
        $(this).toggleClass("underline");
    });

});
