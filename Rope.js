class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
           pointB:pointB,
            stiffness:0.1,
            length:10
        }
        this.Slingshot= Constraint.create(options);
        World.add(world, this.Slingshot);
    }
    
display(){
    
    if(this.Slingshot.bodyA){
    var posA = this.Slingshot.bodyA.position
    var posB = this.Slingshot.pointB
    strokeWeight(4);
    stroke(48,22,8)
    line(posA.x, posA.y, posB.x, posB.y) 

    }
    
}
fly(){
    this.Slingshot.bodyA=null

}
attach(body){
    this.Slingshot.bodyA=body
}


// constraint is feature that connect two bodies
}

