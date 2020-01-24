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

  console.log(SLL.find('Test'));
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

console.log(display(SLL));