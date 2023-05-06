class Solution(object):
    def numSubseq(self, nums, target):
        mod = 10**9 + 7
        nums.sort()
        n = len(nums)
        left, right  = 0,n-1
        ans = 0 
        while left <= right:
            if nums[left] + nums[right]> target:
                right -= 1
            else:
                ans += pow(2, right-left, mod)
                left +=1
        return ans%mod
        