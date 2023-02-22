//The Rotation
const disk = document.querySelector('disk');
const items = document.querySelectorAll('.disk');


const tl = gsap.timeline({defaults: {duration: 1.25}});
tl.fromTo(items, {scale: 0}, {scale: 1, rotation: '360deg'});

Draggable.create ('.disk', {type:'rotation'});



// contact me 
const emailButton = document.getElementById('emailButton');
const emailForm = document.querySelector('.emailForm');
const closeButton = document.getElementById('closeButton');

emailButton.addEventListener('click', ()=> {
    emailForm.classList.add('visible');
});
closeButton.addEventListener('click', ()=> {
    emailForm.classList.remove('visible');
})
