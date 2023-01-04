let capture;
let button;
let button1;
let on = false;
let c;

function setup() {
  c = createCanvas(300, 200); // putting createCanvas inside a variable will enable us to save the canvas as an image in takePic()
  c.parent('p5pos');
  
  capture = createCapture(VIDEO);
  capture.elt.setAttribute('playsinline', ''); // add this for iphone compatibility
  capture.hide();
  
  // button = createButton('Start / Stop');
  // button.parent('p5pos');
  // button.mousePressed(startStop);
  
  button1 = createButton('Save Pic');
  button1.parent('p5pos');
  button1.mousePressed(takePic);
}

function draw() {
  background(255);
  if(capture){
    image(capture, 0, 0, width, height); 
  } 
  filter(INVERT);
}

function takePic() {
  saveCanvas(c, 'myCanvas', 'jpg');
}

// function startStop(){
//   on = !on;
  
//   console.log(on);
  
//   if (on == true){
//   capture = createCapture(VIDEO);
//   capture.elt.setAttribute('playsinline', ''); // add this for iphone compatibility
//   capture.hide();
//   } else {
//   capture.remove();
//   }
// }

