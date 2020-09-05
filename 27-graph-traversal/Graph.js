// A model of an undirected graph using an adjacency list.
class Graph {
  // Initialize list attribute.
  constructor() {
    this.list = {};
  }

  // Return a boolean based on whether given vertices are adjacent
  // (connected) by an edge.
  _verticesAdjacent(v1, v2) {
    return this.list[v1].includes(v2);
  }

  // Return a boolean based on whether the graph contains the specified
  // vertex.
  _verticeExists(v) {
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

  // Traverse the graph depth-first, recursively.
  DFSRecursive(start) {
    const result = [];
    const visited = {};
    const dfs = (vertex) => {
      visited[vertex] = true;
      result.push(vertex);
      this.list[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          dfs(neighbor);
        }
      });
    };

    dfs(start);
    return result;
  }

  // Traverse the graph depth-frst, iteratively.
  DFSIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    visited[start] = true;
    while (stack.length > 0) {
      const next = stack.pop();
      result.push(next);
      this.list[next].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return result;
  }

  BFS(start) {
    const queue = [start];
    const visited = {};
    const result = [];
    visited[start] = true;
    while (queue.length > 0) {
      const next = queue.shift();
      this.list[next].forEach((neighbor) => {
        if (!visited[neighbor]) {
          queue.push(neighbor);
          visited[neighbor] = true;
        }
      });
      result.push(next);
    }

    return result;
  }
}

const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B");
g.addEdge("A", "E");
g.addEdge("B", "C");
g.addEdge("B", "D");
g.addEdge("C", "D");
g.addEdge("E", "D");
g.addEdge("E", "F");
g.addEdge("E", "F");
g.addEdge("D", "F");
