module.exports = ddelete;

var nestedRe = /(\.|\[)/;
var scrub = /]/g;

function ddelete(obj, path) {
  path = path.replace(scrub, '');
  var pathBits = path.split(nestedRe);
  var len = pathBits.length;
  var layer = obj;
  for (var i = 0; i < len; i += 2) {
    if (layer === null || layer === undefined) return undefined;
    var key = pathBits[i];
    if (key === '') continue;
    if (i === len - 1) {
      delete layer[key];
    } else {
      layer = layer[key];
    }
  }
  return obj;
}
