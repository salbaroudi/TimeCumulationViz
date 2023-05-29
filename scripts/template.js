
//Use this to make an independent canvas on the page.
//This uses a closure structure to separate our canvas code from the global (window) namespace.
const s = p => {
    //"Globals" for our closure
    let x = 100;
    let y = 100;
  
    p.preload = function() {
      p.font = p.loadFont('./assets/VeraType.ttf');
    };
  
    p.setup = function() {
      p.createCanvas(300, 300);
    };
  
    //Simple Example
    p.draw = function() {
      p.background(0);
      p.fill(255);
      p.rect(x, y, 50, 50);
      p.textFont(p.font);
      p.textSize(12);
      p.textAlign(p.CENTER,p.CENTER);
      p.text("hello",100,100);
    };
  };

//To call this code and attach it to a div container in the DOM, use:
//let myp52 =  new p5(s,"barchart");
//In the main script file.