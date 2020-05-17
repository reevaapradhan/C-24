class Paper{
    constructor(){
        var opt={
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(20,562,20,opt);
        this.radius = 20;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        rotate(this.body.angle);
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        fill(255)
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
};