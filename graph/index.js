const Graph = require('./graph')

const g = new Graph()

for (let a = 1; a <= 5; a++) {
  g.addNode(`user${a}`)
}

g.addEdge('user1', 'user5')
g.addEdge('user2', 'user1')
g.addEdge('user3', 'user4')
g.addEdge('user5', 'user3')

let bfs = g.bfs('user1', 'user5')
console.log(bfs)
