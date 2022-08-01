var canvas = document.querySelector("canvas");
let timerContainer = document.querySelector(".timer--container");
let secondsContainer = document.querySelector(".timer--container .seconds");
let milisecondsContainer = document.querySelector(
  ".timer--container .miliseconds"
);
let seconds = 00;
let miliseconds = 00;
let circleXCoordinate;
let circleYCoordinate;

/**
 * function for displaying the timer on screen
 */
function showTimer() {
  resetTimer();
  var timer = setInterval(() => {
    miliseconds++;
    if (miliseconds <= 9) {
      milisecondsContainer.innerHTML = "0" + miliseconds;
    }
    if (miliseconds > 9) {
      milisecondsContainer.innerHTML = miliseconds;
    }
    if (miliseconds > 99) {
      console.log("seconds");
      seconds++;
      secondsContainer.innerHTML = "0" + seconds;
      miliseconds = 0;
      milisecondsContainer.innerHTML = "0" + 0;
    }
    if (seconds > 9) {
      secondsContainer.innerHTML = seconds;
    }
  }, 10);
}
function resetTimer() {
  miliseconds = 00;
  seconds = 00;
  secondsContainer.innerHTML = seconds;
  milisecondsContainer.innerHTML = miliseconds;
}
/**
 * function for drawing circles of random colors on random positions
 * @returns coordinates for circle
 */
function drawCircle() {
  showTimer();
  if (canvas.getContext) {
    var context = canvas.getContext("2d");
    var coordX = Math.floor(Math.random() * 400 + 32);
    var coordY = Math.floor(Math.random() * 400 + 32);
    var radius = 30;
    context.beginPath();
    context.arc(coordX, coordY, radius, 0, 2 * Math.PI, false);
    context.lineWidth = 1;
    let valueRed = Math.floor(Math.random() * 256);
    let valueGreen = Math.floor(Math.random() * 256);
    let valueBlue = Math.floor(Math.random() * 256);
    context.fillStyle = `rgb(${valueRed}, ${valueGreen}, ${valueBlue})`;
    context.fill();
    circleXCoordinate = coordX;
    circleYCoordinate = coordY;
    return [coordX, coordY];
  }
}
let coordinates = drawCircle();
function checkIfClicked(
  circleXCoord,
  circleYCoord,
  cursorXCoord,
  cursorYCoord
) {
  if (
    cursorXCoord >= circleXCoord - 30 &&
    cursorXCoord <= circleXCoord + 30 &&
    cursorYCoord >= circleYCoord - 30 &&
    cursorYCoord <= circleYCoord + 30
  ) {
    console.log("User clicked EXACTLY on circle!");
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    drawCircle();
  } else {
    console.log("User clicked outside circle");
  }
}

canvas.addEventListener("click", (e) => {
  // we substract the value for canvas margin for each coordinate

  let cursorXCoordinate = e.clientX - 216;
  let cursorYCoordinate = e.clientY - 101;
  checkIfClicked(
    circleXCoordinate,
    circleYCoordinate,
    cursorXCoordinate,
    cursorYCoordinate
  );
});
