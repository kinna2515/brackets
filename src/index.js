module.exports = function check(str, bracketsConfig) {

  function getPairByOpeningBracket(bracketsConfig, bracket) {
    for (let o = 0; o < bracketsConfig.length; o++) {
      if (bracketsConfig[o][0] == bracket) {
        return bracketsConfig[o];
      }
    }
  }

  function getPairByClosingBracket(bracketsConfig, bracket) {
    for (let c = 0; c < bracketsConfig.length; c++) {
      if (bracketsConfig[c][1] == bracket) {
        return bracketsConfig[c];
      }
    }
  }

  let buffer = ''

  for (let i = 0; i < str.length; i++) {
    if (getPairByOpeningBracket(bracketsConfig, str[i]) != undefined && getPairByOpeningBracket(bracketsConfig, str[i])[0] == getPairByOpeningBracket(bracketsConfig, str[i])[1]) {
      if (buffer.slice(-1) == getPairByOpeningBracket(bracketsConfig, str[i])[0]) {
        buffer = buffer.slice(0, -1)
      } else { buffer += str[i]}
    }
    else if (getPairByOpeningBracket(bracketsConfig, str[i]) != undefined) {
      buffer += str[i]
    }
    else if (getPairByClosingBracket(bracketsConfig, str[i]) != undefined) {
      if (buffer.slice(-1) != getPairByClosingBracket(bracketsConfig, str[i])[0]) {
        return false;
      }
      else {
        buffer = buffer.slice(0, -1)
      }

    }

  }

  return (buffer == '')


}
