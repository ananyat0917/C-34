class Ball{
    constructor(x,y,r){
        this.body = Bodies.circle(x,y,r);
        this.radius = r;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("pink");
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}