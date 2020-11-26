class Tank{
    constructor(x,y)
    {
        this.x=x;
        this.y=y;
        this.body = Bodies.rectangle(this.x,this.y,50,50);
        this.width = 50;
        this.height = 50;
        World.add(world,this.body);    
    }
    display()
    {
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
    moveTank(x,y)
    {
        database.ref('tank/position').set({
            'x':position.x+x,
            'y':position.y+y
        })
    }
    /*setColor(color)
    {
        image()
    }*/
}