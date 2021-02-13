class block{
    constructor(x,y,width,height){
var options={
    restitution:0.8,
    friction:1.0,
    density:20
}
this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;
World.add(world,this.body);
    }
    display(){
var f = this.body.position;
var g = this.body.angle;
push();
translate(f.x,f.y);
rotate(g);
rectMode(CENTER);
strokeWeight(4);
stroke("black");
fill("red");
rect(0,0,this.width,this.height);
pop();
    }
}