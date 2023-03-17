document.querySelector("html").addEventListener("click", function () {
    alert("请，好好的注视着我");});




let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/638124001117794299.jpg') {
    myImage.setAttribute('src', 'images/638124001140086192.jpg');
    } else {
    myImage.setAttribute('src', 'images/638124001117794299.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName){
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.textContent = myName + ',welcome to appreciate my graceful waifu ';
    }
    
  }

if(!localStorage.getItem('name')) {
setUserName();
} else {
let storedName = localStorage.getItem('name');
myHeading.textContent =  storedName + 'Hello,welcome to appreciate my graceful waifu ';
}
myButton.onclick = function() {
    setUserName();
}

 