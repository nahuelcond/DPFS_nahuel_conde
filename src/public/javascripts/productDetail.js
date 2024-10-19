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