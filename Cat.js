function Cat(id, name) {
	this.id = id;
	this.name = name;
	this.isDead = false;
}

Cat.prototype.Die = function() {
	this.isDead = true;
}


module.export = Cat;