'use strict'

var Sequence = require('../lib/origenes').Sequence;

exports['test'] = {
	
    setUp: function(done) {
      this.simple_oligo = new Sequence("ACTG");
	  this.complex_oligo = new Sequence("AN-RCTYGK");
	  this.long_oligo = new Sequence("GTTGACCGTAGCGAGTCCG");
	  this.rna = new Sequence("AUGGAACUGACUGAAGAUUGA");
	  
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
		test.expect(3);
		test.throws(function(){this.simple_oligo.SEQ="CGTA"}, Error);
		test.throws(function(){this.simple_oligo.LEN=42}, Error);
		test.throws(function(){this.simple_oligo.TYPE="DFQ"}, Error);
		test.done();
	},
	
	'oligos (18-25nt) has a Tm constant' : function(test) {
		test.expect(1);
		test.strictEqual(this.long_oligo.TM, 62);
		test.done();
	},
	
	'non-oligos (< 18nt || > 25nt) dont have a Tm' : function(test) {
		test.expect(1);
		test.throws(function(){ this.simple_oligo.TM });
		test.done();
	},
	
	'oligos (18-25nt) has a Ta constant' : function(test) {
		test.expect(1);
		test.strictEqual(this.long_oligo.TA, 57);
		test.done();
	},
	
	
	'complement a DNA sequence' : function(test) {
		test.expect(1);
		test.strictEqual(this.simple_oligo.complement().SEQ, "TGAC");
		test.done();
	},
	
	'complement a DNA sequence with N, gaps and unrecognized nucleotides' : function(test) {
		test.expect(1);
		test.strictEqual(this.complex_oligo.complement().SEQ, "TN-YGARCN");
		test.done();
	},
	
	'reverse a DNA sequence' : function(test) {
		test.expect(1);
		test.strictEqual(this.simple_oligo.reverse().SEQ, "GTCA");
		test.done();
	},
	
	'reverse and complement a DNA sequence' : function(test) {
		test.expect(1);
		var reversed_complement_seq_obj = this.simple_oligo.reverse().complement();
		test.strictEqual(reversed_complement_seq_obj.SEQ, "CAGT");
		test.done();
	},
		
	'create a RNA sequence' : function(test) {
		test.expect(1);
		test.strictEqual(this.rna.TYPE, "RNA");
		test.done();
	},
	
	'complement a RNA sequence' : function(test) {
		test.expect(1);
		test.strictEqual(this.rna.complement().SEQ, "UACCUUGACUGACUUCUAACU");
		test.done();
	},
	
	'transcribe DNA->RNA' : function(test) {
		test.expect(1);
		test.strictEqual(this.simple_oligo.transcribe().SEQ, "ACUG")
		test.done();
	},
	
	'cannot transcribe RNA' : function(test) {
		test.expect(1);
		test.throws(function(){ this.rna.transcribe() });
		test.done();
	},
	
	'reverse is chainable' : function(test) {
		test.expect(1);
		test.equal(this.simple_oligo.SEQ, this.simple_oligo.reverse().reverse().SEQ);
		test.done();
	}, 
	
	'complement reverse equals reverse complement (both are chainable)' : function(test) {
		test.expect(1);
		test.equal(this.simple_oligo.reverse().complement().SEQ, this.simple_oligo.complement().reverse().SEQ);
		test.done();
	}, 
	
	'translate an RNA into new seq instance of type PROT': function(test) {
		test.expect(2);
		test.equal(this.rna.translate().TYPE, "PROT");
		test.equal(this.rna.translate().SEQ, "MELTED*");
		test.done();
	},
	
	'translate an DNA into new seq instance of type PROT': function(test) {
		test.expect(2);
		test.equal(this.long_oligo.translate().TYPE, "PROT");
		test.equal(this.long_oligo.translate().SEQ, "VDRSES")
		test.done();
	},
};










