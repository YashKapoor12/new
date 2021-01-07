class P{
    constructor(x,y){
        this.body=Bodies.circle(x,y,10,{isStatic:true});
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        ellipse(pos.x,pos.y,20,20)
        pop()
    }
}