
/*console.log(5);
function setup(){
    createCanvas(400,400);
    background(100);
}

function draw(){
    fill(200,0,0)
    background(100);
    ellipse(mouseX, mouseY, 70, 70);
    
}
*/
//SOUND AND QWERTY KEYBOARD

// buscar en p5js en referencias las cosas que se pueden hacer con audio

var osc;
var env;
var slider;

function setup(){
    createCanvas(300,300);
    background(100);

    env = new p5.Env(0.01,0.2,0.5,0.2);
    

    osc = new p5.Oscillator();
    osc.amp(env);
    osc.freq(222);
    osc.setType('triangle');
  //  osc.start();
   // env.play();

   slider = createSlider(0, 1, 50, 0.1);
   slider.position(100, 100);
   slider.style('width', '80px');
}


function draw (){
    var val = slider.value();
  //  fill(200,0,0);
  //  background(100);
   // ellipse(mouseX,mouseY,70,70);
    //osc.amp(mouseX/800);
    //osc.freq(mouseY*4);
   console.log(val);
   env.setRange(val, 0);
}


function keyPressed(){
    console.log("you pressed the key" + key);
    osc.start();

    fill(200,0,0);
    background(100);
    ellipse(150,150,70,70);
    
    var fr = 0;

    switch(key){
        case  "Z":
            fr = 261.63;
        break;
        case  "S":
            fr = 277.18;
        break;
        case  "X":
            fr = 293.66;
        break;
        case  "D":
            fr = 311.13;
        break;
        case  "C":
            fr = 329.63;
        break;
        case  "V":
            fr = 349.23;
        break;
        case  "G":
            fr = 369.99;
        break;
        case  "B":
            fr = 392.00;
        break;
        case  "H":
            fr = 415.30;
        break;
        case  "N":
            fr = 440;
        break;
        case  "J":
            fr = 466.16;
        break;
        case  "M":
            fr = 493.88;
        break;
        case  "Q":
            fr = 523.25;
        break;
        case  "2":
            fr = 554.37;
        break;
        case  "W":
            fr = 587.33;
        break;
        case  "3":
            fr = 622.25;
        break;
        case  "E":
            fr = 659.25;
        break;
        case  "R":
            fr = 698.46;
        break;
        case  "5":
            fr = 739.99;
        break;
        case  "T":
            fr = 783.99;
        break;
        case  "6":
            fr = 830.61;
        break;
        case  "Y":
            fr = 880.00;
        break;
        case  "7":
            fr = 932.33;
        break;
        case  "U":
            fr = 987.77;
        break;
        case  "I":
            fr = 1046.50;
        break;
        case  "O":
            fr = 1108.73;
        break;
        case  "0":
            fr = 1174.66;
        break;
        case  "P":
            fr = 1244.51;
        break;
    }
    osc.freq(fr);
    env.play();
    
}

function keyReleased(){
    console.log("you releades the key" + key);
    //osc.stop();

    fill(0,0,0);
    background(100);
    ellipse(150,150,70,70);
}

