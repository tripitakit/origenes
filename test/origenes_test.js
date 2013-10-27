'use strict'

var Sequence = require('../lib/origenes').Sequence;

exports['test'] = {
	
    setUp: function(done) {
      this.simple_oligo = new Sequence("ACTG");
	  this.complex_oligo = new Sequence("AN-RCTYGK");
      done();
    },
	
	'create a DNA sequence' : function(test) {
		test.expect(4);
		test.strictEqual(this.simple_oligo.type, 'DNA');
		test.strictEqual(this.simple_oligo.seq, "ACTG")
		test.strictEqual(this.simple_oligo.len,4);
		test.strictEqual(this.complex_oligo.len,9);
		test.done();
	},
	
	'complement a sequence' : function(test) {
		test.strictEqual(this.simple_oligo.complement(), "TGAC");
		test.done();
	},
	
	'complement a sequence with N, gaps and unrecognized nucleotides' : function(test) {
		test.strictEqual(this.complex_oligo.complement(), "TN-YGARCN");
		test.done();
	},
	
	'reverse a sequence' : function(test) {
		test.strictEqual(this.simple_oligo.reverse(), "GTCA");
		test.done();
	},
	
	'reverse and complement a sequence' : function(test) {
		test.strictEqual(this.simple_oligo.reverseComplement(), "CAGT");
		test.done();
	},
		
};