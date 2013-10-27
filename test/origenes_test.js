'use strict';

var origenes = require('../lib/origenes.js');

exports['test'] = {
	'complement DNA squence' : function(test) {
		test.equal(origenes.complement("ACTG"), "TGAC");
		test.done();
	},
};