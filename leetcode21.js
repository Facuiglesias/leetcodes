class LinkedList {
  constructor(value) {
    this.head = { value: value, next: null };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const list1 = new LinkedList(1);
list1.append(2);
list1.append(4);

const list2 = new LinkedList(1);
list2.append(3);
list2.append(4);

const list3 = new LinkedList(0);

// console.log(list1);
// console.log(list2);

function mergeTwoLists(list1, list2) {
  while (list1 && list2) {
    let currentNode1 = list1.head;
    let currentNode2 = list2.head;

    console.log(currentNode1);
    console.log(currentNode2);

    if (currentNode1.value >= currentNode2.value) {
      list3.append(currentNode1);
      currentNode1 = currentNode1.next;
      console.log(currentNode1);
    } else if (currentNode2.value >= currentNode1.value) {
      list3.append(currentNode2);
      currentNode2 = currentNode2.next;
      console.log(currentNode2);
      break;
    }
  }
}

console.log(mergeTwoLists(list1, list2));

// console.log(list3);
