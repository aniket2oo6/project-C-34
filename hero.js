class hero{
    constructor(x,y,radius){
var options={
    isStatic:true,
    restitution:0,
    frictionAir:1,
    density:1.2
}
this.image = loadImage("pro-c34+images/images/Superhero-01.png");
this.body = Bodies.circle(x,y,radius,options);
this.radius = radius;
World.add(world,this.body);
    }
    display(){
var a = this.body.position;
var b = this.body.angle;
push();
translate(a.x,a.y);
rotate(b);
imageMode(CENTER);
image(this.image,0,0,this.radius,this.radius);
pop();
    }
}