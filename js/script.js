$(window).on('load', function () {
    $('.apparition').css('opacity', 0);
    old = $(window).scrollTop();
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

var i = 0

$('#night').on('click', function () {

    if (i % 2 == 0) {

        //SVG
        $("svg").each(function () {
            $(this).attr('fill', "#000000");
        });

        //SVG LOGO
        $("path").each(function () {
            $(this).attr('fill', "#000000");
        });

        //BODY
        $("body").css('background-color', "#e6e6e6");

        //navBar
        $("aside").css('background-color', "#e6e6e6");
        $("a").css('color', "#000000");

        //TEXTES
        $("p").css('color', "#000000");
        $('h2').css('color', "#000000");
        $('h3').css('color', "#000000");

        i++;


    }

    else {
        $("svg").each(function () {
            $(this).attr('fill', "#e6e6e6");
        })
        $("path").each(function () {
            $(this).attr('fill', "#e6e6e6");
        });
        //BODY
        $("body").css('background-color', "#1e1e1e");

        //navBar
        $("aside").css('background-color', "#1e1e1e");
        $("a").css('color', "#e6e6e6");


        //TEXTES
        $("p").css('color', "#e6e6e6");
        $('h2').css('color', "#e6e6e6");
        $('h3').css('color', "#e6e6e6");

        i++;
    }

})
