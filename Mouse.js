function Mouse(id, name) {
	this.id = id;
	this.name = name;
}

Mouse.prototype.Run() {
	console.log("Mouse is running !!!");
}

module.export = Mouse;