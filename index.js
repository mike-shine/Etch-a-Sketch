const body = document.querySelector('#body');

const button = document.createElement('button');
button.textContent = 'Clear grid';
body.appendChild(button);

const container = document.createElement('div');
// container.style.border = '2px dotted red';
container.classList.add('container');
body.appendChild(container);



function modifySize() {
  let gridWidth = prompt('How many squares wide would you like this grid to be?');
  if (gridWidth > 100) {
    alert('Error: Too many squares! Please pick a value that is 100 or less.')
  } else {
    clearGrid();
    for (let i = 0; i < gridWidth**2; i++) {
      let div = document.createElement('div');
      div.style.border = '1px solid';
      div.classList.add('square');
      let heightPixels = 1225 / gridWidth - 2;
      div.style.height = `${heightPixels}px`;
      div.style.width = div.style.height;
      container.appendChild(div);
    }
    let allSquares = document.querySelectorAll('square')
  }
  console.log(document.querySelectorAll('square'));
}

function clearGrid() {
  let allSquares = document.getElementsByClassName('square');
  for (let i = allSquares.length - 1; i >= 0; i--) {
    allSquares[i].remove();
  }
}


modifySize()


button.addEventListener('click', modifySize);


// figure out padding issue, of how to adjust padding when number of squares changes. Is my CSS just overwriting all changes I try to make?

// is this a string immutability issue???? I'm just reassigning HTML collection object key values...

// `(1225 / ${gridWidth} / 13.1)vw`


// let allSquares = document.getElementsByClassName('square');
// allSquares[i].style.height = `(1225/${gridWidth}/13.1)vw`;
// allSquares[i].style.width = `(1225/${gridWidth}/13.1)vw`;
// allSquares[i].style.padding = '2em';

// `200px`;