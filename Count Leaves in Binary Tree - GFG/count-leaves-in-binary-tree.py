#User function Template for python3

'''
class Node:
    def __init__(self, val):
        self.right = None
        self.data = val
        self.left = None
'''
# your task is to complete this function
# function should return the count of Leaf node's
# Note: You required to print a new line after every test case
from collections import deque
def countLeaves(root):
    # Code here
    count = 0
    if root is None:
        return count
    
    visited_nodes = deque()
    visited_nodes.append(root)
    
    while (len(visited_nodes) >0):
        temp = visited_nodes[0]
        visited_nodes.popleft()
        
        if(temp.left is None and temp.right is None):
            count +=1
        if temp.left is not None:
            visited_nodes.append(temp.left)
        if temp.right is not None:
            visited_nodes.append(temp.right)
            
    return count



#{ 
 # Driver Code Starts
#Initial Template for Python 3

#Contributed by Sudarshan Sharma
from collections import deque
# Tree Node
class Node:
    def __init__(self, val):
        self.right = None
        self.data = val
        self.left = None

# Function to Build Tree   
def buildTree(s):
    #Corner Case
    if(len(s)==0 or s[0]=="N"):           
        return None
        
    # Creating list of strings from input 
    # string after spliting by space
    ip=list(map(str,s.split()))
    
    # Create the root of the tree
    root=Node(int(ip[0]))                     
    size=0
    q=deque()
    
    # Push the root to the queue
    q.append(root)                            
    size=size+1 
    
    # Starting from the second element
    i=1                                       
    while(size>0 and i<len(ip)):
        # Get and remove the front of the queue
        currNode=q[0]
        q.popleft()
        size=size-1
        
        # Get the current node's value from the string
        currVal=ip[i]
        
        # If the left child is not null
        if(currVal!="N"):
            
            # Create the left child for the current node
            currNode.left=Node(int(currVal))
            
            # Push it to the queue
            q.append(currNode.left)
            size=size+1
        # For the right child
        i=i+1
        if(i>=len(ip)):
            break
        currVal=ip[i]
        
        # If the right child is not null
        if(currVal!="N"):
            
            # Create the right child for the current node
            currNode.right=Node(int(currVal))
            
            # Push it to the queue
            q.append(currNode.right)
            size=size+1
        i=i+1
    return root
    
    
if __name__=="__main__":
    t=int(input())
    for _ in range(0,t):
        s=input()
        root=buildTree(s)
        print(countLeaves(root))
        
        

# } Driver Code Ends