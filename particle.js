class Particle{
    constructor(){
        this.body=Bodies.circle(random(20,780),0,20,{isStatic:false});
        World.add(world,this.body);
    }
    addcolor(){
        fill(random(0,255),random(0,255),random(0,255));
    }
    display(){
        var pos = this.body.position;
        push();
        ellipse(pos.x,pos.y,20,20)
        pop()
    }
}