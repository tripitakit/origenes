/*
 * origenes
 * https://github.com/tripitakit/origenes
 *
 * Copyright (c) 2013 tripitakit
 * Licensed under the MIT license.
 */

'use strict';


exports.complement = complement;

exports.reverse = reverse;

exports.reverseComplement = function(sequence) {
	return reverse(complement(sequence));
}


	// private
	function complement(sequence) {
		var complement = []
		sequence = sequence.toUpperCase();
		for (var i=0, len = sequence.length; i<len; i++ ){
			var nucleotide = sequence.charAt(i)
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
			}
		}
		return complement.join('');
	};

	function reverse(sequence) {
		var len = sequence.length,
			reverse = "";
		while (len--) { reverse = reverse + sequence[len] };
		return reverse;
	};




