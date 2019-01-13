/**
 * Searches throug every level of the json to look for a key
 * @param {*} key
 * @param {*} json
 */
function hasAttr(key, json) {

  // If either key or json is null, return error
  if (!json || !key || !isJson(json)){

    return false;
  }

  // If the key is available at the first level
  if (json.hasOwnProperty(key)){

    return true;
  }

  // Iterate through all keys and pass every level to hasAttr recursively
  var keys = Object.keys(json);
  for (var i = 0; i < keys.length; i++) {

    var objKey = keys[i];
    if (hasAttr(key, json[objKey])) {

      return true;
    }
  }

  return false;
}

function isJson(input) {

  /* eslint-disable valid-typeof */
  if (typeof input !== 'object' && typeof input !== 'array') {
    return false;
  }

  return true;
}

module.exports = hasAttr;
