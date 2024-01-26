function setup() 
{
  createCanvas(400, 400);

  for(let i = 0; i <= nProjectiles - 1; i++)
  {
    //if statements for different functions (linear, quadratic, cubic and more)
    arrOpps.push(new EnemyEntities(40, 100, 5, 20));
  }
}

function draw() 
{
  background(220);
}

