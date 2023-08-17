import * as bootstrap from 'bootstrap';
import '../scss/style.scss';
import Splide from '@splidejs/splide';





// HEADER
// ...show dropdown
    const submenuLi = document.querySelector('.submenu');
    const submenu = document.querySelector('.submenu__dropdown');
    const div_section = document.querySelector('.scrollspy-example-2')

    submenuLi.addEventListener('click', function (){
        if(submenu.classList.contains('active')){
            submenu.classList.remove('active');
            submenuLi.classList.remove('active');
        }
        else{
            submenu.classList.add('active');
            submenuLi.classList.add('active');
        }
    });
    div_section.addEventListener('click', function (){
        if(submenu.classList.contains('active')){
            submenu.classList.remove('active');
            submenuLi.classList.remove('active');
        }
        else{
          return
        }
    });
    // hamburger menu
    const hamburger = document.querySelector('#hamburger');
    const nav_container = document.querySelector('#navbar-menu');
    const menuDarkener = document.querySelector('.blur');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    nav_container.classList.toggle('is-active');
    if (menuDarkener.classList.contains('display')) {
        menuDarkener.classList.remove('opacity');
        setTimeout(() => {
            menuDarkener.classList.remove('display');
        }, 300);
    } else {
        menuDarkener.classList.add('display');
        setTimeout(() => {
            menuDarkener.classList.add('opacity');
        }, 5);
    }
    menuDarkener.addEventListener('click', () => {
        hamburger.classList.remove('open');
        nav_container.classList.remove('is-active');
        menuDarkener.classList.remove('opacity');
        setTimeout(() => {
            menuDarkener.classList.remove('display');
        }, 300);
    });
});
const all_li_menu = [...document.querySelectorAll('#navbar-menu li')];
        all_li_menu.forEach(li => {
            li.addEventListener('click', function (){


                if(!li.classList.contains('submenu') && !li.classList.contains('nav-menu_search')){
                    hamburger.classList.remove('open');
                    nav_container.classList.remove('is-active');
                    menuDarkener.classList.remove('opacity');
                    setTimeout(() => {
                        menuDarkener.classList.remove('display');
                    }, 300);
                }
            })
        })

    // search input show
    const search_li = document.querySelector('.nav-menu_search img');
    const search_input = document.querySelector('.search_content');

    search_li.addEventListener('click', function (){
        search_input.classList.toggle('active');
    });

    // header show scroll up

    const header = document.querySelector('header');

        window.onscroll = function() {
            scrollHeader();
        };
        const bodyTop= 100;
        let lastBodyHeight = 0;
    function scrollHeader(){
        const height = document.getScroll()[1];
        if( height > bodyTop ){
            header.classList.add("fixed");
        } else {
            header.classList.remove("fixed");
            header.classList.remove("go_down");
        };
        if(header.classList.contains('fixed')) {
            if (height > lastBodyHeight) {
                header.classList.remove("go_down");
            } else {
                header.classList.add("go_down");
            }
            ;
        }
        lastBodyHeight = height;
    }

    document.getScroll = function() {
    if (window.pageYOffset != undefined) {
        return [pageXOffset, pageYOffset];
    } else {
         let y = document.body.scrollTop ;
        return [y];
    }
}

let bannerModals = document.getElementsByClassName('banner-video-modal');
let videoSlides = document.getElementsByClassName('slide-popup');
let bannerModalsDarkener = document.getElementsByClassName('banner-modal-darkener')[0];
if (bannerModals && videoSlides && bannerModalsDarkener) {
    Array.from(videoSlides).forEach(slide => {
        slide.addEventListener('click', () => {
            passive: true;
            Array.from(bannerModals).forEach(modal => {
                if (modal.dataset.key == slide.dataset.key) {
                    modal.classList.add('is-active');
                    bannerModalsDarkener.classList.add('is-active');
                    modal.querySelector('video').play();
                }
            });
        });
    });
    Array.from(bannerModals).forEach(modal => {
        modal.querySelector('.banner-modal-cross').addEventListener('click', () => {
            modal.classList.remove('is-active');
            bannerModalsDarkener.classList.remove('is-active');
            modal.querySelector('video').pause();
            modal.querySelector('video').currentTime = 0;
        });
    })
    bannerModalsDarkener.addEventListener('click', () => {
        Array.from(bannerModals).forEach(modal => {
            modal.classList.remove('is-active');
            bannerModalsDarkener.classList.remove('is-active');
            modal.querySelector('video').pause();
            modal.querySelector('video').currentTime = 0;
        });
    })
}

//
// INTRO SPLIDE
function checkForSplide() {
    if (typeof Splide == 'function') {
        if (document.querySelector('.splide')) {
            const slider_timer = document.getElementById('slider-timer');
            slider_timer.style.setProperty('--mw', '0%');
            let timeout;
            let interval;

            const splide = new Splide('.splide', {
                autoplay: false,
                interval: 8500,
                type: 'loop',
                dragMinThreshold: {
                    mouse: 0,
                    touch: 10,
                },
                drag: true,
                arrows: true,
                arrowPath:'M37.2049 25.0607C37.7907 24.4749 37.7907 23.5251 37.2049 22.9393L27.6589 13.3934C27.0732 12.8076 26.1234 12.8076 25.5376 13.3934C24.9518 13.9792 24.9518 14.9289 25.5376 15.5147L34.0229 24L25.5376 32.4853C24.9518 33.0711 24.9518 34.0208 25.5376 34.6066C26.1234 35.1924 27.0732 35.1924 27.6589 34.6066L37.2049 25.0607ZM11.8558 25.5H36.1442V22.5H11.8558V25.5Z'
            }).mount();
            splide.on('move', (e) => {
                slider_timer.classList.remove('visible');
                slider_timer.style.setProperty('--mw', '0%');
                clearTimeout(timeout);
                clearInterval(interval);
            });
        }
    } else {
        setTimeout(checkForSplide, 500);
    }
}
checkForSplide();
