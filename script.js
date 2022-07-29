var canvas = document.querySelector("canvas");
/**
 * function for displaying the timer on screen
 */
function showTimer() {
  let time = 0;
  let timerContainer = document.querySelector(".timer");
  window.addEventListener("load", (e) => {
    timerContainer.innerHTML = setInterval(() => {
      time += 0.01;
      timerContainer.innerHTML = `Time elapsed: ${time.toFixed(3)}`;
    }, 10);
  });
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
    return [coordX, coordY];
  }
}

/**
 * function for checking if user clicked on circle
 * @returns true or false
 */

function checkClickOnCircle() {
  let coordinates = drawCircle();
  canvas.addEventListener("click", (e) => {
    // we substract the value for canvas margin for each coordinate

    let cursorXCoordinate = e.clientX - 300;
    let cursorYCoordinate = e.clientY - 70;
    let circleXCoordinate = coordinates[0];
    let circleYCoordinate = coordinates[1];
    if (
      cursorXCoordinate - circleXCoordinate <= 60 &&
      cursorYCoordinate - circleYCoordinate <= 60
    ) {
      console.log("User clicked EXACTLY on circle!");
      return 1;
    } else {
      //   console.log("X on click = ", cursorXCoordinate);
      //   console.log("Y on click = ", cursorYCoordinate);
      //   console.log("Coordinates = ", coordinates);
      //   console.log("X position = ", circleXCoordinate);
      //   console.log("Y position = ", circleYCoordinate);
      console.log("User clicked outside circle");
      return 0;
    }
  });
}
function redrawCircle() {
  console.log(checkClickOnCircle());
  if (checkClickOnCircle() === 1) {
    console.log("REDRAWING SHAPE");
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    drawCircle();
  } else {
    console.log("Try again");
  }
}
redrawCircle();
