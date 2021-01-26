const body = document.querySelector('#body');





const container = document.createElement('div');
container.style.border = '2px dotted red';
container.classList.add('container');
body.appendChild(container);



function modifySize() {
  clearGrid();
  let gridWidth = prompt('How many squares wide would you like this grid to be?');
  for (let i = 0; i < gridWidth**2; i++) {
    let div = document.createElement('div');
    div.style.border = '1px solid';
    div.classList.add('square');
    let br = document.createElement('br');
    container.appendChild(div);
    container.appendChild(br);
    let allSquares = document.getElementsByClassName('square');
    for (let i = 0; i < allSquares.length; i++) {
      allSquares[i].style.padding = `(1225 / ${gridWidth} / 26)vw`;
    }

  }
  console.log(document.getElementsByClassName('square'))
}

function clearGrid() {
  let allSquares = document.getElementsByClassName('square');
  console.log('well, at least your function is working');
  for (let i = allSquares.length - 1; i >= 0; i--) {
    allSquares[i].remove();
  }

}


modifySize()

const button = document.createElement('button');
button.textContent = 'Button made in index.js';
button.addEventListener('click', modifySize)
body.appendChild(button);


// figure out how to remove previous squares and add new one upon button click (or simply modify the number of squares)

// figure out padding issue, of how to adjust padding when number of squares changes. Is my CSS just overwriting all changes I try to make?