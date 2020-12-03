const Node = function(val = null, prev = null, next = null) {
    this.val = val;
    this.prev = prev;
    this.next = next;
}

const MyLinkedList = function() {
    this.size = 0;
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

MyLinkedList.prototype.get = function(index) {
    if(index >= this.size || index < 0) return -1;
    if(index + 1 === this.size) return this.tail.prev.val;
    
    let cur = this.head.next;
    while(index--) {
        cur = cur.next;
    }
    return cur.val;
};

MyLinkedList.prototype.addAtHead = function(val) {
    const nextNode = this.head.next;
    const node = new Node(val, this.head, nextNode);
    this.head.next = node;
    nextNode.prev = node;
    this.size++;
};

MyLinkedList.prototype.addAtTail = function(val) {
    const prevNode = this.tail.prev;
    const node = new Node(val, prevNode, this.tail);
    this.tail.prev = node;
    prevNode.next = node;
    this.size++;
};

MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index > this.size) return null;
    if(index === this.size) return this.addAtTail(val);
    
    let cur = this.head;
    while(index--) {
        cur = cur.next;
    }
    const nextNode = cur.next;
    const node = new Node(val, cur, nextNode);
    cur.next = node;
    nextNode.prev = node;
    this.size++;
};

MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index >= this.size) return;
        this.size--;
    if(index === this.size) {
        this.tail.prev = this.tail.prev.prev;
        return;
    }
    let cur = this.head;
    while(index--) {
        cur = cur.next
    }
    cur.next = cur.next.next;
};

