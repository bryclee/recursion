// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  if (json === 'true')
  	return true;
  if (json === 'false')
  	return false;
  if (json[0]==='"')
  	return json.slice(1,json.length-1);
  if (json[0]==='[') {
  	var buffer = json.slice(1,json.length-1).split(',');
  	if (buffer[0] === "")
  		buffer = [];
  	var results = [];
  	for (var i=0; i<buffer.length; i++) {
  		results.push(parseJSON(buffer[i].trim()));
  	}
  	return results;
  }
  if (json[0]==='{') {
  	var buffer = json.slice(1,json.length-1).split(',');
  	if (buffer[0] === "")
  		buffer = [];
  	var results = {};
  	for (var i=0; i<buffer.length; i++) {
  		var key = buffer[i].split(':')[0].trim();
  		var value = buffer[i].split(':')[1].trim();
  		results[parseJSON(key)] = parseJSON(value);
  	}
  	return results;
  }
  // is this array
  // if so, split string along , (or ", ")
  // recurse
};
