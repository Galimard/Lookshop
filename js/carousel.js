$(document).ready(function(){

   //карусель в tabs-product

    $('.carousel').slick({
        appendArrows: $('.controls'),
        prevArrow: '<a href="#" class="controls__link controls-link__left"></a>',
        nextArrow: '<a href="#" class="controls__link controls-link__right"></a>',
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1
    });

});