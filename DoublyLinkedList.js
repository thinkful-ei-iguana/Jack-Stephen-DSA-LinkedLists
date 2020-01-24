class _Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.foot = null;
  }

  insertFirst(item) {
    if(this.foot === null) {
      this.head = new _Node(item, null, null);
      this.foot = this.head;
    } else {
      this.head = new _Node(item, null, this.head);
    }
  }

  insertLast(item) {
    if(this.head === null) {
      this.insertFirst(item);
    } else {
      this.foot = new _Node(item, this.foot, null);
    }
  }

  insertBefore(item, itemBefore) {
    const newNode = new _Node(item, null, null)
    if(!this.head) {
      return null;
    } else {
      let checkItem = this.head;
      while (checkItem.value !== itemBefore && checkItem === null) {
        checkItem = checkItem.next;
      }
      newNode.prev = checkItem.prev;
      newNode.next = checkItem;
      checkItem.prev = newNode; 
    }
  }
}

module.exports = DoublyLinkedList;