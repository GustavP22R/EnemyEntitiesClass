function setup() 
{
  createCanvas(400, 400);

  enemy = new EnemyEntities(200, 200, 5, 20);

}

function draw() 
{
  background(220);

  enemy.choseFunction(1);
  enemy.show();

}

