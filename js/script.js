$(document).ready(function(){

    //переключение вкладок в tabs-product

    $('.tabs__menu-link').click(function(e) { //при клике на ссылку таба
       var tab = $(this).attr('href'); //достаем адрес нужного блока с новым текстом
        e.preventDefault(); //останавливаем загрузку страницы сслыки. Правильно?
        $('.tabs__menu-link--active').removeClass('tabs__menu-link--active'); //находим все ссылки с данным классом и удаляем класс актив
        $(this).addClass('tabs__menu-link--active'); //у нажатой ссылки добавляем класс актив


       $(tab).css({'display':'flex'}); //показываем текущую вкладку
       $('.carousel').not(tab).css({'display':'none'}); //скрываем остальные вкладки, если честно, не понимаю почему эту строчку пришлось добавить, но без нее правильно не работало
    });

    $('.header-carousel').slick({
        arrows: true,
        dots: true,
        prevArrow: '<a href="#" class="header-carousel__prev"></a>',
        nextArrow: '<a href="#" class="header-carousel__next"></a>',
    });

    $('#carousel-one').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        appendArrows: $('.controls'),
        prevArrow: '<a href="#" class="controls__link controls-link__left"></a>',
        nextArrow: '<a href="#" class="controls__link controls-link__right"></a>',
    });
});