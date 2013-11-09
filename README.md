#Origenes
Nucleotide sequences manipulation tools.

## Getting Started
Install the module with: `npm install origenes`

```javascript

var Sequence = require('origenes').Sequence;

// Create some sequence instances

	var simple_seq = new Sequence('ACTG');
	/*
		{ SEQ: 'ACTG', 
		  LEN: 4,
		  TYPE: 'DNA' }
	 */

	var oligonucleotide = new Sequence("GTTGACCGTAGCGAGTCCG");
	/*
		{ SEQ: 'GTTGACCGTAGCGAGTCCG',
		  LEN: 19,
		  TYPE: 'DNA',
		  TM: 62,
		  TA: 57 }
	 */

	var rna = new Sequence("AUGGAACUGACUGAAGAUUGA");
	/*
		{ SEQ: 'AUGGAACUGACUGAAGAUUGA', 
		  LEN: 21,
		  TYPE: 'RNA' }
	 */
 
	var degenerate_seq = new Sequence('AN-RCTYGK');
	/*
		{ SEQ: 'AN-RCTYGK',
		  LEN: 9,
		  TYPE: 'DNA' }
	 */


// Sequence instances are immutable, their properties are constants

	simple_seq.SEQ = "ATATATATATA";
	simple_seq.aNewProperty = "something":
	simple_seq; 
	/*
		{ SEQ: 'ACTG', 
		  LEN: 4,
		  TYPE: 'DNA' }
	 */


// Melting and annealing temperatures are calculated for DNA oligonucleotides [18..25nt]

	oligonucleotide.TM; // 62  as 4*(G+C) + 2*(A+T) in °C
	oligonucleotide.TA; // 57  as (TM - 5) in °C


// Tm, Ta are not defined for sequences shorter than 18nt or longer than 25nt

	simple_seq.TM; // undefined
	simple_seq.TA; // undefined


// Sequence instance methods return new Sequence instances

	simple_seq.transcribe();
	/*
		{ SEQ: 'ACUG', 
		  LEN: 4,
		  TYPE: 'RNA' }
	 */

	rna.transcribe(); 
	/*
		'Error: can't transcribe RNA.' 
	 */

	simple_seq.reverse();
	/*
		{ SEQ: 'GTCA', 
		  LEN: 4,
		  TYPE: 'DNA' }
	 */

	simple_seq.complement(); 
	/*
		{ SEQ: 'TGAC', 
		  LEN: 4,
		  TYPE: 'DNA' }
	 */

	degenerate_seq.complement(); 
	/* 
		{ SEQ: 'TN-YGARCN',
		  LEN: 9,
		  TYPE: 'DNA' }
	*/ 

	rna.complement(); 
	/*
		{ SEQ: 'UACCUUGACUGACUUCUAACU', 
		  LEN: 21,
		  TYPE: 'RNA' }
	 */


// Instance methods are chainable

	simple_seq.reverse().complement(); 
	/*
		{ SEQ: 'CAGT', 
		  LEN: 4,
		  TYPE: 'DNA' }
	 */

	simple_seq.SEQ == simple_seq.reverse().reverse().SEQ; // true

	simple_seq.reverse().complement().SEQ == simple_seq.complement().reverse().SEQ; // true


// Translate a RNA Sequence obect into a new Sequence instance of type PROT
	
	rna.translate();
	/*
		{ SEQ: 'MELTED*',
		  LEN: 6,
		  TYPE: 'PROT' }
	 */

// translate a DNA Sequence obect into new Sequence instance of type PROT
// with automatic/under the hood transcription()

	long_oligo.translate();
	/*
		{ SEQ: 'VDRSES',
		  LEN: 6,
		  TYPE: 'PROT' }
	 */
	 
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality.

Lint and test your code using [Grunt](http://gruntjs.com/).


## License
Copyright (c) 2013 tripitakit  
Licensed under the MIT license.

