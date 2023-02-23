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


//The Rotation and animations
const disk = document.querySelector('disk');
const items = document.querySelectorAll('.disk');
const mainText = document.getElementById('mainText');
const mainCode = document.getElementById('mainCode');


const tl = gsap.timeline({defaults: {duration: 1.25}});
tl.fromTo(items, {scale: 0}, {scale: 1, rotation: '360deg'});
tl.fromTo(mainText, {opacity: 0, x: 300}, {opacity: 1, x: 0}, '<50%');
tl.fromTo(emailButton, {opacity: 0, y: -50}, {opacity: 1, y: 0}, '<50%');
tl.fromTo(mainCode, {opacity: 0, y: -50}, {opacity: 1, y: 0}, '<35%');


Draggable.create ('.disk', {type:'rotation'});



