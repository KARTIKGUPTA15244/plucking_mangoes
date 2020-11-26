class Stone{
    constructor(x,y,r){
var options =  {
   
    restitution:0,
   
    
   
}
this.body = Bodies.circle(x,y,r,options)
this.r =r
World.add(world,this.body)

    }
display(){
    const pos= this.body.position
    const angle = this.body.angle
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    imageMode(CENTER)
    image(stoneimg,0,0,this.r*2,this.r*2)   
    pop()
}
}