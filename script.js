let searchButton = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');

let loginButton = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let loginFormClose = document.querySelector('#form-close');

let menuBar = document.querySelector('#menu-bar');
let nagivationBar = document.querySelector('.navigationBar');

let videoButton = document.querySelectorAll('.vid-btn');

window.onscroll = () => {
    searchButton.classList.remove('fa-times');
    searchBar.classList.remove('active');

    menuBar.classList.remove('fa-times');
    nagivationBar.classList.remove('active');

    loginForm.classList.remove('active');
}

menuBar.addEventListener('click', () => {
    menuBar.classList.toggle('fa-times');
    nagivationBar.classList.toggle('active');
})

searchButton.addEventListener('click', () => {
    searchButton.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
})

loginButton.addEventListener('click', () => {
    loginForm.classList.add('active');
})

loginFormClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
})

videoButton.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
})

// slider UI for review section
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// slider UI for brand selection section
var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
    },
});