
//Interval Chart Closure "ic". Input: Sketch "s".
const ic = s => {
    //Top scope variables for our closure structure.
    //Tick positions.
    //[***] TODO: scaling based on div size on computer screen, not hardcoded values
    s.delX = 1000 / 24;
    s.delY = 400 / 24;
    //Tick lengths.
    s.hX = 10;
    //Need one value for every hour, from 1 to 24 hrs. Normalized from 0 (Minimum) to 100 (Maximum).
    s.barH = [15, 12, 12, 20, 30, 60, 80, 100, 100, 100, 100, 100, 100, 98, 95, 90, 80, 70, 55, 45, 40, 30, 25, 20];
    s.calendarObj = "";
    //Just for importing our font.
    s.preload = () => {
        s.font = s.loadFont('./assets/VeraType.ttf');
    };

    //Make the canvas, set the font settings.
    s.setup = () => {
        s.createCanvas(1600, 600);
        s.textFont(s.font);
        s.textSize(12);
        s.textAlign(s.CENTER, s.CENTER);
    };

    s.drawaxes = () => {
        //Define points for lines.
        s.fill(128);
        s.line(100, 500, 1130, 500)
        s.line(100, 500, 100, 100)

        //X and Y tick marks.
        for (let i = 0; i <= 24; i++) {
            s.line(100 + s.delX * i, 500 + s.hX, 100 + s.delX * i, 500)
            s.text(i + "", 100 + s.delX * i, 500 + 2 * s.hX);
            s.line(100 - s.hX, 500 - s.delY * i, 100, 500 - s.delY * i)
            s.text((5 * i) + "", 100 - 2.5 * s.hX, 500 - s.delY * i);
        }

        //Now position axes labels:
        s.text("1hr Interval", 600, 550);
        s.push(); //Push Pop allows us to save neutral state, and reload it.
            s.translate(50, 300); //remember: rotations are from (0,0), so we must translate and use
            //relative coordinates.
            s.rotate(s.radians(-90));
            s.text("Energy / Productivity", 0, 0);
        s.pop();
    };

    s.drawbars = () => {
        for (let i = 0; i <= 24; i++) {
            s.rect(100 + (s.delX * (2 * i + 1) / 2 + 6), 500, 30, -s.barH[i] * 4);
        }
    }

    s.drawworkline = () => {
        s.fill(255, 0, 0);
        s.line(100, 334, 1100, 334);

    }

    s.gencalendar = () => {
        s.calendarObj = new Calendar();
        s.calendarObj.genTiles();
    }

    s.draw = function () {
        s.drawaxes();
        s.drawbars();
        s.drawworkline();
        s.gencalendar();
    };
};

//We are OUTSIDE our closure after this point (stop "s."ing everything now!!).

//Simply stores an array of days, and is attached to the bounding box.
class Calendar {
    constructor() {
        this.dayTileArr = [];
    }

    genTiles() {
       let xStart = 1150;
       let yStart = 100;
       for (let i = 0; i < 1; i++) {
           //if i is div by 7, we move to a new day.
           //update start square position - shift by 50 and add 5 for margin space.
           //genearate a new tile.
           let dTile = new DayTile(i+1,xStart+i*50,xStart+i*50);
           //add new tile to calendar
           this.addDayTile(dTile); 
           //display the tile on the screen.
           dTile.display();
        }
    }

    addDayTile(dtObj){
        this.dayTileArr.push(dtObj);
    }

    mousehover() {
        return;
    }
}

class DayTile {
    constructor(num,pX,pY) {
        this.daynum = num;
        this.h = 50;
        this.w = 50;
        this.pX = 0;
        this.pY = 0;
        //do we need a position?
    }

    display() {
        rect(this.pX,this.pY,this.w,this,h);
    }

    mousehover() {
        return;
    }

    mouseclick() {
        return;
    }
}