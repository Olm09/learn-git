function TestObject(name, age) {
	this.name = name,
	this.age = age,
	this.info = function() {
		console.log(this.name + " is " + this.age + " old.");
	}
}

const test = new TestObject("Olm", 34);

test.info()
