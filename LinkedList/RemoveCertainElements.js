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
    let current = head;
    while(current && current.next) {
        if(current.next.val === val) {
            current.next = current.next.next
        } else {
            current = current.next;
        }
    }
    return head;
}