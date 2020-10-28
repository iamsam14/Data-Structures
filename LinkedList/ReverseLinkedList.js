/**
 * Problem: Reverse A singly linked list
 * Example: 
 * Input: 1 - 2 - 3 - 4 - 5 - null
 * Output: 5 - 4 - 3 - 2 - 1 - null
 * 
 * The way to solve this is to keep track of three different nodes at the same time
 * A previous node, a current node and a next node
 * 
 * After the first iteration of our loop the Linked lists will look like this
 * 
 * Step 1: We take our next node and set it to the next node in our linked list
 * previous = null
 * next = current.next or head.next which is node 2
 * current = head which is node 1
 * Input: 1 - 2 - 3 - 4 - 5 - null
 * 
 * Step 2: We take our current node and point it to previous node or null
 * previous = null
 * next = node 2
 * current = head which is node 1
 * Linked list:
 * 1 - null
 * 2 - 3 - 4 - 5 - null
 * 
 * Step 3: We take our previous node or null and set it to our current node
 * previous = current or node 1
 * next = node 2
 * current = node 1
 *
 * Step 4: And then we take our current node and set it to the next node in our linked list
 * previous = node 1
 * next = node 2
 * current = node 2
 * 
 * Continuing the loop our Input will look like this
 * 
 * loop 2: 
 * Step 1: We take our next node and set it to the next node in our linked list
 * previous = node 1
 * next = node 3
 * current = node 2
 * 
 * Step 2: We take our current node and point it to previous node or null
 * previous = node 1
 * next = node 3
 * current = node 2
 * Linked list:
 * 2 - 1 - null
 * 3 - 4 - 5 - null
 * 
 * Step 3: We take our previous node or null and set it to our current node
 * previous = node 2
 * next = node 3
 * current = node 2
 * 
 * Step 4: And then we take our current node and set it to the next node in our linked list
 * previous = node 2
 * next = node 3
 * current = node 3
 * 
 * loop 3:
 * 3 - 2 - 1 - null
 * 4 - 5 - null
 * 
 * loop 4:
 * 4 - 3 - 2 - 1 - null
 * 5 - null
 * 
 * loop 5:
 * Input: 1 - 2 - 3 - 4 - 5 - null
 * At the end of our while loop our new Linked List now looks like so
 * Output: 5 - 4 - 3 - 2 - 1 - null
 * 
 */

 const reverseLinkedList = function(head) {
    let previous = null
    let next = null
    let current = head;

    while(current!==null) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    return prev
 }