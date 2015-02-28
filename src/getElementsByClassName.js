// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, search
){
  if (search == null)
    search = document;
  var res = [];
  var children = search.childNodes;
  
  if (children.length == 0)
    return [];
  else {
    for (var i = 0; i < children.length; i++){
      if (children[i].classList == undefined) continue;
      for (var j = 0; j < children[i].classList.length; j++){
        if (className === children[i].classList[j])
          res.push(children[i])
      }
      res = res.concat(getElementsByClassName(className, children[i]));
    }
  }
  
  return res;
};