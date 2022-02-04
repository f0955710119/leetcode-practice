//     0)確定是基數還偶數長度的數值
//     1)利用長度去剖半作對比
//     2)最後加的值不可以大於長度減1

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (!Number.isInteger(+x)) {
    console.log('Please give an INT');
    return false;
  }

  if (x < 0) {
    console.log('Please give an positive INT');
    return false;
  }

  var result;
  var i = 1;
  var numStr = '' + x;
  var middle = Math.trunc(numStr.length / 2);
  var middleFixed = Math.trunc(numStr.length / 2);

  if (middle === 0) {
    result = true;
    return result;
  }

  //      基數
  if (!Number.isInteger(numStr.length / 2)) {
    while (middle > 0) {
      if (numStr[middleFixed - i] !== numStr[middleFixed + i]) {
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
      if (numStr[middleFixed + i - 1] !== numStr[middle]) {
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

console.log(isPalindrome('ss'));
console.log(isPalindrome('-121'));
console.log(isPalindrome(-121));
console.log(isPalindrome(121));
console.log(isPalindrome(1221));
console.log(isPalindrome(12321));
console.log(isPalindrome(123321));
