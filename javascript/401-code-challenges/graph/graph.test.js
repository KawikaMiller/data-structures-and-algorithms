const {Graph} = require('./graph');

describe('Testing Graph data structure (Directed graph represented as an adjacency list)...', () => {

  let testGraph = new Graph();
  let aVertex;
  let bVertex;
  let cVertex;

  test('Vertex can be successfully added to the graph', () => {
    aVertex = testGraph.addVertex('A');
    expect(aVertex).toBeTruthy();
  })

  test('An edge can be successfully added to the graph', () => {
    cVertex = testGraph.addVertex('C')
    bVertex = testGraph.addVertex('B')
    testGraph.addEdge(bVertex, cVertex, 3);
    expect(testGraph.getNeighbors(bVertex)).toBeTruthy();
  })

  test('A collection of all vertices can be properly retrieved from the graph', () => {
    let emptyGraph = new Graph();
    expect(testGraph.getVertices()).toBeTruthy();
    expect(emptyGraph.getVertices()).toStrictEqual([]);
  })

  test('All approriate neighbors can be retrieved from the graph', () => {
    expect(testGraph.getNeighbors(bVertex)).toBeTruthy();
    expect(testGraph.getNeighbors(cVertex)).toStrictEqual([]);
    expect(testGraph.getNeighbors(aVertex)).toStrictEqual([]);
  })

  test('Neighbors are returned with the weight between nodes included', () => {
    let bNeighbors = testGraph.getNeighbors(bVertex);
    expect(bNeighbors[0].weight).toBe(3)
  })

  test('The proper size is returned, representing the number of vertices in a graph', () => {
    expect(testGraph.size()).toBe(3)
  })

  test('A graph with only one vertice and edge can be properly returned', () => {
    // there cannot be an edge if there is only one vertice
    let smolGraph = new Graph();
    let zVertex = smolGraph.addVertex('Z');
    console.error = jest.fn();
    smolGraph.addEdge(zVertex)
    expect(console.error).toHaveBeenCalled()
  })

})