const { Graph, Vertex, Edge } = require('./graph')

const businessTrip = (graph, citiesArray) => {
  let i = 0;
  let cost = 0;
  let neighbors;
  let start;

  let vertices = graph.getVertices();
  
  // citiesArray.length - 1 because we don't want to run the loop on the last element of citiesArray since that would be our last stop in the business trip
  while(i < citiesArray.length - 1){
      
      start = vertices.find(vertex => vertex.value === citiesArray[i])
      neighbors = graph.getNeighbors(start)

      if (neighbors.length > 0){
        // is citiesArray[i + 1] a neighbor?
        let foundNeighbor = neighbors.find(neighbor => neighbor.vertex.value === citiesArray[i + 1]);
        if (foundNeighbor){
          cost += foundNeighbor.weight;
          i++;
        } else {
          // return null if neighbor does not exist
          return null;
        }
      } else {
        // return null if there are no neighbors at all
        return null;
      }
  }

  return cost;
}

module.exports = {
  businessTrip
}