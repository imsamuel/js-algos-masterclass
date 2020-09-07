Objectives

- understand the importance of Dijkstra's
- implement a weighted graph
- walk through the steps of dijkstra's
- implement dijkstra's using a naive priority queue
- implement dijkstra's using a binary heap priority queue

# Dijkstra's Algorithm

## What is Dijkstra's algorithm?

**Dijkstra's algorithm** (or **Dijkstra's Shortest Path First algorithm, SPF algorithm**) is an algorithm for finding the shortest paths between nodes in a graph, which may represent, for example, road networks.

The algorithm exists in many variants. Dijkstra's original algorithm found the shortest path between two given nodes, but a more common variant fixes a single node as the "source" node and finds shortest paths from the source to all other nodes in the graph, producing a [shortest-path tree](https://en.wikipedia.org/wiki/Shortest-path_tree).

For a given source node in the graph, the algorithm finds the shortest path between that node and every other. It can also be used for finding the shortest paths from a single node to a single destination node by stopping the algorithm once the shortest path to the destination has been determined. For example, if the nodes of the graph represent cities and edge path costs represent driving distances between pairs of cities conected by a direct road. Dijkstra's algorithm can be used to find the shortest route between one city and all other cities.

## How is Djikstra's algorithm implemented?

Let the node at which we are starting be called the **initial node**. Let the **distance of node Y** be the distance from the **initial node** to Y. Dijkstra's algorithm will assign some initial distance values and wil try to improve them step by step.

1. Mark all nodes unvisited. Create a set of all the unvisited nodes called the _unvisited_ set.

2. Assign to every node a tentative distance value: set it to zero for our initial node and to infinity for all other nodes. Set the initial node as current.

3. For the current node, consider all of its unvisited neighbours and calculate their _tentative_ distances through the current node. Compare the newly calculated _tentative_ distance to the current assigned value and assign the smaller one. For example, if the current node _A_ is marked with a distance of 6, and the edge connecting it with a neighbour _B_ has length 2, then the distance to _B_ through _A_ will be 6 + 2 = 8. If B was previously marked with a distance greater than 8 than change it to 8. Otherwise, the current value will be kept.

4. When we are done considering all of the unvisited neighbours of the current node, mark the current node as visited and remove it from the _unvisited_ set. A visited node will never be checked again.

5. If the destination node has been marked visited (when planning a route between two specific nodes) or if the smallest tentative distance among the nodes in the _unvisited set_ is infinity (when planning a complete traversal;occurs when there is no connection between the initial node and remaining unvisited nodes), then stop. The algorithm has finished.

6. Otherwise, select the unvisited node that is marked with the smallest tentative distance, set it as the new "current node" and go back to step 3.

When planning a route, it is actually not necessary to wait until the destination node is "visited" as above; the algorithm can stop once the destination node has the smallest tentative distance among all "unvisited" nodes (and thus could be selected as the next "current").

## Applications of Dijkstra's algorithm

- GPS - finding the fastest route
- Network Routing - finding the open shortest path for data
- Biology - used to model the spread of viruses among humans
- Airline tickets - finding the cheapest route to your destination
