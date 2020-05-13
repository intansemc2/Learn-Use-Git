function Mouse(id, name) {
	this.id = id;
	this.name = name;
	this.isDead = false;
}

Mouse.prototype.Run = function() {
	console.log("Mouse is running !!!");
}

Mouse.prototype.Die = function() {
	this.isDead = true;
}

Mouse.prototype.runWhenSeeCat = function() {
	console.log("Mouse run when see cat.");
};

module.exports = Mouse;