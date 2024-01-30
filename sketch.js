function setup() 
{
  createCanvas(400, 400);

  enemy = new EnemyEntities(0, 5, 20);
}

function draw() 
{
  background(220);

  enemy.choseFunction("constant"); //English name for the function such as constant, linear, quadratic
  enemy.show();

  console.log(enemy.y);

}

