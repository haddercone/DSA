class Solution:

	def print2largest(self,arr, n):
        sl = sorted(list(set(arr)))
        if len(sl) == 2:
            return min(sl)
        elif len(sl) ==1:
            return -1
        else:
            return sl[-2]
