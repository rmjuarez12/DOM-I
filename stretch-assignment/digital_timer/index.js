// Get the elements from the HTML
const colon = document.getElementById("colon");
const msTens = document.getElementById("msTens");
const msHundreds = document.getElementById("msHundreds");
const secOnes = document.getElementById("secondOnes");
const secTens = document.getElementById("secondTens");

// Set default values of 0
let secondsTens = 0;
let secondsOnes = 0;
let milliSHundreds = 0;
let milliSTens = 0;

// Set limit
const timeLimit = 10;

// Set timer default amounts
let seconds = 0;
let milliSeconds = 0;

// Add an event listener that can help trigger the timer
const startBtn = document.getElementById("start-timer");
let timerInterval;

startBtn.addEventListener("click", () => {
  // Start the timer interval
  timerInterval = setInterval(startTimer, 10);

  // Set button to disabled
  startBtn.setAttribute("disabled", "true");

  // Reset the timer to defaults
  seconds = 0;
  milliSeconds = 0;

  // Set timer to active
  const timerContainer = document.querySelector(".digits");

  timerContainer.classList.add("active");
});

// Set an interval that updates every 10ms
function startTimer() {
  // Start adding milli seconds at each interval
  milliSeconds = milliSeconds + 1;

  // Add 1 second after every 100ms
  if (milliSeconds === 99) {
    milliSeconds = 0;
    seconds += 1;
  }

  // Set the values that will go on each side of the seconds(Tens, Ones)
  if (seconds < 10) {
    secondsTens = 0;
    secondsOnes = seconds;
  } else {
    secondsTens = seconds.toString().substr(0, 1);
    secondsOnes = seconds.toString().substr(1);
  }

  // Add the values into the seconds side accordingly
  secTens.textContent = secondsTens;
  secOnes.textContent = secondsOnes;

  // Set the values that will go on each side of the milli seconds(Hundreds, Tens)
  if (milliSeconds < 10) {
    milliSHundreds = 0;
    milliSTens = milliSeconds;
  } else {
    milliSHundreds = milliSeconds.toString().substr(0, 1);
    milliSTens = milliSeconds.toString().substr(1);
  }

  // Add the values to the milli seconds side accordingly
  msHundreds.textContent = milliSHundreds;
  msTens.textContent = milliSTens;

  // Once the seconds reaches the limit we specified, stop the function
  if (seconds >= timeLimit) {
    stopTimer();
  }
}

// Create function that will stop the interval
function stopTimer() {
  // Set timer to inactive
  const timerContainer = document.querySelector(".digits");

  timerContainer.classList.remove("active");

  // Remove the disable status for start button
  startBtn.removeAttribute("disabled");

  // Stop the interval from running
  clearInterval(timerInterval);
}

// Add an event listener that will reset timer while it is running, or even when it ends
const resetBtn = document.getElementById("reset-timer");

resetBtn.addEventListener("click", () => {
  // Reset the timer to defaults
  seconds = 0;
  milliSeconds = 0;
  secondsTens = 0;
  secondsOnes = 0;
  milliSHundreds = 0;
  milliSTens = 0;
  secOnes.textContent = secondsOnes;
  secTens.textContent = secondsTens;
  msTens.textContent = milliSTens;
  msHundreds.textContent = milliSHundreds;

  const lapContainer = document.getElementById("laps");
  lapContainer.textContent = "";

  stopTimer();
});

// Add an event listener that will add laps
const addLap = document.getElementById("add-lap");

addLap.addEventListener("click", () => {
  // Get the lap container and create the element
  const lapContainer = document.getElementById("laps");
  const addItem = document.createElement("p");
  addItem.classList.add("lap-item");

  // Declare the variables that will populate the element created
  let secondsSide;
  let milliSecondsSide;

  // Add leading zero if seconds are less than 10
  if (seconds < 10) {
    secondsSide = `0${seconds}`;
  } else {
    secondsSide = seconds;
  }

  // Add leading zero if milliseconds are less than 10
  if (milliSeconds < 10) {
    milliSecondsSide = `0${milliSeconds}`;
  } else {
    milliSecondsSide = milliSeconds;
  }

  // Add the item to the container
  addItem.textContent = `${secondsSide} : ${milliSecondsSide}`;
  lapContainer.appendChild(addItem);

  // Once the lap has been added, reset timer
  seconds = 0;
  milliSeconds = 0;
});
