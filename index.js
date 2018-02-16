var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

function equal (a, b) {
  if (a === b) return true;
  if (!a || !b) return false;
  if (!(a instanceof Object) || !(b instanceof Object)) return false;

  var keys = keyList(a);
  var length = keys.length;

  for (let i = 0; i < length; i++)
    if (!(keys[i] in b)) return false;

  for (let i = 0; i < length; i++)
    if (a[keys[i]] !== b[keys[i]]) return false;

  return length === keyList(b).length;
}

exports.equal = equal;
