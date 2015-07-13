var expect = require('chai').expect;
var changePixels = require('./changePixels');
var fs = require('fs');

describe('changed buffer is not equal to the staring buffer', function() {

	before(function(done) {
		var buf = fs.readFileSync('./non-palette-bitmap.bmp');
		changePixels.randomPixels(buf);
		//will output anotherpalette.bmp
		done();
	});
	it('should be changed', function() {
		var buf = fs.readFileSync('./non-palette-bitmap.bmp');
		var newBuf = fs.readFileSync('./anotherpalette.bmp');
		var first = buf.readUInt8(60);
		var second = newBuf.readUInt8(60);
		expect(first).to.not.eql(second);
	});
});