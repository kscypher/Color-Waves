let t = 0; // time variable

function setup() {
  createCanvas(600, 600);
  noStroke();
  
  fill(90,50,100);
}

function draw() {
  colorMode(RGB)
  background(10, 10); // transparent background (creates trails)

  colorMode(HSB)
  // make a x and y grid of ellipses
  for (let x = 0; x <= width; x = x + 50) {
    for (let y = 0; y <= height; y = y + 50) {
      // starting point of each circle depends on mouse position
      const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (x / width) + yAngle * (y / height);
      
      const hue = map(mouseX, 0, width, 0, 360)
      fill(hue, 100, 100)

      // each particle moves in a circle
      const myX = x + 20 * cos(2 * PI * t + angle);
      const myY = y + 20 * sin(2 * PI * t + angle);

      circle(myX, myY, 10); // draw particle
    }
  }

  t = t + 0.01; // update time
}
