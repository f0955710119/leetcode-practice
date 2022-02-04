/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  //     0)確定是基數還偶數長度的數值
  //     1)利用長度去剖半作對比
  //     2)最後加的值不可以大於長度減1
  var number = x;
  if (!Number.isInteger(+x)) {
    console.log('Please give an INT');
    return false;
  }

  if (number < 0) {
    console.log('Please give an positive INT');
    return false;
  }

  var result;
  var i = 1;
  var numStr = '' + number;
  var middle = Math.trunc(numStr.length / 2);
  var middleFixed = Math.trunc(numStr.length / 2);

  if (middle === 0) {
    result = true;
    return result;
  }

  //      基數
  if (!Number.isInteger(numStr.length / 2)) {
    while (middle > 0) {
      var number1 = numStr[middleFixed - i];
      var number2 = numStr[middleFixed + i];

      if (number1 !== number2) {
        result = false;
        break;
      } else {
        result = true;
      }
      i++;
      middle--;
    }
    //     偶數
  } else {
    while (middle > 0) {
      middle--;
      var number1 = numStr[middleFixed + i - 1];
      var number2 = numStr[middle];
      if (number1 !== number2) {
        result = false;
        break;
      } else {
        result = true;
      }
      i++;
    }
  }
  return result;
};

console.log(isPalindrome(-121));
