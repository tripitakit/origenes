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
	if (isOligo(this)) {
		this.TM = calculateTm(this.SEQ);
		this.TA = calculateTa(this.TM) 
	}
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
	return new Sequence(res.join(''));
};

Sequence.prototype.transcribe = function(){
	if (this.TYPE == "DNA"){
		return new Sequence(this.SEQ.replace(/T/g, "U"));
	} else {
		throw "Error: can't call transcribe() on a RNA sequence."
		return false;
	}
};

Sequence.prototype.reverse = function() {
	return new Sequence(_.str.reverse(this.SEQ));
};


function isOligo(seq_obj){
	return (seq_obj.LEN >= 18 && seq_obj.LEN <= 25);
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


module.exports = Sequence;