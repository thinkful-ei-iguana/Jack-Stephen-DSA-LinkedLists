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

//console.log(display(SLL));
//console.log(ListSize(SLL));
console.log(isEmpty(SLL));
console.log(findPrev(SLL, 'Apollo'));