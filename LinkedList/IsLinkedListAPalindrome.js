/**
 * Problem: Check a LinkedList and see if it is a plaindrome and return either true or false
 * Example:
 * Input: 1 - 2
 * Output: false
 * 
 * Input: 1 - 2 - 3 - 3 - 2 - 1
 * Output: true
 * 
 * Input: 1 - 2 - 3 - 2 - 1
 * Output: true
 * 
 * To solve this we are going to take the LinkedList and split it into two 
 * and then reverse one half of the split LinkedList with our helper function reverseLinkedList()
 * 
 * On an odd lengthed LinkedList our solution looks like this:
 * 
 * Our fast pointer moves two nodes at a time while our slow pointer moves one
 * 
 *        S
 * Input: 1 - 2 - 3 - 2 - 1
 *        F
 * 
 *            S 
 * Input: 1 - 2 - 3 - 2 - 1
 *                F
 * 
 *                S
 * Input: 1 - 2 - 3 - 2 - 1
 *                        F
 * 
 * Once we have reached the end of our LinkedList our fast pointer has 
 * no more nodes to traverse so we take node after slow and 
 * reverse the order of the remaining nodes in that list
 * 
 * Now we have two LinkedLists
 * Input: 1 - 2 - 3 - 2 - 1
 * slow:  1 - 2 
 * 
 * Once we have our two LinkedLists we will check each node to ensure that they are equal
 * 
 * On an even lengthed LinkedList the solution will look like the following
 * 
 *        S
 * Input: 1 - 2 - 3 - 3 - 2 - 1
 *        F
 * 
 *            S
 * Input: 1 - 2 - 3 - 3 - 2 - 1
 *                F
 *  
 *                S
 * Input: 1 - 2 - 3 - 3 - 2 - 1
 *                        F
 * 
 * Once out fast pointer has run out of nodes to traverse we reverse the LinkedList of the node after slow
 * Our two LinkedLists look like so:
 * Input: 1 - 2 - 3 - 3 - 2 - 1
 * slow:  1 - 2 - 3
 */


const isPalindrome = function(head) {
    // If there is no head or is the LinkedList is only one node long return true
    if(head === null || head.next === null) return true;

    // Here we have our slow and fast pointers
    let slow = head;
    let fast = head;
    
    // While our fast pointer can move two nodes at a time we are going to move 
    // our fast pointer down two nodes and then our slow pointer down one node
    // When we can no longer move our fast pointer down two 
    // nodes our slow pointer will be at the halfway point
    while(fast.next !== null && fast.next.next !== null) { 
        fast = fast.next.next;
        slow = slow.next;
    }

    // Here we are going to take our slow LinkedList and reverse it using our helper function
    slow.next = reverseLinkedList(slow.next);

    // Now slow is the head of the reverse LinkedList
    slow = slow.next;

    // Fast is reset to the head of the LinkedList
    fast = head;

    // while we have a slow node to check we are going to check if the value 
    // of our reversed half LinkedList is the same as our original LinkedList
    // If our node values don't match return false
    while(slow !== null) {
        if(fast.val !== slow.val) return false;
        
        slow = slow.next;
        fast = fast.next
    }
    // Once we have checked that all of our slow nodes have the same value as our 
    // original nodes we can be sure that our LinkedList is in fact a palindrome
    return true;
};

// Helper function
const reverseLinkedList = head => {
    let prev = null;
    let next = null;
    while(head !== null) {
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
};
