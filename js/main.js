// class CandleStick {
// 	constructor(p5instance) {
// 		this.p = p5instance;
// 	}

// 	setPosition(x, y) {

// 	}

// 	draw() {

// 	}
// }

function candleStick(x, y, w, h, min, max) {
	let fill = p._renderer._getFill();
	let stroke = p._renderer._getStroke();

	let doFill = p._doFill,
		doStroke = p._doStroke;

	
}

let s = function( p ) {

  p.setup = function() {
    p.createCanvas(200, 200);

    console.log(this);
    console.log(p._renderer._getFill());
    // let candle = new CandleStick(0, 0, 20, 40, 80, -20);
  }

  p.draw = function() {
    p.background(0);

  }
}

let myp5 = new p5(s, document.getElementById('p5sketch'))