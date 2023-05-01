/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    salary.sort((a,b) => a-b)
    let salaryCount = salary.length-2
    let sum = 0;
    for(i=1; i<salary.length-1;i++){
        sum+=salary[i];
    }
    return (sum/salaryCount).toFixed(5)
};