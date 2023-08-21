import * as bootstrap from 'bootstrap';
import '../scss/style.scss';
import Splide from '@splidejs/splide';
import Macy from 'macy';
import WOW from 'wow.js';




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
                header.style.position = "static";
                header.style.top = 'unset';
                menuDarkener.classList.remove('opacity');
                setTimeout(() => {
                    menuDarkener.classList.remove('display');
                }, 300);
            } else {
                header.style.position = "fixed";
                header.style.top = '0px';
                menuDarkener.classList.add('display');
                setTimeout(() => {
                    menuDarkener.classList.add('opacity');
                }, 5);
            }
            menuDarkener.addEventListener('click', () => {
                header.style.position = "static";
                header.style.top = 'unset';
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

// LINK ANCHOR IN CROSS
    const anchor_buttons = document.querySelectorAll('.anchor-button');
    for (let button of anchor_buttons) {
        button.addEventListener('click',anchorClick);
}
    function anchorClick(e){
        e.preventDefault();
        let href = this.querySelector('a').href;
        let regex = /\/#[a-z0-9A-Z-_]*/g;
        let anchor = href.match(regex);
        const target = '_self';
        if(anchor != null && anchor.length > 0){
            anchor =  anchor[0].slice(1);
            const section = document.querySelector(anchor).offsetTop;
            console.log(section);
            scroll({
                top: section,
                behavior: "smooth"
            });
        }
        else{
            window.open(href,target);
        }
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
                autoplay: true,
                interval: 5500,
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

// REALIZATION GALLERY
       // macyJS
        const macy = Macy({
            container: '#macy-container',
            column:4,
            margin: {
                x:42,
                y:42
            } ,
            // columns: 6,
            breakAt: {
                1680: 3,
                992: 2,
                520: 1,
            }
        });

     // show full gallery
    const max_height = 2542;
    let current_height;
    const macy_container = document.querySelector('#macy-container');
    window.buttonExit = function(target) {

        current_height = macy_container.offsetHeight;
        current_height = current_height + 1000;
        if(current_height < max_height){
            macy_container.style.setProperty('--g-height', `${current_height}px`);
        }
        else{
            macy_container.style.setProperty('--g-height', `${max_height}px`);
            target.style.display = "none";
            target.parentNode.style.height = 0;
        }
     }
     // popup gallery
        const popup = document.querySelector('.popup');
        const content_popup = document.querySelector('.popup__content__img');
        const gallery = [...macy_container.querySelectorAll('.grid-item')];

        // show popup
        window.showPopup = function(target)  {
        popup.classList.add('show');
        content_popup.innerHTML = `<img src="${target.firstElementChild.src}" alt="${target.firstElementChild.alt}">`;
        content_popup.setAttribute('data-alt', `${target.firstElementChild.alt}`);
        }
        // close popup
        window.closePopup= function()  {
        popup.classList.remove('show');
        }
        window.prevImg= function(target)  {
            document.querySelector('.next_arrow').style.pointerEvents = "auto";
            document.querySelector('.next_arrow').style.opacity= '1'
            let popup_alt = target.nextSibling.nextSibling.getAttribute('data-alt');
               for(let i=0; i<gallery.length; i++){
                   let img_alt = gallery[i].getAttribute('data-name');
                   if(popup_alt == img_alt){
                       if(i != 0) {
                           target.style.pointerEvents = "auto";
                           content_popup.innerHTML = `<img src="${gallery[i - 1].firstElementChild.src}" alt="${gallery[i - 1].firstElementChild.alt}">`;
                           content_popup.setAttribute('data-alt', `${gallery[i - 1].firstElementChild.alt}`);
                       }
                       else{
                           target.style.pointerEvents = "none";
                           target.style.opacity= '.2'
                       }
                   }
               }
        };
        window.nextImg= function(target)  {
            document.querySelector('.prev_arrow').style.pointerEvents = "auto";
            document.querySelector('.prev_arrow').style.opacity= '1'
            let popup_alt = target.previousSibling.previousSibling.getAttribute('data-alt');

            for(let i=0; i<gallery.length; i++){
                let img_alt = gallery[i].getAttribute('data-name');

                if(popup_alt == img_alt){
                    if(i !== gallery.length - 1) {
                        target.style.pointerEvents = "unset";
                        content_popup.innerHTML = `<img src="${gallery[i + 1].firstElementChild.src}" alt="${gallery[i + 1].firstElementChild.alt}">`;
                        content_popup.setAttribute('data-alt', `${gallery[i + 1].firstElementChild.alt}`);
                    }
                    else{
                        target.style.pointerEvents = "rotate(12deg)";
                        target.style.opacity= '.2'
                    }
                }
            }

        }
new WOW().init();