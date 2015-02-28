// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var res = [];
  if (obj === null) return 'null'
  else if (typeof obj !== 'object'){
    if (typeof obj === 'boolean' || typeof obj === 'number')
      return String(obj);
    else if (typeof obj === 'string')
      return '"' + obj + '"';
  }
  else if (obj instanceof Array) {
    for (var i = 0; i < obj.length; i++){
      if (obj === null) res.push('null')
      else if (typeof obj[i] !== 'symbol')
        res.push(stringifyJSON(obj[i]));
    }
    return '[' + res.join(',') + ']';
  } else if (obj instanceof Number) {
    return String(Number(obj));
  } else if (obj instanceof Boolean) {
    return String(Boolean(obj));
  } else if (obj instanceof String) {
    return '"' + String(obj) + '"';
  } else {
    for (var prop in obj){
      if (typeof prop !== 'symbol' && typeof obj[prop] !== 'symbol' &&
          typeof prop !== 'function' && typeof obj[prop] !== 'function' &&
          obj[prop] !== undefined)
        res.push('"' + prop + '":' + stringifyJSON(obj[prop]));
    }
    return '{' + res.join(',') + '}';
  }
};
