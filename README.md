#Origenes
Implementing some basic nucleotide's sequences manipulation tools.

Self-study module to learn node. Early alpha release, of no practical public use.


## Getting Started
Install the module with: `npm install origenes`

```javascript

var Sequence = require('origenes').Sequence;

// Create some sequence instances
var simple_seq = new Sequence('ACTG'),
	complex_seq = new Sequence('AN-RCTYGK'),
	oligonucleotide = new Sequence("GTTGACCGTAGCGAGTCCG");
	rna = new Sequence("ACUG");

// Basic properties (as constants)
simple_seq.TYPE; // 'DNA'
simple_seq.SEQ; // 'ACTG'
simple_seq.LEN; // 4

rna.TYPE; // "RNA"
rna.SEQ; // "ACUG"


// Melting and annealing temperatures
oligonucleotide.TM; // 62 °C; = 4*(G+C) + 2*(A+T) 
oligonucleotide.TA; // 57 °C; = Tm - 5

simple_seq.TM; // false
simple_seq.TA; // false


// Sequence instance methods
simple_seq.transcribe(); // 'ACUG'
simple_seq.reverse(); // 'GTCA'
simple_seq.complement();  // 'TGAC'
simple_seq.reverseComplement(); // 'CAGT'

complex_seq.complement(); // 'TN-YGARCN'

rna.complement(); // 'UGAC'
rna.transcribe(); // 'Error: can't transcribe RNA.'

```

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
0.0.12 Change Tm and Ta into Sequence instance CONSTANTS (only for 18..25nt oligos)

0.0.11 Add Tm and Ta calculation for oligos in [18..25] nt range

0.0.10 Revision of readme document getting started

0.0.9 Fix transcription; (shame-shame-shame!)

0.0.8 Add dictionaries for nucleic acids, transcribe DNA -> RNA;

0.0.7 Sequence-refactoring and uppercase names of instance constants (that seems better)

0.0.6 Add Sequence object; am I taking this seriously?

0.0.5 Just playing around

[..]

0.0.1 Init!

## License
Copyright (c) 2013 tripitakit  
Licensed under the MIT license.

