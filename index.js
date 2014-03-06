var structure = require ('structure-width');

var culvert = function(length, width) {
	var cost = (length * 305.973) + (width * 1037.1) - 10874.88;
	return parseFloat(cost.toFixed(0));
};

var total = function(length, width) {
		var cost = (length * 459.753) + (width * 3079.43) - 19322.1;
		return parseFloat(cost.toFixed(0));
};

module.exports.culvert = culvert;
module.exports.total = total;
