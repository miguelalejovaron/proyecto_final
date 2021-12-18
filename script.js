// AOS.init();

$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 0,
    responsiveClass: true,
    responsive: {
        0:{
            items: 1,
        },
        768:{
            items: 2,
        },
        1024:{
            items: 3,
        },
        1400:{
            items: 3,
            loop: false,
        }
    }
});

var $owl = $('#carousel1');
$owl.children().each(function( index ){
    $(this).attr('data-position', index);
});

$("$carousel1").owlCarousel({
    loop: false,
    center: true,
    margin: 0,
    responsiveClass: true,
    nav: false,
    responsive: {
        0:{
            items: 1,
        },
        680:{
            items: 2,
        },
        1024:{
            items: 3,
        },
        1400:{
            items: 3,
            loop: false,
        }
    }
});

$(document).on('click', '.owl-item>div', function(){
    var $speed = 1000;
    $owl.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
});
