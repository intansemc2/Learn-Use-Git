var chalk = require("chalk");

function Dog(id, name) {
	this.id = id;
	this.name = name;
	this.stomach = [];
	this.isDead = false;
}

Dog.prototype.Eat = function(cat) {
	this.stomach.push(cat);
}

Dog.prototype.Die = function() {
	this.isDead = true;
}

Dog.prototype.sayHello = function() {
	console.log("Hello! I am a dog. My name is " + chalk.blue(this.name));
}

module.export = Dog;