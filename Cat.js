function Cat(id, name) {
	this.id = id;
	this.name = name;
	this.isDead = false;
	this.stomach = [];
}

Cat.prototype.Die = function() {
	this.isDead = true;
}

Cat.prototype.Eat = function(mouse) {
	this.stomach.push(mouse);
}


module.exports = Cat;