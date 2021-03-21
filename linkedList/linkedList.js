class Node {
  constructor (data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor (head = null) {
    this.head = head
  }

  head () {
    if (this.head) {
      return this.head
    } else {
      return false
    }
  }

  tail () {
    let tail = this.head
    while (tail.next) {
      tail = tail.next
    }
    return tail
  }

  count () {
    let count = 0
    let head = this.head
    if (head) {
      while (head) {
        head = head.next
        count++
      }
      return count
    } else {
      return false
    }
  }

  search (value) {
    let head = this.head
    while (head) {
      if (head.data === value) {
        return head
      } else {
        head = head.next
      }
    }
    return head
  }

  clear () {
    this.head = null
  }

  deleteFirstNode () {
    this.head = this.head.next
    return this.head
  }

  deleteLastNode () {
    let previous = this.head
    let tail = this.head.next
    while (tail.next !== null) {
      previous = tail
      tail = tail.next
    }
    previous.next = null

    return this.head
  }
}

module.exports = {
  Node,
  LinkedList
}
