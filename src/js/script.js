$(document).ready(function(){
    $('.promo__carousel').slick({
        dots: true,
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/first_slider/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/first_slider/arrow_right.png"></button>'
    });
    $('.solution__carousel').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/solution/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/solution/arrow_right.png"></button>'
    });
});