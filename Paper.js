class Paper{
    constructor(x,y,radius){
        var options={
            isStatic : false,
            restitution : 0.3,
            density : 1.2,
            friction : 0.5,
        }
        this.body = Bodies.circle(x , y , radius/2 , options);
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.image = loadImage("Paper.png");
        World.add(world , this.body);
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 80 , 80);
        pop();
    }
}
