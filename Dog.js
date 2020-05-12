function Dog(id, name) {
	this.id = id;
	this.name = name;
	this.stomach = [];
}

Dog.prototype.Eat = function(cat) {
	this.stomach.push(cat);
}