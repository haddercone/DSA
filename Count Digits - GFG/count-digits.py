#User function Template for python3


class Solution:
    def evenlyDivides (self, N):
        num, count = N, 0
        while N!=0:
            rem = N%10
            if rem == 0:
                N//=10
            else:
                N//=10
                if(num%rem == 0): count +=1
        return count
        


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        N = int(input())
       

        ob = Solution()
        print(ob.evenlyDivides(N))
# } Driver Code Ends