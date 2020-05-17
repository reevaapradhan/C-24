class Ground{
    constructor(){
        var opt={
            isStatic: true
        }
        this.body = Bodies.rectangle(400,590,800,20,opt);
        this.width = 800;
        this.height = 20;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("grey")
        rect(pos.x,pos.y,this.width,this.height);
    }
}