$(document).ready(function() {

    initializeTabs();

    //переключение вкладок в tabs-product
    $('.tabs__menu-link').click(function(e) {
        e.preventDefault();

        var $item = $(this).closest('.tabs-menu__item'),
            $contentItems = $('.carousel'),
            itemPosition = $($item).data('class'),
            $currentTab = false;

        $($item).siblings().removeClass('tabs-menu__item--active');
        $($item).addClass('tabs-menu__item--active');
        $currentTab = $contentItems.filter('.carousel-' + itemPosition);
        $currentTab.siblings().removeClass('carousel--active');
        $currentTab.addClass('carousel--active');
        initializeCurrentSlider($currentTab);
    });

    //слайдер в хедере
    if($('.header-carousel')) {
        $('.header-carousel').slick({
            infinite: true,
            arrows: true,
            dots: true,
            prevArrow: '<a href="#" class="header-carousel__prev"></a>',
            nextArrow: '<a href="#" class="header-carousel__next"></a>',
        });
    }

});

//Первоначальная инициализация слайдеров табов
function initializeTabs(){
    $('.carousel--active').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        appendArrows: $('.controls'),
        prevArrow: '<a href="#" class="controls__link controls-link__left"></a>',
        nextArrow: '<a href="#" class="controls__link controls-link__right"></a>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    unslick: true
                }
            }
        ]
    })
}

//Инициализирует слайдер на активной вкладке
//@param $currentTab (jquery selector) - текущий селектор для карусели на вкладке
function initializeCurrentSlider($currentTab){
    'use strict';
    $('.carousel.slick-slider').slick('destroy');

    $($currentTab).slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        appendArrows: $('.controls'),
        prevArrow: '<a href="#" class="controls__link controls-link__left"></a>',
        nextArrow: '<a href="#" class="controls__link controls-link__right"></a>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    unslick: true
                }
            }
        ]
    });

}