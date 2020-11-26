class Boy{
    constructor(x,y,radius){
var options =  {
    
   
}
this.body = Bodies.rectangle(x,y,250,250,options)

this.image = loadImage("boy.png")


    }
display(){
    
var pos = this.body.position
imageMode(CENTER)
image(this.image,pos.x,pos.y,200,200)
    
}
}