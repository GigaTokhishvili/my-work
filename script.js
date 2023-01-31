//the Rotation
const disk = document.querySelector('.disk');

let isDown = false;
let lastRotation = 0;
let dragSize = 0;

let startX;
let scrollX;

let startY;
let scrollY;



disk.addEventListener('mousedown', (e) => {
    setTimeout(() => {
        e.preventDefault;
        isDown = true;
        disk.style.pointerEvents = 'none';
    
        startX = e.pageX - disk.offsetLeft;
        startY = e.pageY - disk.offsetTop;
    }, 100)
})

document.body.addEventListener('mousemove', (e) => {
    if (!isDown) return;

    if (e.buttons === 1) {
    scrollX = e.pageX - disk.offsetLeft;
    scrollY = e.pageY - disk.offsetTop;
    
    dragSize = scrollX - startX + scrollY - startY;

    
    disk.style.transform = `rotate(${(dragSize + lastRotation) / 3}deg)`;
   }
})

document.body.addEventListener('mouseup', () => {
    isDown = false;
    disk.style.pointerEvents = 'auto';
    lastRotation += dragSize;
})

// emoji generator 
const emojiButton = document.getElementById('emojiGen');
const emojis = ['<i class="fa-regular fa-face-smile-beam"></i>', '<i class="fa-regular fa-face-smile"></i>', '<i class="fa-regular fa-face-laugh-beam"></i>', '<i class="fa-regular fa-face-grin-squint"></i>', '<i class="fa-regular fa-face-grin-stars"></i>', '<i class="fa-regular fa-face-laugh-wink"></i>'];

emojiButton.addEventListener('click', ()=> {
    const rand = Math.floor(Math.random() * emojis.length);
    emojiButton.innerHTML = emojis[rand];
})

// the items 
const work = document.getElementById('work');
const photography = document.getElementById('photography');
// const body = document.querySelector('body');
// if (!isDown) {
//     work.addEventListener('click', ()=> {
//         const newSpan = document.createElement('span');
//         body.appendChild(newSpan);
//         newSpan.innerText = 'Sorry the work still in progress';
//         newSpan.style.fontFamily = 'Arial, Helvetica, sans-serif';
//         newSpan.style.fontSize = '20px';
//         newSpan.style.color = 'white';
//         newSpan.style.position = 'absolute';
//         const {top, left} = work.getBoundingClientRect();
//         newSpan.style.top = `${top}px`;
//         newSpan.style.left = `${left}px`;
//     }, {once : true});    
// }
work.addEventListener('click', ()=> {
    alert('Sorry the work is still in progress');
});
photography.addEventListener('click', ()=> {
    alert('Will be done very soon');
});