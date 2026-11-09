// Draws the contour lines behind the intro section.
(function () {
	var svg = document.getElementById("contours");
	var ns = "http://www.w3.org/2000/svg";
	var width = 1200;

	for (var line = 0; line < 22; line++) {
		var base = 30 + line * 28;
		var d = "";
		for (var x = 0; x <= width; x += 20) {
			var y = base
				+ Math.sin(x / 170 + line * 0.16) * (24 + line * 1.8)
				+ Math.sin(x / 61 + line * 0.33) * 7;
			d += (x === 0 ? "M" : "L") + x + " " + y.toFixed(1);
		}
		var path = document.createElementNS(ns, "path");
		path.setAttribute("d", d);
		svg.appendChild(path);
	}
})();
