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
	return res.join('');
};

Sequence.prototype.transcribe = function(){
	if (this.TYPE == "DNA"){
		return this.SEQ.replace(/T/g, "U");
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

module.exports = Sequence;