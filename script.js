var canvas = document.querySelector("canvas");

// function for drawing circles of a random color in a random position

function drawCircle() {
  if (canvas.getContext) {
    var context = canvas.getContext("2d");
    var coordX = Math.floor(Math.random() * 400 + 32);
    var coordY = Math.floor(Math.random() * 400 + 32);
    var radius = 30;
    context.beginPath();
    context.arc(coordX, coordY, radius, 0, 2 * Math.PI, false);
    context.lineWidth = 2;
    let valueRed = Math.floor(Math.random() * 256);
    let valueGreen = Math.floor(Math.random() * 256);
    let valueBlue = Math.floor(Math.random() * 256);
    context.fillStyle = `rgb(${valueRed}, ${valueGreen}, ${valueBlue})`;
    context.fill();
  }
}
drawCircle();
