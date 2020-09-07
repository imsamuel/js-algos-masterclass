// Model of a weighted, undirected graph (using an adjacency list).
class WeightedGraph {
  // Initialize adjacency list attribute.
  constructor() {
    this.adjacencyList = {};
  }

  // Return true if graph contains specified vertex.
  _hasVertex(vertex) {
    return this.adjacencyList[vertex] !== undefined;
  }

  // Return true if specified vertices are adjacent (joined by a graph edge).
  // If a vertex is non-existent in the graph, throw an error.
  _verticesAdjacent(u, v) {
    if (!this._hasVertex(u)) {
      throw new Error(`vertex ${u} does not exist in graph`);
    }

    if (!this._hasVertex(v)) {
      throw new Error(`vertex ${v} does not exist in graph`);
    }

    for (let i = 0; i < this.adjacencyList[u].length; i += 1) {
      if (this.adjacencyList[u][i].vertex === v) {
        return true;
      }
    }

    return false;
  }

  // Add a given vertex to the graph.
  // If given vertex is contained in graph, throw an error.
  addVertex(x) {
    if (this._hasVertex(x)) {
      throw new Error("cannot add given vertex as it exists in graph");
    }

    this.adjacencyList[x] = [];
    return true;
  }

  // Add an edge between specified vertices.
  // If specified vertices are adjacent, throw an error.
  addEdge(u, v, weight) {
    if (this._verticesAdjacent(u, v)) {
      throw new Error("specified vertices are adjacent");
    }

    this.adjacencyList[u].push({
      weight,
      vertex: v,
    });
    this.adjacencyList[v].push({
      weight,
      vertex: u,
    });
    return true;
  }

  // Find the shortest path between two given vertices (min. weight sum).
  // (Implements Djikstra's algorithm)
  shortestPath(u, v) {
    // @TODO
  }
}
