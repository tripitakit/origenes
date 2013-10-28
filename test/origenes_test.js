'use strict'

var origenes = require('../lib/origenes');

exports['test'] = {
	
	'origenes namespace: Sequence constructor"' : function(test) {
		test.expect(1);
		test.ok(Object.keys(origenes).indexOf('Sequence') > -1 );
		test.done();
	},

};