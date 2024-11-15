



$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
});
});
$(document).ready(function(){
    $('.gg').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive :[ 
            {
                breakpoint : 990,
                settings :{
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1000,
                }
            },
            {
                breakpoint : 459,
                settings :{
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1000,
                }
            },
            {
                breakpoint : 767,
                settings :{
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1000,
                }
            },


        ]
});
});



// $(document).ready(function(){
// $('.image').slick({
//     dots: true,
//     infinite: true,
//     speed: 500,
//     fade: true,
//     autoplay: true,
//     autoplaySpeed: 1000,
//     cssEase: 'linear'
// });
// });