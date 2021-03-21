const { Node, LinkedList } = require('./linkedList')

const node1 = new Node('item1')
const node2 = new Node('item2')
const node3 = new Node('item3')
const node4 = new Node('item4')
const node5 = new Node('item5')

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

const linkedList = new LinkedList(node1)
