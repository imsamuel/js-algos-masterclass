objectives

- explain what a graph is
- compare and contrast different types of graphs and their use cases in the real world
- implement a graph using an adjcency list
- traverse through a graph using bfs and dfs
- compare and contrast graph traversal algorithms

## What's a graph data structure?

A graph data structure is a data structure that consists of a finite set of vertices and a set of edges connecting them.

## What are graphs used for?

Graphs are used for numerous things, such as representing networks of communication, data organization, computational devices, flow of computation, etc.

We can represent website link structures as directed graphs (digraph - graph in which edges have directions) where vertices represent web pages and the directed edges represent links from one page to another.

## What are the differences between trees and graphs?

A graph may have bi-directional connections between nodes whereas a tree can only have uni-directional connections between nodes.

## Types of graphs

**Directed**

A graph whose edges are directed from one vertex to another.

A directed graph is sometimes called a digraph or a directed network.

**Undirected**

A graph whose edges are bidirectional.

An undirected graph is sometimes called an undirected network.

**Weighted**

A graph whose edges have weights.

**Unweighted**

(Opposite of weighted graphs)

## Representing graphs

(https://courses.csail.mit.edu/6.006/spring11/exams/notes2-2.pdf)

The two main graph representations we use when talking about graph problems are the **adjacency list** and the **adjacency matrix**. It's important to understand the tradeoffs between the two representations.

**Adjacency Matrix**

An adjacency matrix is a 2D array of size _V_ x _V_ where _V_ is the number of vertices in the graph.

Let the 2D array be `adj[][]`, a slot `adj[i][j]` indicates that there is an edge from vertex _i_ to vertex _j_.

**Adjacency List**

An adjacency list is an array of lists. The size of the aray is equal to the number of vertices.

Let the array be an `array[]`. An entry `array[i]` represents the list of vertices adjacent to the ith vertex.

## Adjacency Matrix vs List

**Pros of adjacency matrix**

- Removing an edge takes O(1) time (adjacency list takes O(_E_) time).

- Queries like whether there is an edge from vertex _u_ to vertex _v_ takes O(1) time (adjacency list takes O(|_V_| + |_E_|) time).

**Cons of adjacency matrix**

- Consumes more space O(_V_^2). Even if the graph is sparse (contains less numbre of edges), it consumes the same space.

- Adding a vertex is O(_V_^2) time (adjacency list is O(1)).

## Use an adjacency matrix or list to represent a graph?

We'll be using an adjacency list for this section's implementation of a graph.

Most of the data in the real-world tends to lend itself to **sparser** (only a fraction of all vertices being connected) and/or larger graphs. Even though there is a ton of data, there are not as many connections as compared to the amount of potential connections there could be.

Essentially, we're deeming the trade of certain operations being slower for taking up less space, worthwhile.
