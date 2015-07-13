var fs = require('fs');

exports.randomPixels = function randomPixels(data) {
	var start = data.readUInt32LE(10);
	var size = data.readUInt32LE(2);
	for(var i = start; i < size; i+= 3) {
		data.writeUInt8(Math.random() * 255, i);
		data.writeUInt8(Math.random() * 255, i + 1);
		data.writeUInt8(Math.random() * 255, i + 2);
	}
	return data;
};

exports.makeFile = function makeFile(data) {
	fs.writeFile('anotherpalette.bmp', data, function(err) {
		if(err) {
			throw err;
		}
	});
};

