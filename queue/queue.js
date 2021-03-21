// Queue - linear data structure
// FIFO (first in first out)

class Queue {
  constructor () {
    this.queue = []
  }

  // adds a value to the end of the queue
  enqueue (value) {
    this.queue.push(value)
  }

  // removes the first item of the queue
  dequeue () {
    this.queue.shift()
  }

  size () {
    return this.queue.length
  }

  isEmpty () {
    let length = this.queue.length
    if (length > 0) {
      return false
    } else {
      return true
    }
  }

  printAll () {
    this.queue.forEach(item => {
      console.log(item)
    })
  }

  peek () {
    return this.queue[0]
  }

  last () {
    return this.queue[this.queue.length - 1]
  }
  clear () {
    while (this.queue.length > 0) {
      this.queue.pop()
    }
  }
}

module.exports = Queue
