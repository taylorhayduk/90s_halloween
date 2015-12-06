var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
	this.children.push(Tree(value));
};

treeMethods.next = function(choice) {
	return this.children[choice-1];
}

treeMethods.contains = function(target){
	if(this.value === target) {
		return true;
	}

	for(var i = 0; i < this.children.length; i++) {
		if(this.children[i].contains(target)) {
			return true;
		}
	}

	return false;
};