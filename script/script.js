document.addEventListener('DOMContentLoaded', function () {
    /*
    const form = document.getElementById('form1');
    const pop_up = document.getElementById('pop-up');

    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        pop_up.setAttribute('class', 'pop-up__enable')

        form.reset();
    }

    $('.pop-up__close_button').on('click', function () {
        $('#pop-up').toggleClass('pop-up__enable');
    });
    */
});


const swiper = new Swiper('.bg-slider__wrapper', {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 0,
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },
});
const swiperAbout = new Swiper('.about-slider__images', {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 12,
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },
});

//-------------BACKGROUND-COLOR-CHANGE----------------------------------------------------------------

/*
function onEntry(entry) {
    entry.forEach(change => {

        if (change.isIntersecting) {
            $('.main').toggleClass('dark-bg');
        }

    });
}

let options = {
    threshold: [0.1]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.change-background');
//let elements = document.querySelectorAll('.light-background');

for (el of elements) {
    observer.observe(el);
}
*/
//-------------ADAPTIVE-TEXT-NEXT-SLIDER-----------------------------------------------------------------


setInterval(function () {
    if ($('.bg-slider__next>h1').text() != $('.bg-slider .swiper-slide-next h1').text()) {
        $('.bg-slider__next>h1').html($('.bg-slider .swiper-slide-next h1').clone());
    }
}, 250);

//-------------LIST-ITEMS-----------------------------------------------------------------

const sliderListItems = document.getElementsByName('city');
$('.city-list__items p').on('click', function () {
    $('#ct-list').prop('checked', false);
    for (let i = 0; i < sliderListItems.length; i++) {
        if (sliderListItems[i].checked) {
            $('.city-list__enter').html(`${sliderListItems[i].value}`);
        }
    }
});

//-------------REQUEST-IMG-----------------------------------------------------------------

if (window.innerWidth >= 1100) {
    var reqImg = document.querySelectorAll('.c-request__img img');
    const reqImgRotate = Array('rotate(-5.99deg)', 'rotate(-0.33deg)', 'rotate(-5.81deg)', 'rotate(-1.72deg)',
        'rotate(-10.5deg)', 'rotate(-5.99deg)', 'rotate(-0.33deg)', 'rotate(-5.81deg)', 'rotate(-1.72deg)', 'rotate(-10.5deg)');
    const reqIimgMarginTop = Array('0px', '-10.4px', '-24.4px', '-46px', '-77px', '-92px', '-102px', '-116px', '-138px', '-169px');
    const reqIimgMarginLeft = Array('0px', '52.8px', '105.3px', '161px', '226px', '263.5px', '316.5px', '369px', '424.7px', '490px');

    for (let i = 0; i < reqImg.length; i++) {
        reqImg[i].style.marginTop = reqIimgMarginTop[i];
        reqImg[i].style.transform = reqImgRotate[i];
        reqImg[i].style.marginLeft = reqIimgMarginLeft[i];
        //reqImg[i].style.transition = 'all 1s ease 2.5s';
    }
}

//-------------LOREM-IMG-----------------------------------------------------------------

var loremImg = document.querySelectorAll('.c-lorem__img > *');
var loremImgHorizontal = Array('-136px', '214px', '80px', '-205px', '389px', '-151px', '47px', '255px');
var loremImgVertical = Array('-161px', '-10px', '28px', '120px', '-110px', '33px', '0px', '-205px');
for (let i = 0; i < loremImg.length; i++) {
    if (i < loremImg.length / 2) {
        loremImg[i].style.left = loremImgHorizontal[i];
        if (i >= loremImg.length / 4) {
            loremImg[i].style.top = loremImgVertical[i];
        }
        else {
            loremImg[i].style.bottom = loremImgVertical[i];
        }
    }
    if (i >= loremImg.length / 2) {
        loremImg[i].style.right = loremImgHorizontal[i];
        if (i >= (loremImg.length / 4) + (loremImg.length / 2)) {
            loremImg[i].style.top = loremImgVertical[i];
        }
        else {
            loremImg[i].style.bottom = loremImgVertical[i];
        }
    }
}

//-------------MOUSE-PARALAX-----------------------------------------------------------------



//-------------CHECK-WEBP-----------------------------------------------------------------
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});