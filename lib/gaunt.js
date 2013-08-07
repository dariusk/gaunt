/*
 * gaunt
 * https://github.com/dariusk/gaunt
 *
 * Copyright (c) 2013 Darius Kazemi
 * Licensed under the MIT license.
 */

'use strict';
var fs = require('fs');

exports.render = function(filename) {
  var data = fs.readFileSync(filename, 'utf8');
    var result = '',
        output = '';
    for (var i=0; i<data.length; i++) {
      if (data.charCodeAt(i) === 9) {
        result += '0';
      }
      if (data.charCodeAt(i) === 32) {
        result += '1';
      }
    }
    result = result.match(/.{1,8}/g);
    for (i=0; i<result.length; i++) {
      output += String.fromCharCode(parseInt(result[i], 2));
    }
  return output;
};
