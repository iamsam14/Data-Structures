/**
 * Problem: Take a singly LinkedList and group all odd nodes 
 * together followed by the even nodes(by position, not value)
 * First node is considered odd
 * 
 * Example:
 * Position    1   2   3   4   5
 *      Input: 1 - 2 - 3 - 4 - 5 - null
 *      Output: 1 - 3 - 5 - 2 - 4 - null
 * Position     1   3   5   2   4
 * Position    1   2   3   4   5   6
 *      Input: 2 - 4 - 7 - 1 - 5 - 9 - null
 *      Output: 2 - 7 - 5 - 4 - 1 - 9 - null
 * Position     1   3   5   2   4   6
 * 
 * To do this we are going to take our LinkedList and split it up into two LinkedLists
 * 
 * odd to keep track of the odd Nodes
 * even to keep track of the even Nodes
 * evenHead to keep track of all Nodes with an even position
 * 
 * After the first iteration of our while loop our LinkedLists will look like this:
 * Input: 2 - 4 - 7 - 1 - 5 - 9 - null
 *    odd(^) (^)even
 * We look at our new heads and make the next Node for each 
 * LinkedList the Node after the opposites next Node
 * 
 * odd: 2 - 7 - 1 - 5 - 9 - null
 * even 4 - 1 - 5 - 9 - null
 *         (^) Next iteration checks this Node
 * 
 * loop 2:
 * odd: 2 - 7 - 5 - 9 - null
 * even: 4 - 1 - 9 - null
 * Next iteration checks the third Node
 * 
 * loop 3:
 * odd: 2 - 7 - 5 - 4 - 1 - 9 - null
 * Since there are no more Nodes after 9 in our even LinkedList we take our odd LinkedList 
 * which is also on the third Node and assign the even LinkedList to come after it
 */
var oddEvenList = function(head) {
    // If there is no head return empty LinkedList
    if(!head) return null;
    let odd = head;
    let even = head.next;
    let evenHead = even;
    
    while(even !== null && even.next) {
        // This reassigns the second Node in our list to be the third Node in our LinkedList
        odd.next = even.next;

        // We move down a Node to check for the next Node in the continuing iteration
        odd = odd.next;

        // This reassigns the next Node in our even LinkedList to be the next even 
        // indexed Node since the Node after an odd indexed one would be even
        even.next = odd.next;

        // We move down a Node to check for the next Node in the continuing iteration
        even = even.next;
    }

    // Once we have no more even indexed Nodes we will take our odd 
    // indexed LinkedList and link it to our even indexed LinkedList
    odd.next = evenHead;
    return head;
};
