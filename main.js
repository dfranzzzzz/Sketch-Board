const mainBoard = document.querySelector('#container');
const setSize = document.getElementById('size');

setSize.addEventListener('click', changeSize);
window.addEventListener('load', setDefaultGrid);


function setDefaultGrid () {
  setGridSize(16);
  fillBoard(16);
  // changeColor('assorted');
}

function setGridSize(size) {
  mainBoard.style.gridTemplateColumns = `repeat(${size}, auto)`;
  mainBoard.style.gridTemplateRows = `repeat(${size}, auto)`;
}

function fillBoard(size) {
  for (let i = 0; i < size*size; i++) {
    const createGrid = document.createElement('div');
    createGrid.classList.add("gridSquares");
    mainBoard.appendChild(createGrid);
  }
}

function changeSize() {
  let newSize = prompt("Enter board dimension (input x input)");

  if (newSize !== null) {
    newSize = parseInt(newSize);
    if (newSize < 1 || newSize > 64 || Number.isNaN(newSize)) {
      alert('Please Enter a number from 1-64');
      changeSize();
    } else {
      mainBoard.querySelectorAll('.gridSquares').forEach(child => child.remove());
      fillBoard(newSize);
      setGridSize(newSize);
    }
  }
}

function clearBoard() {
  mainBoard.querySelectorAll('.gridSquares').forEach(child => child.style.backgroundColor = 'white');
}

function changeColor(option) {
  const gridElements = document.querySelectorAll('.gridSquares');

  switch(option) {
    case 'assorted':
      gridElements.forEach(gridElement => gridElement.addEventListener('mouseover', setAssorted));
      gridElements.forEach(gridElement => gridElement.removeEventListener('mouseover', setEraser));
      gridElements.forEach(gridElement => gridElement.removeEventListener('mouseover', setBlack));
      break;
    
    case 'black':
      gridElements.forEach(gridElement => gridElement.addEventListener('mouseover', setBlack));
      gridElements.forEach(gridElement => gridElement.removeEventListener('mouseover', setEraser));
      gridElements.forEach(gridElement => gridElement.removeEventListener('mouseover', setAssorted));
      break;
    
    case 'eraser':
      gridElements.forEach(gridElement => gridElement.addEventListener('mouseover', setEraser));
      break;
  }
}

function setAssorted(e) {
  const red = Math.floor(Math.random() * 256);
  const green= Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const alpha = 1;
  e.target.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

function setEraser(e) {
  e.target.style.backgroundColor = 'white';
}

function setBlack(e) {
  e.target.style.backgroundColor = 'black';
}
