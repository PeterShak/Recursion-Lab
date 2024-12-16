function setup() {
  createCanvas(400, 400);
  ellipseMode(RADIUS);
  noFill();
  noLoop();
}

function draw() {
  background(220);
  rCircle(width / 2, height / 2, width / 4);  
  rCircles(width / 4, 3 * width / 4, height / 2);
}

function rCircle(x, y, r) {
  if (r > 1) {  
    rCircle(x, y, r / 2);  
    circle(x, y, r);  
  }
}

function rCircles(x1, x2, y) {
  const dx = abs(x1 - x2);  
  
  if (dx > 4) {  
    const r = dx / 2;  
    const hr = r / 2;  
    
    circle(x1, y, r);  
    rCircles(x1 - hr, x1 + hr, y);  
    
    circle(x2, y, r);  
    rCircles(x2 - hr, x2 + hr, y);  
  }
  
  
  rCirclesVertical(y, width / 2, dx); 
}

function rCirclesVertical(y, x, r) {
  const dy = r;  
  
  if (dy > 4) {  
    const vr = dy / 2;  
    
    circle(x, y - r, vr);  
    rCirclesVertical(y - vr, x, vr);  
    
    circle(x, y + r, vr);  
    rCirclesVertical(y + vr, x, vr);  
  }
}
