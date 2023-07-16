/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let l = 0;
    let r = 1;
    let profit = 0;
    const n = prices.length;
    
    while(r < n){
        if(prices[l] < prices[r]){
            let currProfit = prices[r] - prices[l];
            profit = Math.max(currProfit, profit)
        } else {
            l = r;
        }
        r++;
    }
    return profit;
};