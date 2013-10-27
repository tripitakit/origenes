/*
 * sequence.js
 *
 */

'use strict';

var _ = require('underscore');
_.str = require('underscore.string');

var Sequence = function(string) {
	
	this.TYPE = "DNA";
	this.SEQ = string.toUpperCase();
	this.LEN = string.length;
	
} 

Sequence.prototype.complement = function complement() {
	var complement = [];
	
	for (var i=0;  i<this.LEN; i++ ){
		var nucleotide = this.SEQ.charAt(i)
		switch (nucleotide) {
		case "A":
			complement[i] = "T";
			break;
		case "C":
			complement[i] = "G";
			break;
		case "G":
			complement[i] = "C";
			break;
		case "T":
			complement[i] = "A";
			break;
		case "R":
			complement[i] = "Y";
			break;
		case "Y":
			complement[i] = "R";
			break;
		case "-":
			complement[i] = "-";
			break;
		default:
			complement[i] = "N";
			break;
		}
	}
	return complement.join('');
};

Sequence.prototype.reverse = function reverse() {
	return _.str.reverse(this.SEQ);
};

Sequence.prototype.reverseComplement = function reverseComplement() {
	return _.str.reverse(this.complement());
};

module.exports = Sequence;