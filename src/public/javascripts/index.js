//CONST


const menuBarsIcon = document.querySelector('#container-menu-bars-icon');
const toggleMenuBars = document.querySelector('#container-menu-bars')

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


const btnLeft = document.querySelector(".btn-left");
const btnLeft1 = document.querySelector(".btn-left1");
const btnLeft2 = document.querySelector(".btn-left2");
const btnRight = document.querySelector(".btn-right");
const btnRight1 = document.querySelector(".btn-right1");
const btnRight2 = document.querySelector(".btn-right2");
const slider = document.querySelector("#slider");
const slider1 = document.querySelector("#slider1");
const slider2 = document.querySelector("#slider2");
const sliderSection = 6;



btnLeft.addEventListener("click", e => moveToLeft(slider));
btnLeft1.addEventListener("click", e => moveToLeft1(slider1));
btnLeft2.addEventListener("click", e => moveToLeft2(slider2));
btnRight.addEventListener("click", e => moveToRight(slider));
btnRight1.addEventListener("click", e => moveToRight1(slider1));
btnRight2.addEventListener("click", e => moveToRight2(slider2));



let operation = 0;
let widthImg = 100 / 6;
let count = 0



function moveToRight(slider) {
    if (count >= 3){
        operation= 0;
        slider.style.transform = `translate(-${operation}%)`;
        count=0;
        slider.style.transition = "none";
    } else{
        count++;
        operation = operation + widthImg;
        slider.style.transform = `translate(-${operation}%)`;
        slider.style.transition = "all ease .6s"
        console.log(count)

    }
};

function moveToLeft(slider) {
    
    count--;
    if (count < 0) {
        count = 3;
        operation = widthImg * (6-3);
        slider.style.transform = `translate(-${operation}%)`
        slider.style.transition = "none";
       
        console.log(count)
        console.log(operation)
    } else {
        operation = operation - widthImg;
        slider.style.transform = `translate(-${Math.abs(operation)}%)`
        slider.style.transition = "all ease .6s"
        console.log(count)
        console.log(operation)

    }

};

let count1 = 0
let operation1 = 0;

function moveToRight1(slider) {
    if (count1 >= 3){
        operation1= 0;
        slider.style.transform = `translate(-${operation1}%)`;
        count1=0;
        slider.style.transition = "none";
    } else{
        count1++;
        operation1 = operation1 + widthImg;
        slider.style.transform = `translate(-${operation1}%)`;
        slider.style.transition = "all ease .6s"
    }
};

function moveToLeft1(slider) {
    
    count1--;
    if (count1 < 0) {
        count1 = 3;
        operation1 = widthImg * (6-3);
        slider.style.transform = `translate(-${operation1}%)`
        slider.style.transition = "none";
       
        
    } else {
        operation1 = operation1 - widthImg;
        slider.style.transform = `translate(-${Math.abs(operation1)}%)`
        slider.style.transition = "all ease .6s"
        

    }

};

let count2 = 0;
let operation2 = 0;

function moveToRight2(slider) {
    if (count2 >= 3){
        operation2= 0;
        slider.style.transform = `translate(-${operation2}%)`;
        count2=0;
        slider.style.transition = "none";
    } else{
        count2++;
        operation2 = operation2 + widthImg;
        slider.style.transform = `translate(-${operation2}%)`;
        slider.style.transition = "all ease .6s"
       

    }
};

function moveToLeft2(slider) {
    
    count2--;
    if (count2 < 0) {
        count2 = 3;
        operation2 = widthImg * (6-3);
        slider.style.transform = `translate(-${operation2}%)`
        slider.style.transition = "none";
       
       
    } else {
        operation2 = operation2 - widthImg;
        slider.style.transform = `translate(-${Math.abs(operation2)}%)`
        slider.style.transition = "all ease .6s"
        

    }

};