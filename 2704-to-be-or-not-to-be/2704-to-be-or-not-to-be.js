/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    const error = (err) => {
        throw new Error(err)
    }
    
    const toBe = (val1) =>  val === val1 ? true :  error("Not Equal");
    const notToBe =(val1) =>  val !== val1 ? true : error("Equal");
    
    return {toBe, notToBe};
    
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */