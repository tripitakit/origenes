/****
 * sequence.js
 * 
 * A sequence wrapper object with basics
 * manipuation and persistence functionalities
 *
 * @Copyright (c) Patrick De Marta
 * @License MIT
 */

'use strict';

// Dependencies
var _ = require('underscore');
_.str = require('underscore.string');

var Dictionaries = require("./dictionaries"),
	NA_ALPHABET = Dictionaries.NA_ALPHABET,
	CODON_TABLE = Dictionaries.CODON_TABLE,
	ONLY_PROT_SYMBOLS = Dictionaries.ONLY_PROT_SYMBOLS;


// Constructor function
var Sequence = function(string) {
	this.SEQ = string.toUpperCase(); 
	this.LEN = string.length;
	this.TYPE = predictType(this.SEQ);
	if (isOligoDNA(this)) {
		this.TM = calculateTm(this.SEQ);
		this.TA = calculateTa(this.TM) 
	}
}; 


// Public interface methods

/**
 * Complement a DNA or RNA seq
 */
Sequence.prototype.complement = function() {
	var res = [];
	for (var i=0;  i<this.LEN; i++ ){
		var nt = this.SEQ.charAt(i);
		if (NA_ALPHABET[nt]) {
			res[i] = NA_ALPHABET[nt];
			if (this.TYPE=="RNA" && nt=="A") res[i] = "U";
		} else {
			res[i] = "N";
		}
	}
	return new Sequence(res.join(''));
};


/***
 *	Transcribe DNA -> RNA, chainable
 */
Sequence.prototype.transcribe = function(){
	if (this.TYPE == "DNA"){
		return new Sequence(this.SEQ.replace(/T/g, "U"));
	} else {
		throw("Error: can't call transcribe() on a RNA sequence.")
	}
};


/***
 *	Reverse seq, chainable
 */
Sequence.prototype.reverse = function() {
	return new Sequence(_.str.reverse(this.SEQ));
};


/***
 * Translate a RNA seq or transcribe.translate a DNA seq into AA.
 * Returns a sequence object with TYPE=PROT
 */
Sequence.prototype.translate = function(codon_table_id) {
	if (this.TYPE == "RNA") {
		// default to generic codon table
		var codonTable = CODON_TABLE[codon_table_id || "standard"];
		if (!codonTable) throw("Invalid codon table ID " + codon_table_id);
		
		var codon,
			polipeptide = [],
			seq = this.SEQ;
			
		for (var i = 0; i < Math.floor(seq.length/3); i++) {
		    codon = seq.slice(i*3, (i+1)*3);
		    polipeptide.push(codonTable[codon]);
		}
		return new Sequence(polipeptide.join(''));
		
	} else if (this.TYPE == "DNA") {
		var mrna = this.transcribe()
		return mrna.translate();

	} else {
		throw("Error 42. Wrong sequence type");
	}
};


Sequence.prototype.baseFrequency = function () {
	return 42;
}


/*** 
 *private functions
 */
function isOligoDNA(seq_obj){
	return (seq_obj.TYPE == "DNA") && (seq_obj.LEN >= 18 && seq_obj.LEN <= 25);
};

function calculateTm(seq) {
		// Tm = 4*[C+G] + 2*[A+T]
		var g = _.str.count(seq, "G"),
			c = _.str.count(seq, "C"),
			a = _.str.count(seq, "A"),
			t = _.str.count(seq, "T");
		return 4*(c+g) +2*(a+t);
	
};

function calculateTa(tm) {
	return (tm-5);
};   

function predictType(seq) {
	//check if DNA/RNA
	var type;
	if (seq.indexOf("U") > -1) {
		type = "RNA"
	} else { 
		type = "DNA"
	};
	
	// check if PROTEIN
	
	for(var k=0, len=ONLY_PROT_SYMBOLS.length; k<len; k++) {
		var letter = ONLY_PROT_SYMBOLS[k];
		if (seq.indexOf(letter) > -1) {
			type = 'PROT';
			break;
		};
	};
	return type
}

module.exports = Sequence;