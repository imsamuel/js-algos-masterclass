// A model of an undirected graph using an adjacency list.
class Graph {
  // Initialize list attribute.
  constructor() {
    this.list = {};
  }

  // Return a boolean based on whether two given vertices are adjacent
  // (connected) by an edge.
  _verticesAdjacent(v1, v2) {
    return this.list[v1].includes(v2);
  }

  // Return a boolean based on whether the graph contains the specified
  // vertex.
  _vertexExists(v) {
    return this.list[v] !== undefined;
  }

  // Add a given vertex to the graph.
  // If vertex already exists, throw an error.
  addVertex(v) {
    if (this._verticeExists(v)) {
      throw new Error("graph already contains given vertex");
    }

    this.list[v] = [];
    return true;
  }

  // Remove the specified vertex from the graph.
  removeVertex(v) {
    if (!this._verticeExists(v)) {
      throw new Error("graph does not contain specified vertex");
    }

    const adjacentVertices = this.list[v];
    while (adjacentVertices.length > 0) {
      const curr = adjacentVertices.pop();
      this.removeEdge(curr, v);
    }

    delete this.list[v];
    return true;
  }

  // Add an edge between two vertices.
  // If vertices are adjacent, return null.
  addEdge(v1, v2) {
    if (!this._verticeExists(v1)) {
      throw new Error(`vertex of value "${v1}" not found in graph`);
    }

    if (!this._verticeExists(v2)) {
      throw new Error(`vertex of value "${v2}" not found in graph`);
    }

    if (this._verticesAdjacent(v1, v2)) {
      return null;
    }

    this.list[v1].push(v2);
    this.list[v2].push(v1);
    return true;
  }

  // Remove the edge between two vertices.
  // If vertices are not adjacent, throw an error.
  removeEdge(v1, v2) {
    if (!this._verticeExists(v1)) {
      throw new Error(`vertex of value "${v1}" not found in graph`);
    }

    if (!this._verticeExists(v2)) {
      throw new Error(`vertex of value "${v2}" not found in graph`);
    }

    if (!this._verticesAdjacent(v1, v2)) {
      throw new Error("given vertices are not adjacent");
    }

    this.list[v1] = this.list[v1].filter((vertex) => vertex !== v2);
    this.list[v2] = this.list[v2].filter((vertex) => vertex !== v1);
    return true;
  }
}
