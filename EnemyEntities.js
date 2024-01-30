class EnemyEntities
{
    constructor(x, y, Xspeed, diameter)
    {
        this.x = x;
        this.y = y;

        this.xStart = x;
        this.y1 = random(0, 400);
        this.y2 = random(0, 400);

        this.HostileEntitySpeed = Xspeed;

        this.diameter = diameter;
    }

    //Movement test for entities, will eventually be deleted
    TemporaryMovement()
    {

    }

    //Returns the x- and y-coordinates of the hostile entity
    EntityCoordinates()
    {
        return [this.x, this.y];
    }

    //Checks for collision between hostile entity and player
    EntityPlayerCollision(playerCoords)
    {
        if((playerCoords[1] - this.y)/(this.playerCoords[0] - this.x) < playerLength)
        {
            //Lose life
        }
    }

    //Entity that moves with a constant function
    ConstantEntity()
    {
        this.x = this.x + this.HostileEntitySpeed;
        this.k = this.y1;
        this.y = this.k * 1;
    }

    //Entity that moves with a linear function
    LinearEntity()
    {
        this.x = this.x + this.HostileEntitySpeed;
        this.k = (this.y2 - this.y1) / width + (this.diameter / 2);
        this.flytY = this.y1 - (this.k * this.xStart);
        this.y = (this.k * this.x) + this.flytY;
    }

    //Entity  that moves with a quadratic function
    QuadraticEntity()
    {
        this.x = this.x + this.HostileEntitySpeed;
        this.k = (this.y1 - this.y2) / (pow(this.xStart, 2) - pow(width + (this.diameter / 2), 2));
        this.flytY = this.y1 - this.k * pow(this.xStart, 2);
        this.y = this.k * (this.x * this.x) + this.flytY;
    }

    //Entity that moves with a cubic function
    CubicEntity()
    {
        this.x = this.x + this.HostileEntitySpeed;
        this.k = (this.y1 - this.y2) / (pow(this.xStart, 3) - pow(width + (this.diameter / 2), 3));
        this.flytY = this.y1 - this.k * pow(this.xStart, 3);
        this.y = this.k * pow(this.x, 3) + this.flytY; 
    }

    //Entity that moves with a exponential function
    ExponentialEntity()
    {
        this.x = this.x + this.HostileEntitySpeed;
        this.potens = this.y2 / (this.y1 * (width + (this.diameter / 2) - this.xStart));
        this.a = pow(10, this.potens);
        this.k = this.y2 / (pow(this.a, width + (this.diameter / 2)));
        this.y = this.k * (pow(this.a, this.x));
    }

    //Entity that moves with a logarithmic function
    LogarithmicEntity()
    {
        this.x = this.x + this.speed;

    }

    //Entity that moves with a sinus function/curve
    SinusEntity()
    {
        this.x = this.x + this.speed;
    }

    //Entity that moves with a root function
    RootEntity()
    {
        this.p = random(0.1, 0.9);
        
        this.x = this.x + this.HostileEntitySpeed;
        this.k = (this.y1 - this.y2) / (pow(this.xStart,  this.p));
        this.flytY = this.y1 - this.k * (pow(this.xStart, this.p));
        this.y = this.k * (pow(this.x, this.p)) + this.flytY;
    }
}