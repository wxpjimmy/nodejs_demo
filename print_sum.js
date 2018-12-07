sum = 0;

for (var i in process.argv) {
	console.log(process.argv[i])
	if(i > 1) {
		sum  = sum + Number(process.argv[i])
	}
}

console.log(sum)

console.log(process.argv)

var total = 0;
process.argv.forEach(function(param, index) {
	console.log(param);
	if(index > 1) {
		total = total + Number(param);
	}
});

console.log('Each iterator size：' + total);
