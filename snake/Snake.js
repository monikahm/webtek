 var head = 15;
function Snake(){
  //start location
   this.x = 0;
   this.y = 0;
//speed
   this.xspeed = 1;
   this.yspeed = 0;

    this.tail = [];
    this.total = 4;

  this.direction = function(x, y){
    this.xspeed = x;
    this.yspeed = y;
  }

  this.build = function(){
    for (i = 0 ; i < this.total; i++){
      this.tail.push(createVector(this.x*i,this.y*i));
    }
  }

  this.update = function(){
    for (i = this.tail.length - 1; i > 0; i--){
      this.tail[i].x = this.tail[i-1].x;
      this.tail[i].y = this.tail[i-1].y;
    }
    this.tail[0].x += this.xspeed;
    this.tail[0].y += this.yspeed;

  }
  this.show = function(){
    fill(255);
    for (i = 0; i < this.tail.length; i++){
      rect(this.tail[i].x*head, this.tail[i].y*head, head, head);
      }
    }
}
