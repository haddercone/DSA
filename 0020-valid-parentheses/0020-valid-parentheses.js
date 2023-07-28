/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length === 0) {
        return true;
    }

    const stack = [];
    stack.push(s[0]);
    const n = s.length;

    for (let i = 1; i < n; i++) {
        let char = s[i];
        let lastStackElement = stack[stack.length - 1];

        if ((char === "]" && lastStackElement === "[") ||
            (char === ")" && lastStackElement === "(") ||
            (char === "}" && lastStackElement === "{")
        ) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
};
