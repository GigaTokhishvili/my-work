//
//The Rotation
//
const disk = document.querySelector('.disk');

let isDown = false;
let startX = 0;
let startY = 0;
let initialAngle = 0;
let previousAngle = 0;
let angle = 0;
let currentX 
let currentY
let center = 300;  //circle diameter is 600px

if (window.matchMedia('(max-width: 450px)').matches) {
    disk.addEventListener("touchstart", (e) => {
        e.preventDefault();
        isDown = true;

        currentX = e.touches[0].clientX - disk.offsetLeft - 150;
        currentY = e.touches[0].clientY - disk.offsetTop - 150;
        initialAngle = 180 + Math.atan2(currentY, currentX) * 180 / Math.PI;
    });
  
    document.body.addEventListener("touchmove", (e) => {
        if (!isDown) return;
  
        if (e.touches.length === 1) {
        currentX = e.touches[0].clientX - disk.offsetLeft - 150;
        currentY = e.touches[0].clientY - disk.offsetTop - 150;
  
        angle = 180 + (Math.atan2(currentY, currentX) * 180) / Math.PI;
        disk.style.transform = `rotate(${previousAngle + (angle - initialAngle)}deg)`;
        }
    });

    document.body.addEventListener("touchend", () => {
        isDown = false;
        previousAngle += angle - initialAngle;
    });
} else {



    // desktop version
    disk.addEventListener('mousedown', (e) => {
        e.preventDefault;
        isDown = true;
        currentX = e.clientX - disk.offsetLeft - center;
        currentY = e.clientY - disk.offsetTop - center;
        initialAngle = 180 + Math.atan2(currentY, currentX) * 180 / Math.PI;
        
    })

    document.body.addEventListener('mousemove', (e) => {
        if (!isDown) return;
    
        if (e.buttons === 1) {
            currentX = e.clientX - disk.offsetLeft - center;
            currentY = e.clientY - disk.offsetTop - center;

            angle = 180 + Math.atan2(currentY, currentX) * 180 / Math.PI;
            disk.style.transform =`rotate(${previousAngle + (angle - initialAngle)}deg)`;
        }
    })

    document.body.addEventListener('mouseup', () => {
        isDown = false;
        previousAngle += angle - initialAngle;
    })
}

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


// the items 
const work = document.getElementById('work');
const photography = document.getElementById('photography');
work.addEventListener('click', ()=> {
    alert('Sorry the work is still in progress');
});
photography.addEventListener('click', ()=> {
    alert('im trying okay');
})