/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
    let n = nums.length;
        let mod = 1_000_000_007;
        nums.sort((a,b) => a - b);
        
        let power = [];
        power[0] = 1;
        for (let i = 1; i < n; ++i) {
            power[i] = (power[i - 1] * 2) % mod;
        }
        
        let answer = 0;
        let left = 0, right = n - 1;

        while (left <= right) {
            if (nums[left] + nums[right] <= target) {
                answer += power[right - left];
                answer %= mod;
                left++;
            } else {
                right--;
            }
        }
        
        return answer;
    
};