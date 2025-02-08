import '../css/main.css';

let count = 0;

function updateCounter() {
  count++;
  document.getElementById('count').innerHTML = `${count} clicks on the button`;
}

// Create elements
const button = document.createElement('button');
button.innerHTML = 'Click here to get started';
button.onclick = updateCounter;

const counter = document.createElement('span');
counter.id = 'count';
counter.innerHTML = '0 clicks on the button';

const logo = document.createElement('div');
logo.id = 'logo';

// Add elements to page
document.body.appendChild(logo);
document.body.appendChild(button);
document.body.appendChild(counter);
