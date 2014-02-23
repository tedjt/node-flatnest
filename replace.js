module.exports = replace;

var nestedRe = /(\.|\[)/;
var scrub = /]/g;

function replace(obj, path, newValue) {
  path = path.replace(scrub, '');
  var pathBits = path.split(nestedRe);
  var len = pathBits.length;
  var layer = obj;
  for (var i = 0; i < len; i += 2) {
    if (layer === null) return undefined;
    var key = pathBits[i];
    if (key === '') continue;
    if (i === len - 1) { 
      layer[key] = newValue;
    } else {
      layer = layer[key];
    }
  }
}
