$('.sliderHero').slick({
    slidesToShow: 1,
    centerMode: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'ease',
    dots: true,
    infinite: true,
    arrows: false,
});

$('#carousel-marcas').slick({
    slidesToShow: 5,
    centerMode: true,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    cssEase: 'ease',
    dots: false,
    infinite: true,
    arrows: false,
    responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 5,
                variableWidth: true,
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 5,
                variableWidth: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 5,
                variableWidth: true
            }
        }

    ]
});
$('#carousel-Square').slick({
    slidesToShow: 3,
    centerMode: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: 'ease',
    dots: true,
    infinite: true,
    arrows: false,
    responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        }
    ]
});
$('#carousel-Square2').slick({
    slidesToShow: 3,
    centerMode: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: 'ease',
    dots: true,
    infinite: true,
    arrows: false,
});
$('.carousel-comentarios1').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    dots: true,
    arrows: false,
});
$('.carousel-comentarios2').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    dots: true,
    arrows: false,
});
$('.carousel-comentarios3').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    dots: true,
    arrows: false,
});

$('#carousel-marcasMobile').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    cssEase: 'ease',
    dots: false,
    infinite: true,
    arrows: false,
});

const items = document.querySelectorAll(".modal");

items.forEach(element => {
    element.addEventListener('click', function () {
        const modal = element.getAttribute('data-target');
        const a = document.querySelector('.' + modal);
        $(a).fadeIn('fast');
        window.onclick = function (event) {
            if (event.target == a) {
                $(a).fadeOut('fast');
            }
        }
    })
});


var menu = document.querySelector('.menuHamburguer');
menu.addEventListener('click', function () {
    if ($('.menu').is(':hidden')) {
        $('.menu').fadeIn("fast")
        $('.menuHamburguer').find("a").find("img").fadeToggle("fast")
        $('.menuHamburguer').find("a").find("img").attr('src', './img/svg/menu-close.svg')
        $('.menuHamburguer').find("a").find("img").fadeToggle("fast")
    } else {
        $('.menu').fadeOut("fast")
        $('.menuHamburguer').find("a").find("img").fadeToggle("fast")
        $('.menuHamburguer').find("a").find("img").attr('src', './img/svg/menu.svg')
        $('.menuHamburguer').find("a").find("img").fadeToggle("fast")
    }
});

var drops = document.querySelectorAll('.dropdown');
drops.forEach(element => {
    element.addEventListener('click', function () {
        $(element.nextSibling.nextSibling).toggleClass('rotate')
        var dropdown = element.nextSibling.nextSibling.nextSibling.nextSibling;
        $(dropdown).slideToggle("slow");
    })
});

$('.dropdownUbicacion').click(function () {
    // $(this.nextSibling).slideToggle();
    $(this).next().slideToggle();
    $(this).toggleClass('rotate')
})