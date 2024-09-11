
// CVE-2023-45311

var fse = require('fsevents')

var info = fse.getInfo()
console.log(info);
