const LinkedList = require('./LinkedList');


const SLL = new LinkedList();

function main() {
  

  SLL.insertLast('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertBefore('Typo', 'Apollo');
  SLL.insertAfter('Freyja', 'Typo');
  SLL.insertAt('Test', 0);

  //console.log(SLL.find('Test'));
}

main();

function display(SLL){
  let res = [];
  let current = SLL.head;
  while(current !== null){
    res = [...res, current.value];
    current = current.next;
  }

  return res;
}

function ListSize(list){
  let count = 0;
  let current = SLL.head;
  while(current != null){
    count++;
    current = current.next;
  }
  return count;
}

function isEmpty(list){
  if(list.head === null){
    return true;
  }
  return false;
}

function findPrev(list, item){
  
  let current = list.head;
  let prev = list.head;

  while(current !== null){
    if(current.value === item){
      return prev.value;
    }
    prev = current; 
    current = current.next;
  }
}

function findLast(list){
  let current = list.head;

  while(current !== null){
    if(current.next === null){
      return current;
    }
    current = current.next;
  }
}

function reverseList(list) {
  const newList = new LinkedList;
  if(list.head === null) {
    return null;
  } else {
    let currNode = list.head;
    while(currNode !== null) {
      newList.insertFirst(currNode.value);
      currNode = currNode.next;
    }
  }
  console.log(display(newList));
  return newList;
}

function thrdFromEnd(list){
  let current = list.head;
  let prev = list.head;
  let res = list.head;
  while(current.next !== null){
    res = prev;
    prev = current;
    current = current.next;
  }
  return res.value;
}

function dumbFindMid(list){
  const dumbList = reverseList(list);
  let dumbCurr = list.head;
  let dumbdumbCurr = dumbList.head;
  while(dumbCurr !== null){
    if(dumbCurr.value === dumbdumbCurr.value){
      return dumbdumbCurr.value;
    } /*else if(dumbCurr.next.value === dumbdumbCurr.value){
      return dumbdumbCurr.value;
    }*/
    dumbCurr = dumbCurr.next;
    dumbdumbCurr = dumbdumbCurr.next;
  }
  return 'cant find middle of even list'
}

//console.log(display(SLL));
//console.log(ListSize(SLL));
//console.log(isEmpty(SLL));
//console.log(findPrev(SLL, 'Apollo'));
//console.log(findLast(SLL));
//reverseList(SLL);
//console.log(thrdFromEnd(SLL));
console.log(dumbFindMid(SLL));

/*
REMOVES ANY DUPLICATES IN AN ARRAYLIST
TIME COMPLEXITY OF O(n^2)
function WhatDoesThisProgramDo(lst) {
    let current = lst.head; 1
    while (current !== null) n {
        let newNode = current; 1 
        while (newNode.next !== null) n {
            if (newNode.next.value === current.value) { 1
                newNode.next = newNode.next.next; 1
            }
            else {
                newNode = newNode.next; 1
            }
        }
        current = current.next;
    }
}

*/



