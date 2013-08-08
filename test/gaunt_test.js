'use strict';

var gaunt = require('../lib/gaunt.js');
var fs = require('fs');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['read'] = {
  setUp: function(done) {
    done();
  },
  'no args': function(test) {
    test.expect(1);
    var input = fs.readFileSync('test/fixtures/helloworld.gtf', 'utf8');
    test.equal(gaunt(input), 'Hello world!', 'should be "Hello, world!"');
    test.done();
  },
};
