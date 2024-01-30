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

    chosingTheFunction(functionType)
    {
        switch(functionType)
        {
            case 0:
                this.constantEntity();
                break;
            case 1:
                this.linearEntity();
                break;
            case 2:
                this.quadraticEntity();
                break;
            case 3:
                this.cubicEntity();
                break;
            case 4:
                this.exponentialEntity();
                break;
            case 5:
                this.sinusEntity();
                break;
            case 6:
                this.rootEntity();
                break;

        }
    }

    //Movement test for entities, will eventually be deleted
    temporaryMovement()
    {

    }

    //Returns the x- and y-coordinates of the hostile entity
    entityCoordinates()
    {
        return [this.x, this.y];
    }

    //Checks for collision between hostile entity and player
    entityPlayerCollision(playerCoords)
    {

    }

    //Entity that moves with a constant function
    constantEntity()
    {
        this.x = this.x + this.HostileEntitySpeed;
        this.k = this.y1;
        this.y = this.k * 1;
    }

    //Entity that moves with a linear function
    linearEntity()
    {
        this.x = this.x + this.HostileEntitySpeed;
        this.k = (this.y2 - this.y1) / width + (this.diameter / 2);
        this.flytY = this.y1 - (this.k * this.xStart);
        this.y = (this.k * this.x) + this.flytY;
    }

    //Entity  that moves with a quadratic function
    quadraticEntity()
    {
        this.x = this.x + this.HostileEntitySpeed;
        this.k = (this.y1 - this.y2) / (pow(this.xStart, 2) - pow(width + (this.diameter / 2), 2));
        this.flytY = this.y1 - this.k * pow(this.xStart, 2);
        this.y = this.k * (this.x * this.x) + this.flytY;
    }

    //Entity that moves with a cubic function
    cubicEntity()
    {
        this.x = this.x + this.HostileEntitySpeed;
        this.k = (this.y1 - this.y2) / (pow(this.xStart, 3) - pow(width + (this.diameter / 2), 3));
        this.flytY = this.y1 - this.k * pow(this.xStart, 3);
        this.y = this.k * pow(this.x, 3) + this.flytY; 
    }

    //Entity that moves with a exponential function
    exponentialEntity()
    {
        this.x = this.x + this.HostileEntitySpeed;
        this.potens = this.y2 / (this.y1 * (width + (this.diameter / 2) - this.xStart));
        this.a = pow(10, this.potens);
        this.k = this.y2 / (pow(this.a, width + (this.diameter / 2)));
        this.y = this.k * (pow(this.a, this.x));
    }

    //Entity that moves with a logarithmic function
    logarithmicEntity()
    {

    }

    //Entity that moves with a sinus function/curve
    sinusEntity()
    {

    }

    //Entity that moves with a root function
    rootEntity()
    {
        this.p = random(0.1, 0.9);
        
        this.x = this.x + this.HostileEntitySpeed;
        this.k = (this.y1 - this.y2) / (pow(this.xStart,  this.p));
        this.flytY = this.y1 - this.k * (pow(this.xStart, this.p));
        this.y = this.k * (pow(this.x, this.p)) + this.flytY;
    }
}