"use strict";
//  DECLARE variables
let button = document.getElementById("btn");
let resEl = document.getElementById("result");
let resetPage = document.getElementById("reset");
let timeDispay = document.getElementById("timeDispay");

// generate random number BETWEEN 1 TO 100
const originalNum = Math.floor(Math.random() * 100) + 1;
console.log(originalNum);
// RUN THE GAME BY PRESING BUTTON
setTimeout(() => {
  
}, 1000);
setInterval(timeShow, 1000);
function runGame() {
  let guessNumber = Number(prompt("Please Guess the number between 1 to 100"));
  if (guessNumber != "" && guessNumber !== null) {
    if (guessNumber === originalNum) {
        // instead of repeating some codes,we call function when we need it
      render(guessNumber, "green",' is correct!!');
      setTimeout(resetGame, 2000);
    } else if (guessNumber < originalNum) {
      render(guessNumber, "yellow",' is smaller than real number');
    } else if (guessNumber > originalNum) {
     
      render(guessNumber, "red",' is greater than real number');
    }
  } else {
    alert("please enter number :)");
  }
}

const render = (num, color,status) => {
  resEl.innerHTML = `${num}${status}`;
  resEl.style.color = color;
};
const resetGame = () => {
  let text = "Do you want to play again?";
  if (confirm(text) == true) {
    window.location.reload();
  } else {
    const audio = new Audio('trance.mp3');
    audio.play();
  }
};

// display date
function timeShow() {
  let newdate = new Date().toLocaleTimeString();
  timeDispay.innerHTML = newdate;
}



// addEventListener or onclick to start project

//
resetPage.addEventListener("click", resetGame);

button.addEventListener("click", runGame);



 