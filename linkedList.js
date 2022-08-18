//10-->5-->16

// class Node {
//     constructor(value) {
//         this.value=value;
//         this.next=null;
//     }

// }

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  //insert into linkedlist

  insert(index, value) {
    //check params
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = {
      value: value,
      next: null,
    };

    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  //remove from linkedlist
  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }

  reverse() {
    if (this.length === 1) {
      return this.head;
    }

    let first = this.head;
    let second = first.next;
    while (second) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this.printList();
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(9);
myLinkedList.prepend(3);
myLinkedList.insert(2, 89);
myLinkedList.insert(3, 59);
myLinkedList.remove(2);
myLinkedList.reverse();
console.log(myLinkedList.printList());

////////////////////////////////////////////////////

/*class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev:null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
      prev:null,
    };
    newNode.next = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      prev:null
    };
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }

  //insert into linkedlist

  insert(index,value){
    //check params
   if(index >= this.length){
     return this.append(value);
   }

   const newNode = {
      value:value,
      next:null,
      prev:null
   }

   const leader = this.traverseToIndex(index-1);
   const follower = leader.next;
   leader.next = newNode;
   newNode.prev =leader;
   newNode.next = follower;
   follower.prev = newNode;
   this.length++;
   return this.printList();
   
  }
  traverseToIndex(index){
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  //remove from linkedlist
  remove(index){
    
   const leader = this.traverseToIndex(index-1);
   const unwantedNode = leader.next;
   leader.next = unwantedNode.next;
   this.length--;
   return this.printList()
   
  }



  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(9);
myLinkedList.prepend(3);
myLinkedList.insert(2,89);
myLinkedList.insert(3,59);
myLinkedList.remove(2)
console.log(myLinkedList.printList());

*/
