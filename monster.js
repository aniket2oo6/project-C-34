class monster{
    constructor(x,y,radius){
var options={
    isStatic:true,
    restitution:0,
    frictionAir:1,
    density:1.2
}
this.image = loadImage("pro-c34+images/images/Monster-01.png");
this.body = Bodies.circle(x,y,radius,options);
this.radius = radius;
World.add(world,this.body);
    }
    display(){
var h = this.body.position;
var i = this.body.angle;
push();
translate(h.x,h.y);
rotate(i);
imageMode(CENTER);
image(this.image,0,0,this.radius,this.radius);
pop();
    }
}