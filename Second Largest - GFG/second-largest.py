#User function Template for python3
import math
class Solution:

	def print2largest(self,arr, n):
        large, second_large = -math.inf, -math.inf
        
        for i in range(n):
            if arr[i] > large:
                second_large = large
                large = arr[i]
                
            elif second_large < arr[i] < large: 
                second_large  = arr[i]
            
        if second_large == -math.inf:
            return -1
        else:
            return second_large
            
	    


#{ 
 # Driver Code Starts
#Initial Template for Python 3



if __name__ == '__main__':
    tc = int(input())
    while tc > 0:
        n = int(input())
        arr = list(map(int, input().strip().split()))
        ob = Solution()
        ans = ob.print2largest(arr, n)
        print(ans)
        tc -= 1

# } Driver Code Ends