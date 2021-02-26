const mainBoard = document.getElementById('container');
const grid = document.getElementsByClassName('gridSquares');
const buttons = document.getElementsByClassName('btn');

let size = 16;

document.getElementById('container').style.gridTemplateColumns = `repeat(${size}, auto)`; 
document.getElementById('container').style.gridTemplateRows =  `repeat(${size}, auto)`; 

for (let i = 0; i < size*size; i++) {
const createGrid = document.createElement('div');
createGrid.classList.add("gridSquares");
createGrid.id = `${i}`;
mainBoard.appendChild(createGrid);
}

for (let i = 0; i < buttons.length; i++) {
buttons[i].addEventListener('click', getButtonId);
}

function getButtonId () {
  let buttonId = this.getAttribute('id');

  if (buttonId == 'rainbow') {
    for (let i = 0; i < grid.length; i++) {
    grid[i].addEventListener('mouseover', setRainbow);
    }
    console.log(buttonId);
  } else if (buttonId == 'eraser') {
    for (let i = 0; i < grid.length; i++) {
    grid[i].addEventListener('mouseover', setEraser);
    }
    console.log(buttonId);

  } else if (buttonId == 'size') {
    prompt('asdfas');
    console.log(buttonId);
  }
}

function setRainbow() {
  let index = this.getAttribute('id')
  grid[index].style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
}

function setEraser() {
  let index = this.getAttribute('id')
  grid[index].style.backgroundColor = 'white';
}


