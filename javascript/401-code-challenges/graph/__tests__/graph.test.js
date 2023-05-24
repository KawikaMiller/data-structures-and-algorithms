const {Graph} = require('../graph');
const {businessTrip} = require('../businessTrip/businessTrip')

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
    testGraph.addEdge(aVertex, bVertex, 2);
    testGraph.addEdge(bVertex, cVertex, 3);
    testGraph.addEdge(cVertex, aVertex)
    expect(testGraph.getNeighbors(bVertex)).toBeTruthy();
  })

  test('A collection of all vertices can be properly retrieved from the graph', () => {
    let emptyGraph = new Graph();
    // console.log('GRAPH VERTICES', testGraph.getVertices())
    expect(testGraph.getVertices()).toBeTruthy();
    expect(emptyGraph.getVertices()).toStrictEqual([]);
  })

  test('All approriate neighbors can be retrieved from the graph', () => {
    expect(testGraph.getNeighbors(bVertex)[0].vertex.value).toBe('C');
    expect(testGraph.getNeighbors(bVertex)[0].weight).toBe(3);
    expect(testGraph.getNeighbors(cVertex)[0].vertex.value).toBe('A');
    expect(testGraph.getNeighbors(cVertex)[0].weight).toBe(0);
    expect(testGraph.getNeighbors(aVertex)[0].vertex.value).toBe('B');
    expect(testGraph.getNeighbors(aVertex)[0].weight).toBe(2);
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

  test('Breadth first traversal returns vertices in order visited', () => {
    expect(testGraph.breadthFirst().length).toBe(3);
    expect(testGraph.breadthFirst()[0].value).toBe('A')
    expect(testGraph.breadthFirst()[1].value).toBe('B')
    expect(testGraph.breadthFirst()[2].value).toBe('C')
  })

  test('.breadthFirst() will not include disconnected nodes', () => {
    testGraph.addVertex('L');
    testGraph.addVertex('M');
    testGraph.addVertex('N');
    testGraph.addVertex('O');

    expect(testGraph.breadthFirst().length).toBe(3);
  })

  test('Breadth first should throw an error if there are no vertices in the graph', () => {
    let emptyGraph = new Graph();
    console.error = jest.fn()
    emptyGraph.breadthFirst();
    expect(console.error).toHaveBeenCalled();
  })

})

describe('Testing businessTrip function...', () => {
  let travelGraph = new Graph();
  let pandora = travelGraph.addVertex('pandora')
  let narnia = travelGraph.addVertex('narnia')
  let metroville = travelGraph.addVertex('metroville')
  let arendelle = travelGraph.addVertex('arendelle')
  let monstropolis = travelGraph.addVertex('monstropolis')
  let naboo = travelGraph.addVertex('naboo')
  
  travelGraph.addEdge(pandora, metroville, 82);
  travelGraph.addEdge(metroville, pandora, 82);

  travelGraph.addEdge(arendelle, monstropolis, 42);
  travelGraph.addEdge(monstropolis, arendelle, 42);

  travelGraph.addEdge(monstropolis, naboo, 73);
  travelGraph.addEdge(naboo, monstropolis, 73);

  test('Should return 82 when cities are [metroville, pandora]', () => {
    let cities = ['metroville', 'pandora'];

    expect(businessTrip(travelGraph, cities)).toEqual(82);
  })

  test('Should return 115 when cities are [arendelle, monstropolis, naboo]', () => {
    let cities = ['arendelle', 'monstropolis', 'naboo'];

    expect(businessTrip(travelGraph, cities)).toEqual(115);
  })

  test('Should return null when cities are not neighbors', () => {
    let cities = ['naboo', 'pandora'];

    expect(businessTrip(travelGraph, cities)).toEqual(null);
  })
  
})