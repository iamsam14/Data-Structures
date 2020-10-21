class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
// Instantiation of Node class meaning all new *Node*s look like:
// Node: {data: input, next: null}

// const n1 = new Node(50);
// console.log(n1);

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  // Instantiation of LinkedList class meaning all new *LinkedList*s look like:
  // LinkedList: {head: null, size: 0}

  // Insert first
  insertFirst(data) {
    // The head of the LinkedList class object becomes the
    // new instantiation of the class object Node
    // if there is a previously existing this.head
    // then it becomes the new *Node*'s this.next value
    // and the new node becomes this.head
    // this.size increments always
    this.head = new Node(data, this.head);
    this.size++;
    return;
  }

  //insert last
  insertLast(data) {
    //   Instantiation of a new Node class object
    let node = new Node(data);

    // Lets start at the top of the LinkedList; (this.head)
    let current = this.head;

    // if there is no head
    // make this node first
    if (!current) {
      this.head = node;
      return;
    }

    // while there is a next node
    // continue looking for the next node
    // when there is no next node
    while (current.next) {
      current = current.next;
    }

    // set the next node in the list to be the new Node
    // and increment size
    current.next = node;
    this.size++;
    return;
  }

  // insert at
  insertAt(data, index) {
    //   if the index passed does not exist exit function
    if (index > 0 && index > this.size) {
      return;
    }

    // if the index is 0 meaning you wish to append
    // the new Node to the beginning of the LinkedList
    // execute insertFirst method
    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    const node = new Node(data);
    // current is the beginning of the LinkedList
    let current = this.head;
    // count to keep track of which index you are on
    let count = 0;
    // previous to link this.next of the
    // previous Node to your newly inserted Node
    let previous;

    // Loop through your LinkedList until count equals
    // the index you wish to append your new Node
    while (count < index) {
      count++;
      previous = current;
      current = current.next;
    }

    // previous will always be the previous index of what
    // you enter meaning previous.next will become your
    // newly created Node
    previous.next = node;

    // current will always be the index of the Node that
    // you are pushing down the LinkedList
    // and then increment this.size
    node.next = current;
    this.size++;
    return;
  }

  // remove first
  removeHead() {
    //   if there are no Nodes inside the LinkedList then
    // there is no head
    if (!this.size) {
      return console.log("There is no head");
    }

    // This works because you are assigning this.head.next
    // to this.head
    // decrement this.size and return
    this.head = this.head.next;
    this.size--;
    return;
  }

  //   remove last
  removeLast() {
    //   start current at the beginning of the LinkedList
    let current = this.head;
    let previous;

    // this while loop goes through the whole LinkedList
    // until the end where this.next equals null
    while (current.next) {
      previous = current;
      current = current.next;
    }

    // this separates the tie between the last Node and
    // the previous one
    // decrement this.size and return
    previous.next = null;
    this.size--;
    return;
  }

    // remove at
    removeAt(index) {
      // if the index is greater than the size of the
      // LinkedList return not found
      if (index > 0 && index > this.size) {
        return console.log("Index not found");
      }
  
      // Start at the beginning of the LinkedList
      let current = this.head;
      // count to keep track of the index you are on
      let count = 0;
      // previous to keep track of the previous index
      let previous;
  
      // if you want to remove the first Node execute
      // removeHead method
      if (index === 0) {
        this.removeHead();
        return;
      }
  
      // while loop iterates through LinkedList
      // until count equals index
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
  
      // previous will always be the Node of the
      // previous index of the input
      // this reassigns this.next to skip over current Node
      // cutting out the Node at the current index
      // decrement this.size and return
      previous.next = current.next;
      this.size--;
      return;
    }

  // get at
  getIndex(index) {
    //   Start at the beginning of the LinkedList
    let current = this.head;

    // count will keep track of what index you are on
    let count = 0;

    // while loop iterates through the LinkedList changing
    // the value of current to check the next Node
    // until count equals index and returns the data
    while (current) {
      if (count === index) {
        console.log(current.data);
        return;
      }
      count++;
      current = current.next;
    }

    return null;
  }

  // clear
  clearList() {
    // Reset the values of LinkedList to null
    this.head = null;
    this.size = 0;
    return;
  }

  // print data
  printData() {
    //   start at the beginning of the LinkedList
    let current = this.head;

    // this prints out the data of each Node
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();

ll.insertFirst(5);
ll.insertFirst(7);

ll.insertLast(10);

ll.insertAt(20, 1);

// ll.removeHead();
// ll.removeLast();

// ll.printData();

// console.log("looking for index 2");
// ll.getIndex(2);

// console.log("now lets remove index 2");
// ll.removeAt(2);

ll.printData();


// ll.clearList();
// console.log(ll);
