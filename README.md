# This is the main page for the portfolio; 


# Techs used:
1. html
2. css
3. js;
4. GSAP;


# Link:
https://gigatokhishvili.github.io/my-work/ ;


# Possibilities:
1. The main div in the middle is rotatable (or at least it should be).
2. (not yet)You can click on each icon to see a preview of the website it corresponds to;
3. The icons at the bottom right are also clickable;
4. You can send me an email;

# Issues and things I learned:
1. The rotation. Initially it was a simple rotation based on the x position of the initial mouse click and current mouse position. Figured out I could use Math.atan2 to calculate the angle and implemented that method;
Finally I stumpled upon GreenSock... what a relief;
2. Select. The div in the background the text and the icons were getting selected. Learned about 'user-select: none' and e.preventDefault;
3. Learned how to use animations;
4. Learned how to implement a functional contact form;
