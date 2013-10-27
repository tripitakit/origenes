'use strict';

var origenes = require('../lib/origenes.js');

exports['test'] = {
	'complement a DNA squence' : function(test) {
		test.equal(origenes.complement("ACTG"), "TGAC");
		test.done();
	},
	
	'reverse a DNA squence' : function(test) {
		test.equal(origenes.reverse("ACTG"), "GTCA");
		test.done();
	},
	
	'reverse and complement a DNA sequence' : function(test) {
		test.equal(origenes.reverseComplement("ACTG"), "CAGT");
		test.done();
	},
	
	'reverse and complement a DNA sequence with underscore reverse()' : function(test) {
		test.equal(origenes.reverseComplement("ACTG"), "CAGT");
		test.done();
	},
};