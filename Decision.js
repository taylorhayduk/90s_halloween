//decision class for create own adventure
var Decision = function(title, text) {
	this.title = title;
	this.storyText = text;
	this.choices = [];
}

Decision.prototype.addChoice = function(decision) {
	this.choices.push(decision);
}