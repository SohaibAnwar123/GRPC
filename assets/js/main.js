// hero slick start 
$('.hero_slick').slick({
    speed: 500,
    slidesToShow: 1,
    autoplay:true,
    autoplaySpeed:3000,
    centerMode: true,
    arrows: false,
    dots: true,
    swipe: true,
    swipeToSlide: true,

    nextArrow: '.slick-next',
    prevArrow: '.slick-prev',

    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 1,
            centerMode: false,
        }

    }, {
        breakpoint: 800,
        settings: {
            slidesToShow: 1,
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }]
});

// hero_slick end


// troll_slick start 
// $('.troll_slick').slick({
//     speed: 500,
//     slidesToShow: 4,
//     autoplay:false,
//     autoplaySpeed:1500,
//     centerMode: false,
//     arrows: true,
//     dots: false,
//     swipe: true,
//     swipeToSlide: true,

//     nextArrow: '.slick-next',
//     prevArrow: '.slick-prev',

//     responsive: [{
//         breakpoint: 1024,
//         settings: {
//             slidesToShow: 3,
//             centerMode: false,
//         }

//     }, {
//         breakpoint: 800,
//         settings: {
//             slidesToShow: 3,
//         }
//     }, {
//         breakpoint: 480,
//         settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//         }
//     }]
// });

// troll_slick end

// customer_slick start 
$('.customer_slick').slick({
    speed: 500,
    slidesToShow: 1,
    autoplay:true,
    autoplaySpeed:3000,
    centerMode: false,
    arrows: false,
    dots: true,
    swipe: true,
    swipeToSlide: true,

    nextArrow: '.slick-next',
    prevArrow: '.slick-prev',

    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 1,
            centerMode: false,
        }

    }, {
        breakpoint: 800,
        settings: {
            slidesToShow: 1,
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }]
});

// customer_slick end


