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
}

module.exports = DoublyLinkedList;