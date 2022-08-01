var canvas = document.querySelector("canvas");
let timerContainer = document.querySelector(".timer--container");
let circleXCoordinate;
let circleYCoordinate;

/**
 * function for displaying the timer on screen
 */
function showTimer() {
  let time = 0;

  timerContainer.innerText = setInterval(() => {
    time += 0.01;
    timerContainer.innerText = `Time elapsed: ${time.toFixed(3)}`;
  }, 10);
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
