let body = document.querySelector('body');
let container = document.createElement('div');
let circle = document.createElement('div');
let button = document.createElement('div');
let textArea = document.createElement('textarea');
let triangle = document.createElement('div')
let changeButton = document.createElement('button')
let deg = 0;


container.className = 'container';
circle.className = 'circle';
button.className = 'button';
textArea.className = 'textArea';
triangle.className = 'triangle';f
changeButton.className = 'changebutton'
body.appendChild(container);
body.appendChild(textArea);
body.appendChild(changeButton)
container.appendChild(circle);
circle.appendChild(button);
container.appendChild(triangle);



button.innerText = 'daraac'
changeButton.innerText = 'include'

const colors = ['red', 'blue', 'green', 'yellow'];
const items = ['1', '2', '3', '4', '5', '6', '7', '8', '10', '11', '12', '13', '14', '15',];

function draw (){
    let result = ' ';
    for (let i = 0; i < items.length; i++){
        let colorIndex = i;
        let deg = Math.floor(360 /items.length);
    
        if (colorIndex === items.length -1){
            colorIndex = colorIndex - colors.length * Math.floor(i / colors.length) + 1;
        } else if (colorIndex >= colors.length){
            colorIndex = colorIndex - colors.length * Math.floor(i / colors.length);
        } 
        result = result + ` ${colors[colorIndex]}`;
        '' + ` red` + `0deg 40deg`;
        'red 0deg 40deg,' + 'blue' + `40deg + 80deg`;
        if (i === items.length - 1) {
            result = result + ` ${deg * i}deg ${deg * (i + 1)}deg`;
        } else {
            result = result + ` ${deg * i}deg ${deg * (i + 1)}deg,`;
        }
    }
    circle.style.background = `conic-gradient(${result})`;
}

function getItems (){
    let = textArea.value;
    items = text.split("/n");
    draw()
}


function rotateCircle() {
    deg = deg + 1440 + Math.random() * 360;
    circle.style.transform = `rotate(${deg}deg)`;
}
changeButton.onclick = draw;
button.onclick = rotateCircle;