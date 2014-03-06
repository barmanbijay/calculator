var test = require('tape'),
		cost = require('../index.js');

test(function(t) {
	t.plan(2);
	t.equal(cost.culvert(40, 10), 11735);
	t.equal(cost.total(40, 10), 29862);
});
