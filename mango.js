class Mango{
    constructor(x,y,r){
var options =  {
    isStatic:true,
    restitution:0,
    friction:1
   
}
this.body = Bodies.circle(x,y,r,options)
this.r =r


    }
display(){
    const pos= this.body.position
    const angle = this.body.angle
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    imageMode(CENTER)
    image(mangoimg,0,0,this.r*2,this.r*2)   
    pop()
}
}