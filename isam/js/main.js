$(function () {
    AOS.init({ duration: 800 });
});

const visual_list = new Swiper(".visual_list", {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 1000,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    pagination: {
        el: ".swiper-pagination",
        type: "progressbar", // 버튼 종류 설정..(bullets)(progressbar)
        clickable: true, //버튼 클릭여부
    },
});

//visual_pause_btn
$(".pause").click(function () {
    visual_list.autoplay.stop();
    $(".pause").hide();
    $(".play").show();
});
$(".play").click(function () {
    visual_list.autoplay.start();
    $(".play").hide();
    $(".pause").show();
});

const depart_list = new Swiper(".depart_list", {
    loop: true,
    centeredSlides: false,
    slidesPerView: 1.5,
    spaceBetween: 30,
    breakpoints: {
        1200: { //min 이상부터 
            slidesPerView: 5,
        },
        900: { //min 이상부터 
            slidesPerView: 4,
        },
        650: { //min 이상부터 
            slidesPerView: 3,
        },
        500: { //min 이상부터 
            slidesPerView: 2.5,
            centeredSlides: true,
        },
        300: { //min 이상부터 
            slidesPerView: 1.5,
        },
    },
});

const loop_txt = new Swiper(".loop_txt", {
    loop: true,
    spaceBetween: 30,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 50000,
    breakpoints: {
        800: { //min 이상부터 
            spaceBetween: 100,
        },
    },
});

const docter_list = new Swiper(".docter_list", {
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
        disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    speed: 1000,
    breakpoints: {
        1200: { slidesPerView: 1.5, spaceBetween: 30 }, //수정
        750: { slidesPerView: 1.2, spaceBetween: 20 }, //수정
        0: { slidesPerView: 1.1, spaceBetween: 10 } //수정
    },
    on: {
        slideChange: function () {
            let activeIndex = this.realIndex;
            $(".docter_list2 > ul > li").eq(activeIndex).addClass("active").siblings().removeClass("active");
        }
    }
});

$('#gotop').hide();
$(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
        $('#gotop').fadeIn(200);
    } else {
        $('#gotop').fadeOut(200);
    }
});

$(".up").click(function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

$(".quick-list").hide();
$(".quick-toggle").click(function () {
    $(".quick-list").stop().slideToggle();
});