'use strict'

var Sequence = require('../lib/origenes').Sequence;

exports['test'] = {
	
    setUp: function(done) {
      this.simple_oligo = new Sequence("ACTG");
	  this.complex_oligo = new Sequence("AN-RCTYGK");
	  this.rna = new Sequence("CAUG");
      done();
    },
	
	'create a DNA sequence' : function(test) {
		test.expect(4);
		test.strictEqual(this.simple_oligo.TYPE, 'DNA');
		test.strictEqual(this.simple_oligo.SEQ, "ACTG")
		test.strictEqual(this.simple_oligo.LEN,4);
		test.strictEqual(this.complex_oligo.LEN,9);
		test.done();
	},
	
	'sequence properties are constants': function(test) {
		test.throws(function(){this.simple_oligo.SEQ="CGTA"}, Error);
		test.throws(function(){this.simple_oligo.LEN=42}, Error);
		test.throws(function(){this.simple_oligo.TYPE="DFQ"}, Error);
		test.done();
	},
	
	'complement a DNA sequence' : function(test) {
		test.strictEqual(this.simple_oligo.complement(), "TGAC");
		test.done();
	},
	
	'complement a DNA sequence with N, gaps and unrecognized nucleotides' : function(test) {
		test.strictEqual(this.complex_oligo.complement(), "TN-YGARCN");
		test.done();
	},
	
	'reverse a DNA sequence' : function(test) {
		test.strictEqual(this.simple_oligo.reverse(), "GTCA");
		test.done();
	},
	
	'reverse and complement a DNA sequence' : function(test) {
		test.strictEqual(this.simple_oligo.reverseComplement(), "CAGT");
		test.done();
	},
		
	'create a RNA sequence' : function(test) {
		test.strictEqual(this.rna.TYPE, "RNA");
		test.done();
	},
	
	'transcribe DNA->RNA' : function(test) {
		test.strictEqual(this.simple_oligo.transcribe(), "UGAC")
		test.done();
	},
	
	'cannot transcribe RNA' : function(test) {
		test.throws(function(){ this.rna.transcribe() });
		test.done();
	}
	
};