// creating shortcut for console.log
const msTens = document.getElementById("msTens");
const msHundreds = document.getElementById("msHundreds");
const secOnes = document.getElementById("secondOnes");
const secTens = document.getElementById("secondTens");

let secondsTens = 0;
let secondsOnes = 0;
let milliSHundreds = 0;
let milliSTens = 0;

secOnes.textContent = secondsOnes;
secTens.textContent = secondsTens;
msTens.textContent = milliSTens;
msHundreds.textContent = milliSHundreds;

setInterval(() => {
  if (secondsTens === 1) {
    return;
  }

  if (secondsOnes === 9) {
    secOnes.style.color = "red";
    secTens.style.color = "red";

    secondsTens += 1;
    secondsOnes = 0;
    secTens.textContent = secondsTens;
    secOnes.textContent = secondsOnes;

    const colon1 = document.getElementById("colon");
    colon1.style.color = "red";
  } else {
    secondsOnes = secondsOnes + 1;
    secOnes.textContent = secondsOnes;
  }
}, 1000);

setInterval(() => {
  if (secondsTens === 1) {
    return;
  }

  console.log(secondsTens);

  milliSTens = secondsOnes * 1000 + 1;
  milliSHundreds = 0;
  msTens.textContent = milliSTens;
  msHundreds.textContent = milliSHundreds;
}, 1);
