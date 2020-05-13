function Snake(id, name) {
	this.id = id;
	this.name = name;
}

Snake.prototype.Bite = function(animal) {
	console.log("Snake bite " + animal.name);
};

module.exports = Snake;