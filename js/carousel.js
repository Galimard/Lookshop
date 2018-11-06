$(document).ready(function(){

   //карусель в tabs-product

    // $('.carousel').slick({
    //     arrows: true,
    //     appendArrows: $('.controls'),
    //     prevArrow: '<a href="#" class="controls__link controls-link__left">налево</a>',
    //     nextArrow: '<a href="#" class="controls__link controls-link__right">направо</a>',
    //     infinite: true,
    //     slidesToShow: 6,
    //     slidesToScroll: 1,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 1,
    //                 infinite: false,
    //                 arrows: true,
    //                 dots: false
    //             }
    //         },
    //         {
    //             breakpoint: 700,
    //             settings: {
    //                 arrows: true,
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    // });

    $('.header-carousel').slick({
        arrows: true,
        dots: true,
        // dotsClass: 'header-carousel__indicator'
        prevArrow: '<a href="#" class="header-carousel__prev"></a>',
        nextArrow: '<a href="#" class="header-carousel__next"></a>',
    });

});