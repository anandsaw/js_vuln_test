const _ = require('lodash');

// CVE-2019-10744

var ret = _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
console.log(ret); // => { 'a': { 'b': 2, 'c': 3 } }
