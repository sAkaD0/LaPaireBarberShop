$(window).on('load', function () {
    $('.apparition').css('opacity', 0);
    old = 0;
    console.log(innerWidth);
})
$(window).scroll(function () {


    hauteur = $(window).scrollTop() + $(window).height()

    if ($(window).scrollTop() >= old + 50) {
        $('.apparition').each(function () {
            if ($(this).offset().top < hauteur) {
                $(this).css('opacity', 1);
                old = $(window).scrollTop();
            }
        })

    }
});

$('#burger').on("click", function () {
    now = $('nav').css('display')
    if (now == 'grid') {
        $('nav').css('display', 'none');
    }

    else {
        $('nav').css('display', 'grid');
    }
})
