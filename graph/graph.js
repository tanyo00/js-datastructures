class Graph {
  constructor () {
    this.nodes = new Map()
  }

  addNode (value) {
    if (!this.nodes.has(value)) {
      this.nodes.set(value, [])
    }
  }

  hasNode (value) {
    if (this.nodes.has(value)) {
      return true
    } else {
      return false
    }
  }

  hasEdge (node1, node2) {
    let edgesNode1 = this.nodes.get(node1)
    let edgesNode2 = this.nodes.get(node2)

    if (edgesNode1.includes(node2) && edgesNode2.includes(node1)) {
      return true
    } else {
      return false
    }
  }

  showEdges (value) {
    return this.nodes.get(value)
  }

  // first remove the selected node and its edges(connections)
  // then check for all other node's edges for the selected node, if theres a value remove it
  removeNode (value) {
    this.nodes.delete(value)
    this.nodes.forEach(node => {
      if (node.includes(value)) {
        let newNodes = node.filter(item => item !== value)
        while (node.length > 0) {
          node.pop()
        }
        newNodes.forEach(item => node.push(item))
      }
    })
  }

  addEdge (source, destination) {
    if (!this.nodes.has(source) || !this.nodes.has(destination)) {
      return false
    }

    if (!this.nodes.get(source).includes(destination)) {
      this.nodes.get(source).push(destination)
    }

    if (!this.nodes.get(destination).includes(source)) {
      this.nodes.get(destination).push(source)
    }
  }

  // first checks if there's connection between the given nodes
  // get the edges for source and destination nodes
  // filter them and return a new array without the source and destination values
  // clear the current array of edges
  // and push every value from the filtered array into the empty array
  removeEdge (source, destination) {
    if (
      this.nodes.get(source).includes(destination) &&
      this.nodes.get(destination).includes(source)
    ) {
      let sourceEdges = this.nodes.get(source)
      let destinationEdges = this.nodes.get(destination)

      let newSourceEdges = sourceEdges.filter(edge => edge !== destination)
      let newDestinationEdges = destinationEdges.filter(edge => edge !== source)

      while (sourceEdges.length > 0) {
        sourceEdges.pop()
      }

      while (destinationEdges.length > 0) {
        destinationEdges.pop()
      }
      newSourceEdges.forEach(sourceEdge => sourceEdges.push(sourceEdge))

      newDestinationEdges.forEach(destEdge => destinationEdges.push(destEdge))
    } else {
      return false
    }
  }

  isEmpty () {
    if (this.nodes.size > 0) {
      return false
    } else {
      return true
    }
  }

  clear () {
    this.nodes.clear()
  }

  size () {
    return this.nodes.size
  }

  print () {
    console.log(this.nodes)
  }

  // traversal algorithms

  // Breadth-first search
  /*
  Starting from one node and checks for all child nodes.
  Then checks all child nodes of these nodes and so on... until 
  we find the node we are searching for.Layer by layer.
  */
  bfs (firstNode, searchedNode) {
    const queue = [firstNode] // queue ds
    const visited = {} // obj(or Map) stores all the visited nodes

    while (queue.length) {
      let current = queue.shift()

      // we check if the current Node is visited
      if (visited[current]) {
        continue
      }

      // we check if the current Node is the searchedNode
      if (current === searchedNode) {
        console.log(
          `The node you are searching for was found!Node: ${searchedNode}`
        )
        return true
      }

      // if the node isn't visited or the node we are searching for
      // we mark it as visited
      visited[current] = true

      // we get all neighbours of the current node and add each node to the queue
      let neighbour = this.nodes.get(current)
      neighbour.forEach(n => queue.push(n))
    }

    // if theres a problem (the searchedNode doesn't exist) return false
    return false
  }

  // Depth-first search
  /*
  Starting from one node and go as deep as it can.
  When we reach end node it continues with another node it didn't visit before.
   */
  dfs () {}
}

module.exports = Graph
