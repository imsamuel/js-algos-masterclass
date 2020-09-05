# Graph Traversal

## What is graph traversal?

**Graph traversal** (also known as **graph search**) refers to the process of visiting (checking and/or updating) each vertex in a graph. Such traversals are classified by the order in which the vertices are visited.

(Tree traversal is a special case of graph traversal)

## Depth-first search

**What is a depth-first search?**

A depth-first search (DFS) is an algorithm for traversing a finite graph.

**How does a depth-first search work?**

DFS visits the child vertices before visiting the sibling vertices; that is, it traverses the depth of any particular path before exploring its breadth.

The algorithm begins with a chosen "root" vertex; it then iteratively transitions from the current vertex to an adjacet, unvisited vertex, until it can no longer find an unexplored vertex to transiion to from its current location. The algorithm then backtracks along previously visited vertices, until it finds a vertex connected to yet more uncharted territory. It will then proceed down the new path as it has before, backtracking as it encounters dead-ends, and ending only when the algorithm has backtracked past the original "root" vertex from the very first step.

**Applications of DFS**

DFS is the basis for many graph-related algorithms, including [topological sorts](https://en.wikipedia.org/wiki/Topological_sorting) and [planarity testing](https://en.wikipedia.org/wiki/Planarity_testing).

## Breadth-first search

**What is a breadth-first search?**

A breadth-first search (BFS) is another technique for traversing a finite graph.

**How does a breadth-first search work?**

BFS visits the sibling vertices before visiting the child vertices, and a [queue](<https://en.wikipedia.org/wiki/Queue_(abstract_data_type)>) is used in the search process.

This algorithm is often used to find the shortest path from one vertex to another.

**Applications of BFS**

Breadth-first search can be used to solve many problems in graph theory, for example:

- finding the [shortest path](https://en.wikipedia.org/wiki/Shortest_path) between two vertices;
- analysis of networks and relationships
