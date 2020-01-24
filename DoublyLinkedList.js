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
    if (this.head === null) {
      this.head = new _Node(item, null, null);
      this.foot = this.head;
      //this.foot = new _Node(item, this.head, null);
      //this.head.next = this.head;
    } else {
      this.head = new _Node(item, null, this.head);
      this.head.next.prev = this.head;
      //this.head.next.prev = this.head;
    }
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else if(this.foot === null){
      this.foot = new _Node(item, this.foot.prev, null);
    } else {
      this.foot = new _Node(item, this.foot.prev, null);
    }
  }

  insertBefore(item, itemBefore) {
    const newNode = new _Node(item, null, null)
    if (!this.head) {
      return null;
    } else {
      let checkItem = this.head;
      while (checkItem !== null) {
        if (checkItem.value === itemBefore) {
          checkItem.prev.next = newNode;
          newNode.prev = checkItem.prev;
          newNode.next = checkItem;
          checkItem.prev = newNode;
          return;
        }
        checkItem = checkItem.next;
      }

    }
  }

  insertAfter(item, itemAfter) {
    const newNode = new _Node(item, null, null);
    if (!this.head) {
      return null;
    }
    let checkItem = this.foot;
    while (checkItem !== null) {
      if (checkItem.value === itemAfter) {
        checkItem.next.prev = newNode;
        newNode.prev = checkItem;
        newNode.next = checkItem.next;
        checkItem.next = newNode;
        return;
      }
      checkItem = checkItem.prev;
    }
  }

  insertAt(item, index){
    if(index < 0){
      return 'index out of bounds';
    }
    if(index === 0){
      this.insertFirst(item);
    }
    let current = this.head;
    for(let i = 0; i < index; i++){
      if(current === null || current.next === null){
        return;
      }
      current = current.next;
    }
    let newNode = new _Node(item, current.prev, current);
    current.prev.next = newNode;
    current.prev = newNode;
  }

  remove(item){
    if(this.head === null){
      return;
    }
    let current = this.head;
    while(current !== null){
      if(current.value === item){
        current.next.prev = current.prev;
        current.prev.next = current.next; 
      }
      current = current.next;
    }
  }
}

module.exports = DoublyLinkedList;