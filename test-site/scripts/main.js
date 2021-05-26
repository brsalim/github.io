let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/namrahlogo.jpg') {
      myImage.setAttribute('src','images/download.jpg');
    } else {
      myImage.setAttribute('src','images/namrahlogo.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


myButton.onclick = function() {
  setUserName();
}

function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Namrah Fondation, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Namrah Foundation, ' + storedName;
}

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Namrah Foundation, ' + myName;
  }
}

