// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){
	var results=[];
  // your code here
  var checkClass = function(className, node) {
  	if (node.classList.contains(className)) {
  		results.push(node);
  	}
  	for (var i=0; i<node.children.length;i++) {
  		checkClass(className, node.children[i]);
  	}
  }
  checkClass(className, document.body);
  return results;
};
