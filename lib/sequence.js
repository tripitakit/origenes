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

Sequence.prototype.Tm = function() {
	if (this.LEN >= 18 && this.LEN <= 25) {
		// Tm = 4*[C+G] + 2*[A+T]
		var g = _.str.count(this.SEQ, "G"),
			c = _.str.count(this.SEQ, "C"),
			a = _.str.count(this.SEQ, "A"),
			t = _.str.count(this.SEQ, "T");
		return 4*(c+g) +2*(a+t);
	} else {
		throw "Error: can't calculate Tm, Ta of non oligo (18-25nt long) sequences"
		return false;
	}
};

Sequence.prototype.Ta = function() {
	return this.Tm()-5;
};


module.exports = Sequence;