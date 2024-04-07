// Write your code here!
let element = document.querySelector("main");
element.remove();
let newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Mercy is the champion";
document.body.append(newHeader);
