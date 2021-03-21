const Queue = require('./queue')

const queue = new Queue()

queue.enqueue('item1')
queue.enqueue({ name: 'Tanyo', age: 21 })
queue.enqueue(2)
queue.enqueue('item2')

console.log(queue.peek())
console.log(queue.last())
