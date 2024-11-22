//TOGGLE

const toggleDescription = document.querySelector('.title-description');
const toggleAdditional = document.querySelector('.title-additional');

const contentDescription = document.querySelector('.text-description');
const contentAdditional = document.querySelector('.text-additional');

toggleDescription.addEventListener('click', ()=>{
    contentDescription.classList.toggle('hidden')
});
toggleAdditional.addEventListener('click', ()=>{
    contentAdditional.classList.toggle('hidden')
    
});


const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const slider = document.querySelector("#slider");
const sliderSection = 6;
btnLeft.addEventListener("click", e => moveToLeft(slider));
btnRight.addEventListener("click", e => moveToRight(slider));

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

function moveToLeft(slider,count) {
    
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