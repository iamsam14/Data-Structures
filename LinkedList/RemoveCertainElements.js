/**
 * Problem: Remove all elements from a singly LinkedList that have a specific value
 * 
 * Example:
 * Input: 1 - 2 - 1 - 3 - 1 
 * Output: 2 - 3
 * 
 */
var removeElements = function(head, val) {
    // If there is no head return the empty LinkedList
    if(!head) return head;

    // While there is a head and the value of that head equals val remove it from the LinkedList
    while(head) {
        if(head.val === val) {
            head = head.next;
        } else {
            break;
        }
    }

    // Start from the head that we have now made sure is not a value we want to remove
    // If there is no head skip the while loop and then return empty LinkedList
    let current = head;

    // Now check every next Node to see if the value of that Node is one we wish to remove
    // If the next Node is a value we wish to remove we remove it 
    // and then move the rest of the list over one Node and continue checking 
    // to see if the Node after current is one we wish to remove
    // If the next node is not one we wish to remove then we move onto the next Node
    while(current && current.next) {
        if(current.next.val === val) {
            current.next = current.next.next
        } else {
            current = current.next;
        }
    }

    // Once we have reached the end of our LinkedList there are no more Nodes to 
    // check and we have removed all Nodes with the value we input and we return our LinkedList
    return head;
}