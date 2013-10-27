Origenes
===
Implementing some basic nucleotide's sequences manipulation tools.
Self-study module to learn node. Early alpha release, of no practical public use.




## Getting Started
Install the module with: `npm install origenes`

```javascript
var Sequence = require('origenes').Sequence;
	
// Create sequence instances
var simple_oligo = new Sequence('ACTG'),
	complex_oligo = new Sequence('AN-RCTYGK');
	
// Properties	
simple_oligo.type; // 'DNA'
simple_oligo.seq; // 'ACTG'
simple_oligo.len; // 4
complex_oligo.len; // 9

// Methods
simple_oligo.reverse(); // 'GTCA'
simple_oligo.complement();  // 'TGAC'
complex_oligo.complement(); // 'TN-YGARCN'
simple_oligo.reverseComplement(); // 'CAGT'


```

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
0.0.6 Am I serious? :>
0.0.1 - 0.0.5 Just playing around

## License
Copyright (c) 2013 tripitakit  
Licensed under the MIT license.

