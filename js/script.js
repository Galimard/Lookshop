$(document).ready(function(){
    $('.tabs__menu-link').click(function(e) { //при клике на ссылку таба
        e.preventDefault(); //останавливаем загрузку страницы сслыки. Правильно?
        $('.tabs__menu-link--active').removeClass('tabs__menu-link--active'); //находим все табы с данным классом и удаляем класс актив
        $(this).addClass('tabs__menu-link--active'); //у нажатой ссылки добавляем класс актив
        const tab = $(this).attr('href'); //достаем адрес нужного блока с новым текстом
        $('.carousel').not(tab).css({'display':'none'}); //скрываем остальные вкладки
        $(tab).fadeIn(400); //плавно проявляем новый блок
    });
});