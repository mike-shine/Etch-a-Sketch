const body = document.querySelector('#body');

const container = document.createElement('div');
container.style.border = '2px dotted red';
container.classList.add('container');
body.appendChild(container);

const gridWidth = 16;

for (let i = 0; i < gridWidth**2; i++) {
  let div = document.createElement('div');
  div.style.border = '1px solid';
  div.classList.add('square');
  let br = document.createElement('br');
  container.appendChild(div);
  container.appendChild(br);

}