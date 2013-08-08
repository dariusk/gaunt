# gaunt

The most aesthetically minimalist markup language ever.

## Getting Started
**To use programatically (from Node.js):** Install the module with: `npm install gaunt`

```javascript
var gaunt = require('gaunt');
var renderedOutput = gaunt('path/to/file');
```

**To use from the command line:** Install the module with: `npm install -g gaunt`

```shell
# Input file(s)
$ gaunt path/to/file

# From standard in
$ cat index.gtf | gaunt
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## License
Copyright (c) 2013 Darius Kazemi  
Licensed under the MIT license.
