const keyPad = document.getElementById('key-pad');
const Display = document.getElementById('display-input');
let calculated = 0;
function remove(e) {
  if (e.target.className == 'num') {
    e.target.style.boxShadow = 'none';
    console.log('ascas');
  }
}
function add(e) {
  if (e.target.className == 'num') {
    e.target.style.boxShadow = '2px 2px 5px black';
  }
}
function calculate() {
  try {
    Display.value = eval(Display.value);
    calculated = 1;
  } catch {
    Display.value = 'Error';
    // setTimeout(1000);
  }
}
function clear() {
  Display.value = '';
}
function display(value) {
  value == 'x' ? (value = '*') : null;
  if (value == 'AC') {
    Display.value = '';
  } else if (value == '=') {
    calculate();
  } else if (value == 'C') {
    Display.value = Display.value.slice(0, -1);
  } else {
    Display.value += value;
    Display.scrollLeft = Display.scrollWidth;
  }
}
function clicked(e) {
  if (calculated || Display.value == 'Error') {
    Display.value = '';
    calculated = 0;
  }
  const target = e.target;
  const className = target.className;
  const id = target.id;
  className == 'num' ? display(id) : null;
}
keyPad.addEventListener('click', clicked);
keyPad.addEventListener('mousedown', remove);
keyPad.addEventListener('mouseup', add);
