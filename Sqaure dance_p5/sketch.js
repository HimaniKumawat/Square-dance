function setup()
{
  createCanvas(600, 400);
  background(0);
  mic = new p5.AudioIn();
  mic.start();
}

function draw()
{
  var micLevel = mic.getLevel();   //detect the sound level
  //console.log(micLevel);         //to check the microphone
  var sd = micLevel*100;          //multiply a number between 100-300 accroding to the microphone sensitivity and the sound volume
  fill(0,10);
  rect(0,0,width,height);         //almost transperant rectangle

  var radius = width * 0.3;
  var x = cos(radians(-sd)) * radius;
  var y = sin(radians(-sd)) * radius;

  stroke(random(0,255), 35,80);
  square(y+250,x-30,x-60); //top left square

  var m = cos(radians(sd)) * radius;
  var n = sin(radians(sd)) * radius;

  stroke(random(0,255), 35,80);
  square(n+250,m-30,m-60); // top right square

  stroke(random(0,255), 35,80);
  square(n+220,m+130,m-90);  // bottom square
}
