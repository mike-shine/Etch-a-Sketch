const body = document.querySelector('#body');

const resizeButton = document.createElement('button');
resizeButton.textContent = 'Resize grid';
resizeButton.setAttribute('id', 'resizeButton')
body.appendChild(resizeButton);

const clearButton = document.createElement('button');
clearButton.textContent = 'Clear grid';
clearButton.setAttribute('id', 'clearButton')
body.appendChild(clearButton);

const changeColor = document.createElement('button');
changeColor.textContent = 'Change color';
changeColor.setAttribute('id', 'changeColor')
body.appendChild(changeColor);

const container = document.createElement('div');
container.classList.add('container');
container.style.border = '1 px solid black';
body.appendChild(container);

let currentColor = 'black';




function modifySize() {
  let gridWidth = prompt('How many squares wide would you like this grid to be? (Larger number = greater detail)');
  if (gridWidth > 100) {
    alert('Error: Too many squares! Please pick a value that is 100 or less.')
  } else {
    removeGrid();
    for (let i = 0; i < gridWidth**2; i++) {
      let div = document.createElement('div');
      div.classList.add('square');
      let heightPixels = 1225 / gridWidth - 2;
      div.style.height = `${heightPixels}px`;
      div.style.width = div.style.height;
      mouseOverChangeColor(currentColor, div);
      container.appendChild(div);
    }
    let allSquares = document.querySelectorAll('square')
  }
};

function removeGrid() {
  let allSquares = document.getElementsByClassName('square');
  for (let i = allSquares.length - 1; i >= 0; i--) {
    allSquares[i].remove();
  }
};

function whitenAll() {
  let allSquares = document.getElementsByClassName('square');
  for (let i = allSquares.length - 1; i >= 0; i--) {
    allSquares[i].style.backgroundColor = 'white';
  }
};

function changeTheColor() {
  let allSquares = document.getElementsByClassName('square');
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  currentColor = '#' + randomColor;
  for (let i = allSquares.length - 1; i >= 0; i--) {
    mouseOverChangeColor(currentColor, allSquares[i]);
  }
};

function mouseOverChangeColor(color, element) {
  element.addEventListener('mouseover', (color) => {
    element.style.backgroundColor = currentColor;
  });
};


modifySize();


resizeButton.addEventListener('click', modifySize);
clearButton.addEventListener('click', whitenAll);
changeColor.addEventListener('click', changeTheColor);
