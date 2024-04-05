/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (stack.length > 0 && isBadPair(stack[stack.length - 1], char)) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    return stack.join("");
};

function isBadPair(char1, char2) {
    return char1 !== char2 && char1.toLowerCase() === char2.toLowerCase();
}
