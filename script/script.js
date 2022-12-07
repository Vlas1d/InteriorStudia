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

$('.city-list__items p').on('click', function () {
    $('#ct-list').prop('checked', false);
});

$('.bg-slider__next>h1').html('Perfect<br> proportions'); //$('.bg-slider .swiper-slide-next').textContent

//------------------------------------------------------------------------------------------
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