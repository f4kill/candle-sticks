p5.prototype.candleStick = function(x, y, w, h, min, max) {
	// misc coords
	let ltCornerX = x - w/2;
	let ltCornerY = y - h/2;
	let rbCornerX = x + w/2;
	let rbCornerY = y + h/2;

	let topBarY = ltCornerY - max;
	let botBarY = rbCornerY + min;

	let strokeWeight = this.drawingContext.lineWidth;

	// cache settings to restore afterward
	let rectMode = this._renderer._rectMode;
	this.rectMode(this.CORNER);

	let doStroke = this._renderer._doStroke;
	let stroke = this._renderer._getStroke();


	// draw
	// - top vertical line
	this.line(x, topBarY, x, ltCornerY);
	// - top horizontal line
	this.line(ltCornerX, topBarY, rbCornerX, topBarY);
	// - bottom vertical line
	this.line(x, rbCornerY, x, botBarY);
	// - bottom horizontal line
	this.line(ltCornerX, botBarY, rbCornerX, botBarY);

	this.noStroke();
	this.rect(ltCornerX, ltCornerY, w, h);


	// restore settings
	if(doStroke) {
		this.stroke(stroke);
	}

	this.rectMode(rectMode);
}

let s = function( p ) {

  p.setup = function() {
    p.createCanvas(window.innerWidth, window.innerHeight);

    console.log(this);
    console.log(p._renderer._getFill());
  }

  p.draw = function() {
    p.background(0);

    p.fill(255);
    p.stroke(100, 255, 100);
    p.strokeWeight(2);
    p.candleStick(100, 100, 20, 40, 10, 20);
  }
}

let myp5 = new p5(s, document.getElementById('p5sketch'))