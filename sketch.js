let spriteArr = [];

function preload()
{
  img1 = loadImage('assets/image1.jpg');
  img2 = loadImage('assets/image2.jpg');
  img3 = loadImage('assets/image3.jpg');
  img4 = loadImage('assets/image4.jpg');
  img5 = loadImage('assets/image5.jpg');
  img6 = loadImage('assets/image6.jpg');
  img7 = loadImage('assets/image7.jpg');
  img8 = loadImage('assets/image8.jpg');
  img9 = loadImage('assets/image9.jpg');
}

function setup() 
{
  createCanvas(400, 400);

  spriteArr.push(img1, img2, img3, img4, img5, img6, img7, img8, img9);

  enemy = new EnemyEntities(0, 5, 20, spriteArr);
}

function draw() 
{
  background(220);

  enemy.choseFunction("constant"); //English name for the function such as constant, linear, quadratic
  enemy.show();

  console.log(enemy.y);

}

