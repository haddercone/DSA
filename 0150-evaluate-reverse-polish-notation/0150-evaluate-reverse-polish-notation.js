/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    const n = tokens.length;
    for (let i = 0; i < n; i++) {
        let char = tokens[i];
        
        if (/\d/.test(char)) {
            let strToInt = parseInt(char);
            stack.push(strToInt);
        } else {
            let peak = stack.pop();
            let secondPeak = stack.pop();
            if (char === "+") {
                stack.push(secondPeak + peak);
            } else if (char === "-") {
                stack.push(secondPeak - peak);
            } else if (char === "*") {
                stack.push(secondPeak * peak);
            } else if (char === "/") {
                stack.push(Math.trunc(secondPeak / peak));
            }
        }
    }
    return stack[0];
};
