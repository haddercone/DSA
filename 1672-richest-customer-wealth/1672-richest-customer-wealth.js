/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let richestCustomerWealth = accounts[0].reduce((acc, curr) => acc+curr, 0);
    for(const customer of accounts){
        const currentCustomerWealth = customer.reduce((acc,curr) => acc + curr, 0);
        if(currentCustomerWealth >= richestCustomerWealth){
            richestCustomerWealth = currentCustomerWealth;
        }
    }
    return richestCustomerWealth;
    
};