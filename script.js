//
//The Rotation
//
const disk = document.querySelector('.disk');

let isDown = false,
    previousAngle = 0,
    angle = 0,
    currentX, 
    currentY,
    center = 300;



disk.addEventListener('mousedown', (e) => {
    e.preventDefault;
    isDown = true;    
})

document.body.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    
    if (e.buttons === 1) {
        currentX = e.clientX - disk.offsetLeft - center;
        currentY = e.clientY - disk.offsetTop - center;

        angle = Math.atan2(currentY, currentX) * 180 / Math.PI;
        disk.style.transform = `rotate(${angle}deg)`;
        console.log(angle);
    }
})

document.body.addEventListener('mouseup', () => {
    isDown = false;
    previousAngle = angle;
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
    emojiButton.style.color = 'white';
})

// the items 
const work = document.getElementById('work');
const photography = document.getElementById('photography');
work.addEventListener('click', ()=> {
    alert('Sorry the work is still in progress');
});
photography.addEventListener('click', ()=> {
    alert('im trying okay');
})



// rotation for phones
if (window.matchMedia('(max-width: 450px)').matches) {
    disk.addEventListener("touchstart", (e) => {
        e.preventDefault();
        isDown = true;
    });
  
    document.body.addEventListener("touchmove", (e) => {
        if (!isDown) return;
  
        if (e.touches.length === 1) {
        currentX = e.touches[0].clientX - disk.offsetLeft - 150;
        currentY = e.touches[0].clientY - disk.offsetTop - 150;
  
        angle = (Math.atan2(currentY, currentX) * 180) / Math.PI;
        disk.style.transform = `rotate(${angle}deg)`;
        }
    });

    document.body.addEventListener("touchend", () => {
        isDown = false;
        previousAngle = angle;
    });
}