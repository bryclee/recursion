// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  if (!isNaN(parseFloat(json)))
    return parseFloat(json);
  if (json === 'null')
    return null;
  if (json === 'true')
  	return true;
  if (json === 'false')
  	return false;
  if (json[0]==='"')
  	return json.slice(1,json.length-1);
  if (json[0]==='[') {
    /* INITIAL CODE
  	var buffer = json.slice(1,json.length-1).split(',');
  	if (buffer[0] === "")
  		buffer = [];
  	var results = [];
  	for (var i=0; i<buffer.length; i++) {
  		results.push(parseJSON(buffer[i].trim()));
  	}
  	return results;
    */
    var openBrace = 0;
    var openArray = 0;
    var openQuote = 0;
    var buffer = []; //buffer of letters
    var parts = []; //finished pieces
    for (var i = 1; i < json.length - 1; i++){
      if (json[i] === '[')
        openArray++;
      if (json[i] === ']')
        openArray--;
      if (json[i] === '{')
        openBrace++;
      if (json[i] === '}')
        openBrace--;
      if (json[i] === '"')
        openQuote = (openQuote + 1) % 2;
      if (openBrace + openArray + openQuote === 0 && json[i] === ','){
        parts.push(buffer.join(''));
        buffer = [];
      } else {
        buffer.push(json[i]);
      }
    }
    if (openBrace + openArray + openQuote !== 0)
      return undefined; //error
    parts.push(buffer.join(''));
    var results = [];
    for (var i = 0; i < parts.length; i++){
      results.push(parseJSON(parts[i]));
    }
    return results;
  }
  if (json[0]==='{') {
    /*
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
    */
    var openBrace = 0;
    var openArray = 0;
    var openQuote = 0;
    var buffer = []; //buffer of letters
    var parts = []; //finished pieces
    for (var i = 1; i < json.length - 1; i++){
      console.log(json[i]);
      if (json[i] === '[')
        openArray++;
      if (json[i] === ']')
        openArray--;
      if (json[i] === '{')
        openBrace++;
      if (json[i] === '}')
        openBrace--;
      if (json[i] === '"')
        openQuote = (openQuote + 1) % 2;
      if (openBrace + openArray + openQuote === 0 && (json[i] === ',' || json[i] === ':')){
        parts.push(buffer.join(''));
        buffer = [];
      } else {
        buffer.push(json[i]);
      }
    }
    if (openBrace + openArray + openQuote !== 0)
      return undefined; //error
    parts.push(buffer.join(''));
    var results = {};
    for (var i = 0; i < parts.length; i+=2){
      results[parseJSON(parts[i])] = parseJSON(parts[i+1]);
    }
    return results;
  }
  // is this array
  // if so, split string along , (or ", ")
  // recurse
};

var getBlocks = function(strn){
  var results = [];
  for (var i = 0; i <strn.length; i++) {

  }
}