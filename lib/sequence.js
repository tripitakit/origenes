/*
 * sequence.js
 *
 */

'use strict';

var _ = require('underscore');
_.str = require('underscore.string');
var NA_ALPHABET = require("./dictionaries").NA_ALPHABET;


var Sequence = function(string) {
	this.SEQ = string.toUpperCase(); 
	this.LEN = string.length;
	this.TYPE = (this.SEQ.indexOf("U") > -1) ? "RNA" : "DNA";
	Object.freeze(this);
}; 


/*
 * Public interface
 */

Sequence.prototype.complement = function() {
	return trans_comp(this, "complement");
};

Sequence.prototype.transcribe = function(){
	if (this.TYPE == "DNA"){
		return trans_comp(this, "transcribe");
	} else {
		throw "Error: can't call transcribe() on a RNA sequence."
		return false;
	}
};

Sequence.prototype.reverse = function() {
	return _.str.reverse(this.SEQ);
};

Sequence.prototype.reverseComplement = function() {
	return _.str.reverse(this.complement());
};



/*
 * private functions
 */
function trans_comp(seq_obj, meth) {
	var results = [];
	for (var i=0;  i<seq_obj.LEN; i++ ){
		var nucleotide = seq_obj.SEQ.charAt(i);

		if (NA_ALPHABET[nucleotide]) {

			results[i] = NA_ALPHABET[nucleotide];
			switch (meth) {
			case "complement":
				if (seq_obj.TYPE=="RNA" && nucleotide=="A") results[i] = "U";
				break;
			case "transcribe":
				if (nucleotide=="A") results[i] = "U";
				break;
			}

		} else {
			results[i] = "N";
		}
	}
	return results.join('');
}


module.exports = Sequence;