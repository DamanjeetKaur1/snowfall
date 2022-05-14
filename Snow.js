class Snow{
 constructor (x,y ,width ,height){
     var options = {
         friction:0.8 ,
         density:1.0,

    }
this.body = Bodies.rectangle(x,y ,width ,height);
this.width = width;
this.height = height;
this.image = loadImage("snow4.webp")
World.add(world,this.body)
 }
 display(){
     push()
     translate(this.body.position.x,this.body.position.y);
    image(this.image,0,0, this.width,this.height );
    pop()
 }
}