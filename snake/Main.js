var s;

//window.preventScroll;
function setup(){
  createCanvas(600, 600);
  frameRate(10);
  s = new Snake();
  s.build();
}

function draw(){
  background(70);
  s.update();
  s.show();
}

function keyPressed(){
  if (keyCode === DOWN_ARROW){
    s.direction(0, 1);
  }
  else if (keyCode === UP_ARROW){
    s.direction(0, -1)
  }
  else if (keyCode === LEFT_ARROW){
    s.direction(-1, 0)
  }
  else if (keyCode === RIGHT_ARROW){
    s.direction(1, 0)
  }
}
