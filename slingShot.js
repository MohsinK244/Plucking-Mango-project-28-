class SlingShot{
    constructor(o1,ptB){
        var options = {
            bodyA: o1,
            pointB: ptB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
        this.pt2 = ptB
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pt2;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
    }
    fly(){
        this.sling.bodyA = null;
    }
}