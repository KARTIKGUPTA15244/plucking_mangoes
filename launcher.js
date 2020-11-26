class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 20
        }
        this.Sling = Constraint.create(options);
        this.pointB = pointB
        
        World.add(world, this.Sling);
    }
    fly(){
        this.Sling.bodyA = null;
    }

    display(){
        if(this.Sling.bodyA){
            strokeWeight(4);
        line(this.Sling.bodyA.position.x,this.Sling.bodyA.position.y,this.pointB.x,this.pointB.y);
        }
        
    }
    
}