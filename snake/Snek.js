var cellsize = 15;

function Snek(){
  //start location
   this.x = 10;
   this.y = 10;
//speed
   this.xspeed = 1;
   this.yspeed = 0;
  // this.foodz = createVector(0,0);
   this.snake = 3;
   this.body = [];

   this.make = function(n){
     for(i = 0;i<this.snake;i++){
       this.body.push(createVector(this.x-this.xspeed*i,this.y-this.yspeed*i));
     }
     //this.spawnfood();
   }

   this.show = function(){
     fill(255);
     for(i = 0;i<this.body.length;i++){
       //fill
       rect(this.body[i].x*cellsize,this.body[i].y*cellsize,cellsize,cellsize);
     }
    // fill(150, 0, 0);
  //   rect(this.foodz.x*cellsize,this.foodz.y*cellsize,cellsize,cellsize);

   }
   this.update = function(){
     //update positions
     for(i=this.body.length-1;i>0;i--){
       this.body[i].x = this.body[i-1].x;
       this.body[i].y = this.body[i-1].y;
     }
     this.body[0].x += this.xspeed;
     this.body[0].y += this.yspeed;

     //check for collision with body
    /* for(i = 1;i<this.body.length;i++){
       if(this.body[0].equals(this.body[i])){
         console.log("Collisions,nigga!");
         this.body.splice(3, this.body.length);
       }
     }

     //check for collision with foodz
     if(this.body[0].equals(this.foodz)){
       this.spawnfood();
       this.butt = createVector(-1,-1);
       this.body.push(this.butt);
     }*/

   }
   this.direction = function(x,y){
  //   if(x != -this.xspeed && y != this.yspeed){
       this.xspeed = x;
       this.yspeed = y;
    // }
}

/*   this.spawnfood = function(){

     this.foodz = createVector(floor(random(0,mapsize)),floor(random(0,mapsize)));
   }*/

}
