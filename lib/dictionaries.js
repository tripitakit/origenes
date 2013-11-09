/****
 * dictionaries.js
 *
 * Nucleotides and Aminoacids Alphabets
 * Standard codon table
 */

var Dictionaries = {

	NA_ALPHABET: {
		"A": "T", "C": "G", "T": "A", "U": "A", "G": "C",
		"Y": "R", "R": "Y", "-": "-",	"N": "N",
	},

	CODON_TABLE: {
		standard: {
			'ACA': 'T', 'ACC': 'T', 'ACG': 'T', 'ACU': 'T',
			'AGA': 'R', 'AGC': 'S', 'AGG': 'R', 'AGU': 'S',
			'AUA': 'I', 'AUC': 'I', 'AUG': 'M', 'AUU': 'I',
			'CAA': 'Q', 'CAC': 'H', 'CAG': 'Q', 'CAU': 'H',
			'CCA': 'P', 'CCC': 'P', 'CCG': 'P', 'CCU': 'P',
			'CGA': 'R', 'CGC': 'R', 'CGG': 'R', 'CGU': 'R',
			'CUA': 'L', 'CUC': 'L', 'CUG': 'L', 'CUU': 'L',
			'GAA': 'E', 'GAC': 'D', 'GAG': 'E', 'GAU': 'D',
			'GCA': 'A', 'GCC': 'A', 'GCG': 'A', 'GCU': 'A',
			'GGA': 'G', 'GGC': 'G', 'GGG': 'G', 'GGU': 'G',
			'GUA': 'V', 'GUC': 'V', 'GUG': 'V', 'GUU': 'V',
			'UAA': '*', 'UAC': 'Y', 'UAG': '*', 'UAU': 'Y',
			'UCA': 'S', 'UCC': 'S', 'UCG': 'S', 'UCU': 'S',
			'UGA': '*', 'UGC': 'C', 'UGG': 'W', 'UGU': 'C',
			'UUA': 'L', 'UUC': 'F', 'UUG': 'L', 'UUU': 'F',
		}
	},

	AA_ALPHABET: ['A', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K', 'L',
								'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'Y'],

	AA3_ALPHABET: [ 'Ala', 'Cys', 'Asp', 'Glu', 'Phe', 'Gly', 'His', 'Ile',
									'Lys', 'Leu', 'Met', 'Asn', 'Pro', 'Gln', 'Arg', 'Ser',
									'Thr', 'Val', 'Trp', 'Tyr' ],
									
	ONLY_PROT_SYMBOLS: ['*', 'D', 'E', 'F', 'H', 'I','K', 
											 'L', 'M', 'P', 'Q', 'S', 'V', 'W']
	
};

module.exports = Dictionaries;