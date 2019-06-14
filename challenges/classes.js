// 1. Copy and paste your prototype in here and refactor into class syntax.

//refactoring into class syntax: 

/*
// Old ES5 prototype code.
function CubiodMaker(props) {
	this.length = props.length;
	this.width = props.width;
	this.height = props.height;
}

CubiodMaker.prototype.volume = function() {
	return this.length * this.width * this.height;
}

CubiodMaker.prototype.surfaceArea = function() {
	return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
}
*/

class CubiodMaker {
	constructor(props) {
		this.length = props.length;
		this.width = props.width;
		this.height = props.height;
	}

	volume() {
		return this.length * this.width * this.height;
	}

	surfaceArea() {
		return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
	}
}

// Test your volume and surfaceArea methods by uncommenting the logs below:
const cube = new CubiodMaker({
	length: 4,
	width: 5,
	height: 5
});

console.log(cube);
console.log(cube.volume()); // 100
console.log(cube.surfaceArea()); // 130
// All tests were successful.

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.