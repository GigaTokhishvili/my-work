//the Rotation
const disk = document.querySelector('.disk');

let isDown = false;
let lastRotation = 0;
let angle = 0;

let startX, currentX, startY, currentY;

disk.addEventListener('mousedown', (e) => {
    setTimeout(() => {
        e.preventDefault;
        isDown = true;
        startX = e.clientX;
        startY = e.clientY;
    }, 100)
})

document.body.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    
    if (e.buttons === 1) {
        currentX = e.clientX;
        currentY = e.clientY;

        angle = Math.atan2(currentY - startY, currentX - startX) * 180 / Math.PI;
        
        disk.style.transform = `rotate(${(angle + lastRotation) * 2}deg)`;
    }
    console.log(angle);
})

document.body.addEventListener('mouseup', () => {
    isDown = false;
    disk.style.pointerEvents = 'auto';
    lastRotation += angle;
})

// emoji generator 
const body = document.querySelector('body');
const emojiButton = document.getElementById('emojiGen');
const emojis = ['<i class="fa-regular fa-face-smile-beam"></i>', '<i class="fa-regular fa-face-smile"></i>', '<i class="fa-regular fa-face-laugh-beam"></i>', '<i class="fa-regular fa-face-grin-squint"></i>', '<i class="fa-regular fa-face-grin-stars"></i>', '<i class="fa-regular fa-face-laugh-wink"></i>', '<i class="fa-solid fa-face-flushed"></i>','<i class="fa-regular fa-face-rolling-eyes"></i>', '<i class="fa-regular fa-face-grin-hearts"></i>'];

emojiButton.addEventListener('click', ()=> {
    const randomEmoji = Math.floor(Math.random() * emojis.length);

    emojiButton.innerHTML = emojis[randomEmoji];

    const newSpan = document.createElement('span');
    newSpan.style.position = 'absolute';
    newSpan.innerText = 'Have a beautiful day!';
    newSpan.style.color = 'white';
    newSpan.style.fontSize = "20px";
    newSpan.style.bottom = '70px';
    newSpan.style.right = '20px';
    newSpan.style.fontSize = "'Montserrat', sans-serif'";
    body.appendChild(newSpan);
})

// the items 
const work = document.getElementById('work');
const photography = document.getElementById('photography');

work.addEventListener('click', ()=> {
    alert('Sorry the work is still in progress');
});
photography.addEventListener('click', ()=> {
    alert('Will be done very soon');
});