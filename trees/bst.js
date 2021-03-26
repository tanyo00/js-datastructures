class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  insert(data) {
    let node = new Node(data);

    if (this.root === null) {
      this.root = node;
      this.size += 1;
      return;
    }

    let current = this.root;

    while (true) {
      if (data < current.data) {
        if (current.left === null) {
          current.left = node;
          this.size += 1;
          break;
        }

        current = current.left;
      } else {
        if (current.right === null) {
          current.right = node;
          this.size += 1;
          break;
        }

        current = current.right;
      }
    }
  }
  sizeBST() {
    return this.size;
  }

  isEmpty() {
    return this.size > 0 ? false : true;
  }
}

const bst = new BST();
bst.insert(50);
bst.insert(3);
bst.insert(1);
bst.insert(100);
bst.insert(60);
bst.insert(200);

console.log(bst.sizeBST());
console.log(bst.isEmpty());

console.log(bst.root.right);
