'use strict';

// `Vertex` - A vertex, also called a “node”, is a data object that can have zero or more adjacent vertices.
// `Edge` - An edge is a connection between two nodes.
// `Neighbor` - The neighbors of a node are its adjacent nodes, i.e., are connected via an edge.

class Vertex {
  constructor(value){
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight){
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex = (value) => {
    let newVertex = new Vertex(value);
    // the array used as the second argument will hold all the adjacent vertices to the first argument
    this.adjacencyList.set(newVertex, [])
    return newVertex;
  }

  addEdge = (startVertex, endVertex, weight = 0) => {
    // check to see if adjacencyList has start and end vertices
    if (!this.adjacencyList.has(startVertex)){
      console.error('startVertex argument is not in adjacencyList')
    } else if (!this.adjacencyList.has(endVertex)){
      console.error('endVertex argument is not in adjacencyList')
    }
    // instantiate new edge
    const newEdge = new Edge(endVertex, weight);
    // get the startVertex
    const startVertexEdges = this.adjacencyList.get(startVertex);
    // push the edge into the array of adjacent vertices
    startVertexEdges.push(newEdge)
  }

  getVertices = () => {
    // return all the vertices of a graph
    return [...this.adjacencyList.keys()]
  }

  getNeighbors = (vertex) => {
    // return the edges of a given node
    return this.adjacencyList.get(vertex);
  }

  size = () => {
    return this.adjacencyList.size();
  }
}

module.exports = {
  Vertex, 
  Edge,
  Graph,
}