const getIntersectionNode = function(headA, headB) {
    
/**
*   Switch LinkedList at the end so you even out un-even LinkedLists 
*   LinkedLists will sync up at the intersection that way 
*   Now you can straight up do a comparison
*   Example: 
*
*   const listA = new LinkedList()
*   const listB = new LinkedList()8
*
*   A     4
*          \
*           5 - 6 - 7 - 8
*          /
*   B 2 - 0
*   listA nodes {4, 5, 6, 7, 8}
*   listB nodes {2, 0, 5, 6, 7, 8}   (v)Switch to listB
*   A will follow 4 - 5 - 6 - 7 - 8 - 2 - 0 - 5
*   B will follow 2 - 0 - 5 - 6 - 7 - 8 - 4 - 5 
*                                        (^)Switch to listA
*   After switching lists the pointers either reach the intersection 
*   or both become null and exits the loop returning null
*/ 

    if (!headA || !headB) {
        return null;
    }
    
    // current nodes
    let curA = headA;
    let curB = headB;
    
    while (curA !== curB) {
        
        // If there is a Node after curA then curA will be set to it
        if (curA.next) {
            curA = curA.next;
        } else {
            // If there is no Node after curA && curB then both are 
            // set to null and we exit the while loop returning null
            if (!curB.next) {
                curA = null;
                curB = null;
                break;
            }
            // If there is no Node after curA && there is a Node after curB 
            // then curA will start at the head of listB
            curA = headB;
        }
        
        // If there is a Node after curB then curB will be set to it
        if (curB.next) {
            curB = curB.next 
        } else {
            // If there is no Node after curB then curB will be set to the head of listA
            curB = headA;
        }
    }
    
    return curB;
};