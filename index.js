// Write your code here!

document.body.appendChild("div");
document.body.appendChild('h1');

const ul = document.createElement('ul');

for (let i = 0; i < 3; i++) {
  const li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}

element.appendChild(ul);

var newHeader = document.createElement('h1');
document.getElementsByTagName('h1')[0].setAttribute('id','victory');

const main = document.querySelector('#main');
main.remove();


var newHeader = document.getElementsByTagName("h1")[0];  
var att = document.createAttribute("id");       
att.value = "victory";                           
newHeader.setAttributeNode(att);  



newHeader.nodeName('H1');
newHeader.id('victory');
newHeader.innerHTML('Donell is the champion!');