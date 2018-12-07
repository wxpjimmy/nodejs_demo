var fs = require('fs');
var path = require('path');

function travel(dir, callback) {
	fs.readdirSync(dir).forEach(function (file) {
		var pathname = path.join(dir, file);

		if (fs.statSync(pathname).isDirectory()) {
			travel(pathname, callback);
		} else {
			callback(pathname);
		}

	});
}

console.log('File folder:' + process.argv[2]);

travel(process.argv[2], function (pathname)  {
	console.log(pathname);
});
