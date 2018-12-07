var fs = require('fs')
console.log(process.argv[2])

var buffer = fs.readFileSync(process.argv[2])
var content = buffer.toString()
var lines = content.split('\n')
for(var i in lines) {
	if(i != lines.length-1) {
		console.log('[' + i + ']\t' + lines[i]);
	}
}
var num = lines.length-1;
console.log('Total lines:' + num);

