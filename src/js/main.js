import * as bootstrap from 'bootstrap';
import '../scss/style.scss';






// HEADER
// ...show dropdown
    const submenuLi = document.querySelector('.submenu');
    const submenu = document.querySelector('.submenu__dropdown');
    const div_section = document.querySelector('.scrollspy-example-2')

    submenuLi.addEventListener('click', function (){
        if(submenu.classList.contains('active')){
            console.log('gg');
            submenu.classList.remove('active');
            submenuLi.classList.remove('active');
        }
        else{
            console.log('ff');
            submenu.classList.add('active');
            submenuLi.classList.add('active');
        }
    });
    div_section.addEventListener('click', function (){
        if(submenu.classList.contains('active')){
            console.log('zz');
            submenu.classList.remove('active');
            submenuLi.classList.remove('active');
        }
        else{
          return
        }
    });
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