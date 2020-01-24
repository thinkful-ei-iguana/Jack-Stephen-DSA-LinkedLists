const LinkedList = require('./LinkedList');

function main() {
  const SLL = new LinkedList();

  SLL.insertLast('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertBefore('Typo', 'Apollo');

  console.log(SLL.find('Typo'));
}

main();