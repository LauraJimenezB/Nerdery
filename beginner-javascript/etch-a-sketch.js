const canvas = document.querySelector('#etch-a-sketch');
const context = canvas.getContext('2d');
const shakeBtn = document.querySelector('.shake');
const {width, height} = canvas;
const MOVE_AMOUNT = 20; // all caps & underscore: true constant, will never change

context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 20;

//random x and y position
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
let hue = 0;
context.strokeStyle = `hsl(${hue}, 100%, 50%)`;

context.beginPath();
context.moveTo(x, y);
context.lineTo(x, y);
context.stroke();

function draw ({key}) {
    hue += 10;
    context.strokeStyle = `hsl(${hue}, 100%, 50%)`; //explicitely update strokeStyle() inside the draw function
    context.beginPath();
    context.moveTo(x, y);

    switch (key) {
        case 'ArrowUp':
            y -= MOVE_AMOUNT;
            break;
        case 'ArrowDown':
            y += MOVE_AMOUNT;
            break;
        case 'ArrowLeft':
            x -= MOVE_AMOUNT;
            break;
        case 'ArrowRight':
            x += MOVE_AMOUNT;
            break;
        default:
            break;
    }

    context.lineTo(x, y);
    context.stroke();
}

function handleKey (e) {
    if(e.key.includes('Arrow')){
        e.preventDefault(); // prevent scroll down
        draw({key: e.key});
    }
}

function clearCanvas () {
    canvas.classList.add('shake');
    context.clearRect(0, 0, width, height);
    canvas.addEventListener('animationend', function(){
        canvas.classList.remove('shake');
    }, { once: true });
}

shakeBtn.addEventListener('click', clearCanvas);
window.addEventListener('keydown', handleKey);