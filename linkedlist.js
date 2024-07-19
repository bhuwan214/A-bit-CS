// Linkedlist

//Creating a class node to create a node  in list
class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

// Class named Linkedlist

class Linkedlist {
  constructor() {
    this.head = null;
  }

  //Adding a node to the end of the list

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
  }

  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
  }

  //Finding a node by value , traversing the list

  find(value) {
    let current = this.head;

    while (current != null) {
      if (current.value === value) {
        return current;
      }
      current = current.nextNode;
    }
    return null;
  }

  remove(value) {
    if (this.head === null) {
      return;
    }
    if (this.head.value === value) {
      this.head = this.head.nextNode;
      return;
    }

    let current = this.head;
    while (current.nextNode !== null && current.nextNode.value !== value) {
      current = current.nextNode;
    }

    if (current.nextNode !== null) {
      current.nextNode = current.nextNode.nextNode;
    }
  }


// 
  tail() {
    let current = this.head;

    if (this.head == null) {
      return this.head;
    }

    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current;
  }

//Delete (remove) the last node 
  pop() {
    if (this.head === null) {
      return;
    }
    if (this.head.nextNode == null) {
      return;
    }
    let current = this.head;

    while (current !== null) {
      if (current.nextNode.nextNode == null) {
        current.nextNode = null;
        return console.log("removed");
      }
      current = current.nextNode;
    }
  }

// Give the size of linked list by number nodes
  sizeof() {
    let current = this.head;
    let count = 0;

    if (current == null) {
      count = 1;
      return console.log("Size of the list is ", count);
    }

    while (current !== null) {
      current = current.nextNode;
      count++;
    }
    console.log(count);
  }

//Print linkedd list in string format 
  toString(){
    let current = this.head;
    let str = "";
   
    while(current!==null){
      str += "( "+ current.value +" )" + " -> ";
      console.log(str)
      current = current.nextNode;
    }
  }

//Print value at given index
  at(index) {
    let current = this.head;
    let count = 0;

    while (current !== null) {
      if (count === index) {
        return current;
      }
      current = current.nextNode;
      count++;
    }

    return null;
  }

  //Check if the list contain value
  contains(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return console.log (true);
      }
      current = current.nextNode;
    }
    return console.log(false);
  }

}


const list = new Linkedlist();

// Adding the node in linked list
list.append(1);
list.append(2);
list.append(3);
list.append(10);
list.append(12);
list.append(100);
list.prepend(0)
list.prepend(11)


list.sizeof();
list.pop();
list.remove(10)
list.sizeof();
list.toString()
 console.log(list.find(1))
 list.contains(5)
console.log( list.at(5))