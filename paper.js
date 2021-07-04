class paper

{
	constructor(x,y){
	
        var options={
			isStatic:false,		
			restitution:0.3,
            friction:0,
            density:1.2
        }
    
        this.image=loadImage("paper.png")
        this.body=Bodies.circle(x,y,40, options);
        this.r = 40
        World.add(world, this.body)
     
}

display()
{
    var pos = this.body.position
    
    push()
			translate(pos.x,pos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r,this.r)
			
			pop()
}
    }

    


















