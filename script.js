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

