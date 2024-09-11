
// CVE-2018-16492

var ext = require('extend')

var obj = {}
obj.mine = function() { console.log("mine") }

var obj2 = {}
obj2.yours = function() { console.log("yours") }

ext(obj, obj2)

obj.mine();
obj.yours();
