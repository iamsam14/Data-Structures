class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    addHead(data) {
        this.head = new Node(data, this.head);
        this.size++;
        return;
    }

    addTail(data) {
        if(!this.head) {
            return this.addHead(data)
        }

        // lastNodeIndex is the index of the last Node in your LinkedList
        const lastNodeIndex = this.size - 1;
        let current = this.head;
        let count = 0;
        let previous;
        while(count < lastNodeIndex) {
            count++;
            previous = current;
            current = current.next;
        }
        // If there is a loop in your LinkedList then the new tail will continue that loop
        current.next = new Node(data, current.next)
        this.size++;
        return;
    }

    createLoopAt(index) {
        // The size of your LinkedList minus one will always be
        // the index of the last Node
        const lastNodeIndex = this.size - 1;
    
        // If the size of your LinkedList is smaller than 2 or
        // if the index is greater than the index of the last Node 
        // then there cannot be a loop in your LinkedList
        if(index > lastNodeIndex || this.size < 2) return console.log('Cannot loop list here');
    
        // Set current to the beginning of the LinkedList
        let current = this.head;
    
        // count to keep track of what index you are on
        let count = 0;
    
        // tailNode to loop you LinkedList
        let tailNode;
    
        while(count < index) {
            current = current.next;
            count++;
        }
    
        // When you have reached the index you wish to loop at
        // you will set current to that Node and continue to the end
        // of your LinkedList with tailNode
        tailNode = current;
        while(count < lastNodeIndex) {
            tailNode = tailNode.next;
            count++;
        }
    
        // Once you are at the end of your LinkedList set 
        // the next Node to current creating a loop
        tailNode.next = current;
        return;
      }

    detectCycle() {
        // slow and fast pointers to determine if there is a loop
        let slow = this.head;
        let fast = this.head;

        // Iterate through your LinkedList 
        while(fast && fast.next) {
            // slow moves one Node over while fast moves two
            fast = fast.next.next;
            slow = slow.next;

            // If there is a loop then slow will eventually equal fast
            // when slow and fast are the same node 
            // start slow from the head
            if(slow === fast) {
                slow = this.head;

                // Move each pointer one Node at a time until
                // they meet at the start of the loop and 
                // then return that Node's data
                while(slow!==fast) {
                    slow = slow.next;
                    fast = fast.next;
                }
                return slow.data;
            }
        }
        // If there is an end then return null
        return null
    }

    removeHead() {
        if(!this.head) return console.log('There is no head');

        // If there is a loop in your LinkedList and 
        // the head is the beginning of the loop go 
        // to the end of your LinkedList and remove the loop
        if(this.detectCycle() !== null) {
            const lastNodeIndex = this.size - 1;
            let current = this.head;
            let count = 0;
            while(count < lastNodeIndex) {
                count++;
                current = current.next;
            } 
            if(this.head.data === this.detectCycle()) {
            current.next = null;
            }
        }

        this.head = this.head.next;
        this.size--;
        return;
    }

    removeTail() {
        if(!this.head) return console.log('There is no head');
        if(this.size === 1) return this.removeHead();

        // Iterate through until the end of the LinkedList
        const lastNodeIndex = this.size - 1;
        let current = this.head;
        let count = 0;
        let previous;
        while(count < lastNodeIndex) {
            count++;
            previous = current;
            current = current.next;
        }

        // If the tail you are removing is the second Node 
        // in the loop break the loop otherwise continue 
        // the loop while removing the tail
        if(this.detectCycle() === previous.data) {
            previous.next = null;
        } else {
            previous.next = current.next
        }
        this.size--;
        return;
    }

    printData() {
        // count to keep track of the index and 
        // compare it to the length of your LinkedList
        let count = 0;
        let current = this.head;

        // If there is a loop then count will become equal 
        // to this.size and return the beginning of the loop
        while(current) {
        if(count === this.size) {
            return console.log('LinkedList loops here\n', current)
        }
        console.log(current.data);
        current = current.next;
        count++;

        }

        // If there is no loop explicitly tell the user there is no loop
        return console.log("LinkedList ends here")
    }

    addAt(data, index) {
        if(index > this.size || !this.head) return console.log("Index does not exist");
        if(index === this.size) return this.addTail(data);
        if(index === 0) return this.addHead(data);

        const node = new Node(data);
        let current = this.head;
        let count = 0;
        let previous;
        while(count < index) {
            count++;
            previous = current;
            current = current.next;
        }
        previous.next = node;
        node.next = current;
        this.size++;
        return;
    }

    removeAt(index) {
        const lastNodeIndex = this.size - 1
        if(index > this.size || !this.head) return console.log("Index does not exist");
        if(index === lastNodeIndex) return this.removeTail();
        if(index === 0) return this.removeHead();

        // Iterate through the LinkedList until 
        // you get to the index you wish to remove
        let current = this.head;
        let count = 0;
        let previous;
        while(count < index) {
            count++;
            previous = current;
            current = current.next;
        }

        // If there is a loop and the index you wish to remove 
        // is the beginning of the loop then remove 
        // the loop at the end of the LinkedList
        if(this.detectCycle() === current.data) {
            let lastNode = current;
            while(count < lastNodeIndex) {
                count++;
                lastNode = lastNode.next;
            }
            lastNode.next = null;
        }
        previous.next = current.next;
        this.size--;
        return;
    }

    clearList() {
        this.head = null;
        this.size = 0;
        return;
    }
    
    reverseList() {
        let previous = null;
        let next = null;
        let current = this.head;
    
        while(current) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        this.head = previous;
        return;    
    }
}

const ll = new LinkedList()

ll.addHead(5);
ll.addTail(10);
ll.addTail(20);
ll.addTail(50);
ll.addTail(100);

// ll.createLoopAt(2);
ll.addTail(200)

// ll.removeHead();
// ll.removeHead();
// ll.removeHead();
// ll.removeTail()
// ll.removeTail()
// ll.removeTail()

// ll.addAt(11, 2)
// ll.addAt(22, 4)
// ll.removeAt(2)

// ll.reverseList();

ll.printData()

// console.log(ll);