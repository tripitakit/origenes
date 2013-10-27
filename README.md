Origenes
===
Implementing some basic nucleotide's sequences manipulation tools.
Self-study module to learn node. Early alpha release, of no practical public use.




## Getting Started
Install the module with: `npm install origenes`

```javascript

// Require constructor
var Sequence = require('origenes').Sequence;

	
// Create sequence instances
var simple_oligo = new Sequence('ACTG'),
	complex_oligo = new Sequence('AN-RCTYGK');
	
// Inspect instance CONSTANTS	
simple_oligo.TYPE; // 'DNA'
simple_oligo.SEQ; // 'ACTG'
simple_oligo.LEN; // 4
complex_oligo.LEN; // 9


// Use instance methods

simple_oligo.reverse(); // 'GTCA'
simple_oligo.complement();  // 'TGAC'
simple_oligo.reverseComplement(); // 'CAGT'

complex_oligo.complement(); // 'TN-YGARCN'

```

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
0.0.7 Sequence-refactoring and uppercase names of instance constants (that seems better)
0.0.6 Add Sequence object; am I taking this seriously?
0.0.5 Just playing around
..
0.0.1 Init!

## License
Copyright (c) 2013 tripitakit  
Licensed under the MIT license.

