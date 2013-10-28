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

Sequence.prototype.complement = function complement() {
	var complement = [];
	for (var i=0;  i<this.LEN; i++ ){
		var nucleotide = this.SEQ.charAt(i);
		if (NA_ALPHABET[nucleotide]) {
			complement[i] = NA_ALPHABET[nucleotide];
			if (this.TYPE=="RNA" && nucleotide=="A") complement[i] = "U";
		} else {
			complement[i] = "N";
		}
	}
	return complement.join('');
};

Sequence.prototype.transcribe = function transcribe(){
	if (this.TYPE == "DNA"){
		var transcribe = [];
		for (var i=0;  i<this.LEN; i++ ){
			var nucleotide = this.SEQ.charAt(i);
			if (NA_ALPHABET[nucleotide]) {
				transcribe[i] = NA_ALPHABET[nucleotide];
				if (nucleotide=="A") transcribe[i] = "U";
			} else {
				transcribe[i] = "N";
			}
		}
		return transcribe.join('');
	} else {
		throw "Error: can't transcribe RNA. Do you mean retroTranscribe?"
		return false;
	}
};

Sequence.prototype.reverse = function reverse() {
	return _.str.reverse(this.SEQ);
};

Sequence.prototype.reverseComplement = function reverseComplement() {
	return _.str.reverse(this.complement());
};


module.exports = Sequence;