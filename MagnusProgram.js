class Opps
{
  constructor(p = NaN, y1, y2, expon)
  {
    this.x = int(random(-60, -20));
    this.xStart = this.x;
    this.y = 0; 
    this.speed = random(3, 6);
    this.p = p;
    this.y1 = y1;
    this.y2 = y2;
    this.expon = expon;
  }
  move()
  {
    if (this.x < 820)
    {
      if (this.p == 0)
      {
        this.x = this.x + this.speed;
        this.k = this.y1;
        this.y = this.k * 1;
      }
      if (this.p == 1)
      {
        this.x = this.x + this.speed;
        this.k = (this.y2 - this.y1) / 820;
        this.flytY = this.y1 - (this.k * this.xStart);
        this.y = (this.k * this.x) + this.flytY;
        } 
      if (this.p == 2)
      {
        this.x = this.x + this.speed;
        this.k = (this.y1 - this.y2) / (pow(this.xStart, this.p) - pow(820, this.p));
        this.flytY = this.y1 - this.k * pow(this.xStart, this.p);
        this.y = this.k * (this.x * this.x) + this.flytY;
      }
      if (this.p == 3)
      {
        this.x = this.x + this.speed;
        this.k = (this.y1 - this.y2) / (pow(this.xStart, this.p) - pow(820, this.p));
        this.flytY = this.y1 - this.k * pow(this.xStart, this.p);
        this.y = this.k * (this.x * this.x * this.x) + this.flytY;
      }
      if (this.p < 1 && this.p > 0)
      {
        this.x = this.x + this.speed;
        this.k = (this.y1 - this.y2) / (pow(this.xStart,  this.p));
        this.flytY = this.y1 - this.k * (pow(this.xStart, this.p));
        this.y = this.k * (pow(this.x, this.p)) + this.flytY;
      }
      if (this.expon = 0)
      {
        this.x = this.x + this.speed;
        this.potens = this.y2 / (this.y1 * (820 - this.xStart));
        this.a = pow(10, this.potens);
        this.k = this.y2 / (pow(this.a, 820));
        this.y = this.k * (pow(this.a, this.x));
      }
    }
    else
    {
      this.x = int(random(-60, -20));
      this.y1 = random(-200, 600);
      this.y2 = random(0, 400);
      this.p = int(random(0, 3));
      this.speed = random(3, 6);
    }
  }
  collision(playerKoor)
  {
    this.distanceToPlayer = dist(playerKoor[0], playerKoor[1], this.x, this.y);
    if(this.distanceToPlayer <= 20)
    {
      this.x = int(random(-60, -20));
      this.y1 = random(-200, 600);
      this.y2 = random(0, 400);
      this.p = int(random(0, 3));
    }
  }
  playerTakesDamage()
  {
    if(this.distanceToPlayer <= 20)
    {
      this.damage = true;
    }
    else
    {
      this.damage = false;
    }
    return this.damage;
  }
  oppsPosition()
  {
    return [this.x, this.y];
  }
  show()
  {
    this.farve = this.x;
    fill(this.farve / 2, random(75, 100), 100);
    circle(this.x, 400 - this.y, 20);
  }
}