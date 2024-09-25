console.log("Hello World");
var qrcode = require('qrcode');
qrcode.toString('Hello World', {type: 'terminal'}, function (err, string) { 
  console.log(string); 
});