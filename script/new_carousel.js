$('.exclusive-carousel').owlCarousel({
    loop:true,
    nav:true,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
            margin: 30
        },
        1000:{
            items:3.9,
            margin:30,
            autoWidth:true
        }
    }
});

