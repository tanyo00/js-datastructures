// Stack - linear data structure
// LIFO (last in first out)

class Stack {
  constructor () {
    this.stack = []
  }

  push (value) {
    this.stack.push(value)
  }

  pop () {
    this.stack.pop()
  }

  isEmpty () {
    if (this.stack.length > 0) {
      return false
    } else {
      return true
    }
  }

  peek () {
    return this.stack[this.stack.length - 1]
  }

  printAll () {
    this.stack.forEach(item => {
      console.log(item)
    })
  }

  size () {
    return this.stack.length
  }
}

module.exports = Stack
