function computeVolume(radius) {
  return (4 * Math.PI * Math.pow(radius, 3)) / 3;
}

function updateVolume(computedOutput) {
  volumeOutput.innerText = "Computed Radius: " + computedOutput;
}

function drawCircle(radius, coords) {
  mainContext.beginPath();
  /**
    x - The x-axis (horizontal) coordinate of the arc's center.
    y - The y-axis (vertical) coordinate of the arc's center.
    radius - The arc's radius. Must be non-negative.
    startAngle - The angle at which the arc starts, measured clockwise from the positive x-axis and expressed in radians.
    endAngle - The angle at which the arc ends, measured clockwise from the positive x-axis and expressed in radians.
    anticlockwise- An optional Boolean which, if true, causes the arc to be drawn counter-clockwise between the start and end angles. The default value is false (clockwise).
    */
  mainContext.arc(coords.x, coords.y, radius, 0, 2 * Math.PI);
  mainContext.stroke();
}

function clearCanvas() {
  mainContext.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
}

function findCanvasCenter() {
  return { y: mainCanvas.height / 2, x: mainCanvas.width / 2 };
}

function displayError(msg, removeAfter = 3000) {
  statusIndicator.classList.remove("invisible");
  statusIndicator.innerText = msg;
  setTimeout(function() {
    statusIndicator.innerText = "";
    statusIndicator.classList.add("invisible");
  }, removeAfter);
}

function outOfBoundsValidation(center, currentRadius) {
  return currentRadius <= center.x && currentRadius <= center.y;
}

function processInput(handleError = true) {
  var center = findCanvasCenter();

  var currentRadius = parseInt(radiusInput.value);
  volumeOutput.innerText = computeVolume(currentRadius);

  if (outOfBoundsValidation(center, currentRadius)) {
    drawCircle(currentRadius, center);
    return true;
  }

  if (handleError) {
    displayError("The circle will be out of canvas bounds. Unable to render.");
  }

  return false;
}

function drawTillFull(rad = 1, interval = 100, center) {
  var center = center ? center : findCanvasCenter();
  if (outOfBoundsValidation(center, rad)) {
    drawCircle(rad, center);
    setTimeout(drawTillFull, 10, rad + 1, interval, center);
  }
}
