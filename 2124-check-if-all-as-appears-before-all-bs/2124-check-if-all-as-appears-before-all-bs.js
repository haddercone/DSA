/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
  let countB = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a') {
      if (countB > 0) {
        return false;
      }
    } else if (s[i] === 'b') {
      countB++;
    }
  }

  return true;
};