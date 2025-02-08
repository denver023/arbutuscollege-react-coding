import '../css/main.css';

let count = 0;

function updateCounter() {
  count++;
  document.getElementById('count').innerHTML = `${count} clicks on the button`;
}

// Create button
const button = document.createElement('button');
button.innerHTML = 'Click here to get started';
button.addEventListener('click', updateCounter);

// Create counter element
const counter = document.createElement('span');
counter.id = 'count';
counter.innerHTML = '0 clicks on the button';

// Create logo element
const logo = document.createElement('div');
logo.id = 'logo';

// Add elements to the page
document.body.appendChild(logo);
document.body.appendChild(button);
document.body.appendChild(counter);
