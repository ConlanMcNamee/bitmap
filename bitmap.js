'use strict';

var fs = require('fs');

var readBuf = function(data) {
	return new Buffer(data);
}

var holdBuf;


function holdFile(callback) {
	fs.readFile('./non-palette-bitmap.bmp', function(error, data) {
		if (error) {
			throw error
		} 
	  callback(null,data);
	});
}
var bitData = holdFile(function(err, data) {
	console.log(data);
	return data;
});

console.log(bitData);

	//found with colaboration
	//iterates through each byte swapping the color
	//this loop will basically invert the colors
	//for(var i = start; i < size; i++) {
		//second i value is to offset by i
		//data.writeUInt8(255 - data.readUInt8(i), i);
	//}
	//YES! it worked!
	//this will make a random rgb color 
	/*for(var i = start; i < size; i+= 3) {
		data.writeUInt8(Math.random() * 255, i);
		data.writeUInt8(Math.random() * 255, i + 1);
		data.writeUInt8(Math.random() * 255, i + 2);
	}
	//this shows me where the file starts writing from!
	//which is the bottom left moving towards the right
	for(var i = start; i < start + 60; i +=3) {
		data.writeUInt8(255, i); //blue
		data.writeUInt8(153, i + 1); // green
		data.writeUInt8(0, i + 2); //red
	}
	//messing around with colors so i can figure out what each byte corisponds too
	for(var i = start; i < size; i+= 3) {
		data.writeUInt8(255, i); //blue
		data.writeUInt8(153, i + 1); // green
		data.writeUInt8(0, i + 2); //red
	}

	fs.writeFile('anotherpalette.bpm', data, function(err) {
		if(err) {
			throw err;
		}
	})
});*/

