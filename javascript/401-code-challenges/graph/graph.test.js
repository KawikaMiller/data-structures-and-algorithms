const {Graph} = require('./graph');

describe('Testing Graph data structure (Directed graph represented as an adjacency list)...', () => {

  let testGraph = new Graph();

  test('Vertex can be successfully added to the graph', () => {
    expect(testGraph.addVertex('A')).toBeTruthy();
  })

  xtest('An edge can be successfully added to the graph', () => {
    
  })

  xtest('A collection of all vertices can be properly retrieved from the graph', () => {
    
  })

  xtest('All approriate neighbors can be retrieved from the graph', () => {
    
  })

  xtest('Neighbors are returned with the weight between nodes included', () => {
    
  })

  xtest('The proper size is returned, representing the number of vertices in a graph', () => {
    
  })

  xtest('A graph with only one vertice and edge can be properly returned', () => {
    
  })

})