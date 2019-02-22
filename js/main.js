p5.prototype.candleStick = function(x, y, w, h, min, max) {
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
	let fill = this._renderer._getFill();

	// draw
	this.stroke(fill);
	// - top vertical line
	this.line(x, topBarY, x, ltCornerY);
	// - bottom vertical line
	this.line(x, rbCornerY, x, botBarY);
	this.noStroke();

	this.rect(ltCornerX, ltCornerY, w, h);


	// restore settings
	if(doStroke) {
		this.stroke(stroke);
	} else {
		this.noStroke();
	}

	this.rectMode(rectMode);
}

let s = function( p ) {

  p.setup = function() {
    p.createCanvas(window.innerWidth, window.innerHeight);

    p.background(200);
    p.strokeWeight(4);
    p.strokeCap(p.PROJECT);

    let candleSize = 30;
    let margin = 20;
    let stepX = candleSize + margin;

    let candleCount = Math.round(p.width / stepX);

    let variability = .01;

    let lastY = p.height;
	let y = p.height / 2;
	let totHeight = p.randomGaussian(.5,1) * (p.height / 12);
	let min = p.randomGaussian(.5,1) * (totHeight / 4);
	let max = p.randomGaussian(.5,1) * (totHeight / 4);;
	let height = totHeight - min - max;
    for (var i = 0; i < candleCount; i++) {
    	// candleCount

    	p.candleStick(margin + i*stepX, y, candleSize, height, min, max);

    	lastY = y;
		y = y + p.noise(i * variability) * totHeight;
		if(y < lastY) {
			p.fill(100,255,100);
		} else {
			p.fill(255,100,100);
		}
		totHeight = p.randomGaussian(.5,1) * (p.height / 12);
		min = p.randomGaussian(.5,1) * (totHeight / 4);
		max = p.randomGaussian(.5,1) * (totHeight / 4);;
		height = totHeight - min - max;
    }

    // p.candleStick(100, 100, 40, 80, 20, 40, p.color(255), p.color(255,100,100), p.color(100,100,255));
  }

  p.draw = function() {
  }
}

let myp5 = new p5(s, document.getElementById('p5sketch'))