// Write your code here!
const main = document.querySelector('#main');
main.remove();
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
const yourName = "Andrea";
newHeader.innerHTML = `${yourName} is the champion`;
document.body.appendChild(newHeader);