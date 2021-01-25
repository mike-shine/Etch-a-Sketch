const body = document.querySelector('#body');

for (let i = 0; i < 16; i++) {
  let div = document.createElement('div');
  div.style.border = '3px solid';
  let br = document.createElement('br');
  body.appendChild(div);
  body.appendChild(br);

}