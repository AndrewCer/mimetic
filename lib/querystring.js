module.exports = function (input) {
  var objNew = {};
  if (input === null) {
    return objNew;
  } else {
    input = input.replace("?", "");
    input = input.split("&");
    for (var i = 0; i < input.length; i++) {
        var splitArray = input[i].split('=');
          objNew[splitArray[0]] = splitArray[1];
    }
    return objNew;
  }
}
