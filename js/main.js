p5.prototype.candleStick = function(x, y, w, h, min, max, candleColor, stickColor, secondStickColor) {
	// misc coords
	let ltCornerX = x - w/2;
	let ltCornerY = y - h/2;
	let rbCornerX = x + w/2;
	let rbCornerY = y + h/2;

	let topBarY = ltCornerY - max;
	let botBarY = rbCornerY + min;

	let strokeWeight = this.drawingContext.lineWidth;

	let lineLeftX = ltCornerX + strokeWeight/2;
	let lineRightX = rbCornerX - strokeWeight/2;

	if(strokeWeight == 1) {
		lineLeftX -= .5;
		lineRightX -= .5;
	}

	// cache settings to restore afterward
	let rectMode = this._renderer._rectMode;
	this.rectMode(this.CORNER);

	let doStroke = this._renderer._doStroke;
	let stroke = this._renderer._getStroke();

	let doFill = this._renderer._doFill;
	let fill = this._renderer._getFill();

	// draw
	if(typeof stickColor !== 'undefined') {
		this.stroke(stickColor);
	}
	// - top vertical line
	this.line(x, topBarY, x, ltCornerY);
	// - top horizontal line
	this.line(lineLeftX, topBarY, lineRightX, topBarY);

	if(typeof secondStickColor !== 'undefined') {
		this.stroke(secondStickColor);
	}
	// - bottom vertical line
	this.line(x, rbCornerY, x, botBarY);
	// - bottom horizontal line
	this.line(lineLeftX, botBarY, lineRightX, botBarY);

	if(typeof candleColor !== 'undefined') {
		this.fill(candleColor);
	}

	this.noStroke();
	this.rect(ltCornerX, ltCornerY, w, h);


	// restore settings
	if(doStroke) {
		this.stroke(stroke);
	} else {
		this.noStroke();
	}

	if(doFill) {
		this.fill(fill);
	} else {
		this.noFill();
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
    p.strokeWeight(10);
    p.candleStick(100, 100, 40, 80, 20, 40, p.color(255), p.color(255,100,100), p.color(100,100,255));
  }
}

let myp5 = new p5(s, document.getElementById('p5sketch'))