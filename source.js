var slider;
var button;
var beep;
var quack;
var tun;


function setup(){
   createCanvas(600,450);
   background(100);


   beep = createAudio('beep.mp3');
   quack = createAudio('quack.mp3');
   tun = createAudio('tun.mp3');


   button = createButton('Play Beep');
   button.position(250, 300);
   button.mousePressed(playBeep);

   button = createButton('Pause Beep');
   button.position(250, 320);
   button.mousePressed(pauseBeep);

   button = createButton('Stop Beep');
   button.position(250, 340);
   button.mousePressed(stopBeep);

   button = createButton('Loop Beep');
   button.position(250, 360);
   button.mousePressed(loopBeep);
   button = createButton('Previous track');
   button.position(250, 380);
   button.mousePressed(playTun);


   button = createButton('Quack');
   button.position(350, 300);
   button.mousePressed(playQuack);

   button = createButton('Pause Quack');
   button.position(350, 320);
   button.mousePressed(pauseQuack);

   button = createButton('Stop Quack');
   button.position(350, 340);
   button.mousePressed(stopQuack);

   button = createButton('Loop Quack');
   button.position(350, 360);
   button.mousePressed(loopQuack);
   button = createButton('Previous track');
   button.position(350, 380);
   button.mousePressed(playBeep);

   button = createButton('Play Tun');
   button.position(450, 300);
   button.mousePressed(playTun);
   button = createButton('Pause Tun');
   button.position(450, 320);
   button.mousePressed(playTun);

   button = createButton('Stop Tun');
   button.position(450, 340);
   button.mousePressed(stopTun);

   button = createButton('Loop Tun');
   button.position(450, 360);
   button.mousePressed(loopTun);
   button = createButton('Previous track');
   button.position(450, 380);
   button.mousePressed(playQuack);
   

   amplitude = new p5.Amplitude();
}

function changeBG() {
    var val = random(255);
    background(val);
  }

  // Play

  function playBeep() {
    var amplitude = new p5.Amplitude();
      beep.play();

      function draw() {
        background(0);
        fill(255);
        var level = amplitude.getLevel();
        var size = map(level, 0, 1, 0, 200);
        ellipse(width/2, height/2, size, size);
      }
    }



    function playQuack() {
    var amplitude = new p5.Amplitude();
        quack.play();
      }
      function playTun() {
      var amplitude = new p5.Amplitude();
        tun.play();
      }


  // Pause
  function pauseBeep() {
    beep.pause();
  }
  function pauseQuack() {
    quack.pause();
  }
  function pauseTun() {
    tun.pause();
  }


    // Loop
    function loopBeep() {
        beep.loop();
      }
      function loopQuack() {
        quack.loop();
      }
      function loopTun() {
        tun.loop();
      }


     // Stop
     function stopBeep() {
        beep.stop();
      }
      function stopQuack() {
        quack.stop();
      }
      function stopTun() {
        tun.stop();
      }

