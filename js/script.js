$(document).ready(function(){

    //переключение вкладок в tabs-product

    $('.tabs__menu-link').click(function(e) { //при клике на ссылку таба
        e.preventDefault(); //останавливаем загрузку страницы сслыки

       var tab = $(this).attr('href'); //достаем адрес нужного блока с новым текстом

        $('.tabs__menu-link--active').removeClass('tabs__menu-link--active'); //находим все ссылки с данным классом и удаляем класс актив
        $(this).addClass('tabs__menu-link--active'); //у нажатой ссылки добавляем класс актив
       $(tab).css({'display':'flex'}); //показываем текущую вкладку
       $('.carousel').not(tab).css({'display':'none'}); //скрываем остальные вкладки, если честно, не понимаю почему эту строчку пришлось добавить, но без нее правильно не работало
    });

    //слайдер в хедере

    $('.header-carousel').slick({
        arrows: true,
        dots: true,
        prevArrow: '<a href="#" class="header-carousel__prev"></a>',
        nextArrow: '<a href="#" class="header-carousel__next"></a>',
    });

    //слайдер в carousel-product

    $('#carousel-one').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        appendArrows: $('.controls'),
        prevArrow: '<a href="#" class="controls__link controls-link__left"></a>',
        nextArrow: '<a href="#" class="controls__link controls-link__right"></a>',
    });

    $('#carousel-two').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        appendArrows: $('.controls'),
        prevArrow: '<a href="#" class="controls__link controls-link__left"></a>',
        nextArrow: '<a href="#" class="controls__link controls-link__right"></a>',
    });

    $('#carousel-three').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        appendArrows: $('.controls'),
        prevArrow: '<a href="#" class="controls__link controls-link__left"></a>',
        nextArrow: '<a href="#" class="controls__link controls-link__right"></a>',
    });

    $('#carousel-four').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        appendArrows: $('.controls'),
        prevArrow: '<a href="#" class="controls__link controls-link__left"></a>',
        nextArrow: '<a href="#" class="controls__link controls-link__right"></a>',
    });
});

//responsive: [
//     //     {
//     //         breakpoint: 1024,
//     //         settings: {
//     //             slidesToShow: 3,
//     //             slidesToScroll: 1,
//     //             infinite: false,
//     //             arrows: true,
//     //             dots: false
//     //         }
//     //     },
//     //     {
//     //         breakpoint: 700,
//     //         settings: {
//     //             arrows: true,
//     //             slidesToShow: 2,
//     //             slidesToScroll: 2
//     //         }
//     //     },
//     //     {
//     //         breakpoint: 480,
//     //         settings: {
//     //             slidesToShow: 1,
//     //             slidesToScroll: 1
//     //         }
//     //     }]

// $('.tabs__menu-link').click(function(e) { //при клике на ссылку таба
//     e.preventDefault(); //останавливаем загрузку страницы сслыки
//
//     var tab = $(this).attr('href'); //достаем адрес нужного блока с новым текстом
//
//     $('.tabs__menu-link--active').removeClass('tabs__menu-link--active'); //находим все ссылки с данным классом и удаляем класс актив
//     $(this).addClass('tabs__menu-link--active'); //у нажатой ссылки добавляем класс актив
//     $(tab).css({'display':'flex'}); //показываем текущую вкладку
//     $('.carousel').not(tab).css({'display':'none'}); //скрываем остальные вкладки, если честно, не понимаю почему эту строчку пришлось добавить, но без нее правильно не работало
// });