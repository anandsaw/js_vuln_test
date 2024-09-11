
// CVE-2019-17426

var mg = require('mongoose/lib/cast')
console.log(mg('y',{}));

