const ListNode = require('./lib/listnode')

const listNode = new ListNode('val1',
  new ListNode('val2',
    new ListNode('val3')
  )
)

const getLastListNode = (listNode) => {
  if (!listNode.next) return listNode

  return getLastListNode(listNode.next)
}

const lastListNode = getLastListNode(listNode);
console.log('getLastListNode: ', lastListNode)

const getListNodeLength = (listNode, i = 1) => {
  if (!listNode.next) return i

  return getListNodeLength(listNode.next, i + 1);
}

const length = getListNodeLength(listNode)
console.log('getListNodeLength: ', length)

const getIndexListNode = (listNode, i) => {
  let current = listNode;

  for (let y = 0; y < i; y++) {
    current = current.next
  }

  return current;
}

const listNode2 = getIndexListNode(listNode, 2);
console.log('getIndexListNode: ', listNode2)