//CONST
const shoppingCartIcon = document.querySelector('#shopping-cart');
const toggleShoppingCart = document.querySelector('#toggle-shopping-cart');

const menuBarsIcon = document.querySelector('#container-menu-bars-icon');
const toggleMenuBars = document.querySelector('#container-menu-bars')

shoppingCartIcon.addEventListener('click',()=>{
    toggleShoppingCart.classList.toggle('hidden')
});

menuBarsIcon.addEventListener('click',()=>{
    toggleMenuBars.classList.toggle('hidden')
});

let lastScrollTop = 0;
let header = document.querySelector('.container-header');
window.addEventListener('scroll',()=>{
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop<lastScrollTop){
        header.style.top="0";
    }
    console.log(lastScrollTop);
    lastScrollTop=scrollTop;
    console.log(scrollTop)
})



const headerMen = document.querySelector('.header-selector-1');
const headerWomen = document.querySelector('.header-selector-2');
const headerAccessories = document.querySelector('.header-selector-3');

const menuMen = document.querySelector('.menu-selector-1');
const menuWomen = document.querySelector('.menu-selector-2');
const menuAccessories = document.querySelector('.menu-selector-3');




headerMen.addEventListener('click', ()=>{
    header.style.top="-8em";
    lastScrollTop=0
    
});
headerWomen.addEventListener('click', ()=>{
    header.style.top="-8em";
    lastScrollTop=0

    
});
headerAccessories.addEventListener('click', ()=>{
    header.style.top="-8em";
    lastScrollTop=0

    
})

menuMen.addEventListener('click', ()=>{
    header.style.top="-8em";
    lastScrollTop=0
    toggleMenuBars.classList.toggle('hidden')
    
});
menuWomen.addEventListener('click', ()=>{
    header.style.top="-8em";
    lastScrollTop=0
    toggleMenuBars.classList.toggle('hidden')

    
});
menuAccessories.addEventListener('click', ()=>{
    header.style.top="-8em";
    lastScrollTop=0
    toggleMenuBars.classList.toggle('hidden')

    
})