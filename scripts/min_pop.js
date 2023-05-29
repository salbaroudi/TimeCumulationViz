let sketch = function(p) {

    p.currangle = 0.0;

    p.setup = function() {
      p.createCanvas(700, 410);
    };
  
    p.draw = function() {
        //If we don't call background, our objects from previous frames stay persistant! Use to clear.
      p.background(255);
      p.line(10,10,100,10);
      p.text("Hello1",10,20);
      p.push();
        p.strokeWeight(3);
        p.point(100, 100);
      p.pop();

      //Our issue is that rotations are from the (0,0) abs position. So we must translate our frame first!
      p.push();
        p.translate(100,100);
        p.rotate(p.radians(p.currangle));
        p.line(0,0,100,0);
        p.text("Hello2",0,10); //relative coordinates, to translation above.
      p.pop();

      p.currangle += 0.25;

    };

  };
  
