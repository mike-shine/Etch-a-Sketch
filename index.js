const body = document.querySelector('#body');

const resizeButton = document.createElement('button');
resizeButton.textContent = 'Resize grid';
body.appendChild(resizeButton);

const clearButton = document.createElement('button');
clearButton.textContent = 'Clear grid';
body.appendChild(clearButton);

const changeColor = document.createElement('button');
changeColor.textContent = 'Change color';
body.appendChild(changeColor);

const container = document.createElement('div');
container.classList.add('container');
container.style.border = '1 px solid black';
body.appendChild(container);




function modifySize() {
  let gridWidth = prompt('How many squares wide would you like this grid to be?');
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
      div.addEventListener('mouseover', () => {
        div.style.backgroundColor = "black";
      })
      container.appendChild(div);
    }
    let allSquares = document.querySelectorAll('square')
  }
  console.log(document.querySelectorAll('square'));
}

function removeGrid() {
  let allSquares = document.getElementsByClassName('square');
  for (let i = allSquares.length - 1; i >= 0; i--) {
    allSquares[i].remove();
  }
}

function whitenAll() {
  let allSquares = document.getElementsByClassName('square');
  for (let i = allSquares.length - 1; i >= 0; i--) {
    allSquares[i].style.backgroundColor = 'white';
  }
}

function changeTheColor() {
  let allSquares = document.getElementsByClassName('square');
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  for (let i = allSquares.length - 1; i >= 0; i--) {
    allSquares[i].addEventListener('mouseover', () => {
      allSquares[i].style.backgroundColor = '#' + randomColor;
    });
  }
}


modifySize();


resizeButton.addEventListener('click', modifySize);
clearButton.addEventListener('click', whitenAll);
changeColor.addEventListener('click', changeTheColor);


// figure out padding issue, of how to adjust padding when number of squares changes. Is my CSS just overwriting all changes I try to make?

// is this a string immutability issue???? I'm just reassigning HTML collection object key values...

// `(1225 / ${gridWidth} / 13.1)vw`


// let allSquares = document.getElementsByClassName('square');
// allSquares[i].style.height = `(1225/${gridWidth}/13.1)vw`;
// allSquares[i].style.width = `(1225/${gridWidth}/13.1)vw`;
// allSquares[i].style.padding = '2em';

// `200px`;