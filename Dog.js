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