function setup() 
{
  createCanvas(400, 400);

  enemy = new EnemyEntities(0, 1, 20);
}

function draw() 
{
  background(220);

  enemy.choseFunction(1);
  enemy.show();

  console.log(enemy.y);

}

