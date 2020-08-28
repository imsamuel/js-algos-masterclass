# Tree Traversal

## Intro to Tree Traversal

**Idea**

Given any tree, how do we visit every node once?

Contrasted with a linked list, there is only a single approach to traversing a linked list - go through it in a straight line.

There are numerous ways to traverse a tree, but for this section we'll be focusing on 4 of the main techniques.

## Breadth First Search

Starts from the root node and visits all nodes of current depth before moving to the next depth in the tree.

## Depth First Search

Starts with the root node and first visits all nodes of one branch as deep as possible of the chosen Node and before backtracking, it visits all other branches in a similar fashion.

**Inorder**

As DFS suggests, we will first focus on the depth of the chosen Node and then go to the breadth at that level. Therefore, we will start from the root node of the tree and go deeper-and-deeper into the left subtree with recursive manner.

When we will reach to the left-most node with the above steps, then we will visit that current node and go to the left-most node of its right subtree(if exists).

Same steps should be followed in a recursive manner to complete the inorder traversal.

**Preorder**

Preorder Traversal is another variant of DFS. Where atomic operations in a recursive function, are as same as Inorder traversal but with a different order.

Here, we visit the current node first and then goes to the left sub-tree. After covering every node of the left sub-tree, we will move towards the right sub-tree and visit in a similar fashion.

**Postorder**

Similar goes with Postorder Traversal. Where we visit the left subtree and the right subtree before visiting the current node in recursion.

## Recap

Tree Traversal algorithms can be classified broadly in two categories:

- Depth-First Search (DFS) Algorithms
- Breadth-First Search (BFS) Algorithms

**Depth-First Search (DFS) Algorithms have three variants:**

1. Preorder Traversal (current-left-right) - Visit the current node before visting any nodes inside left or right subtrees.

2. Inorder Traversal (left-current-right) - Visit the current node after visiting all nodes inside left subtree but before visiting any node within the right subtree.

3. Postorder Traversal (left-right-current) - Visit the current node after visiting all nodes of left and right subtrees.

**Breadth-First Search (BFS) Algorithm has one variant:**

1. Level Order Traversal - Visit nodes level-by-level and left-to-right fashion at the same level.

## When to use BFS and DFS

From @Hans-Peter Storr on StackOverflow:

That heavily depends on the structure of the search tree and the number and location of solutions (aka searched-for-items).

- If you know a solution is not far from the root of the tree, a breadth-first search might be better.
- If the tree is very deep and solutions are rare, depth first search might take an extremely long time, BFS could be faster.
- If the tree is very wide, a BFS might need too much memory, so it might be completely impractical.
- If solutions are frequent but located deep in the tree, BFS could be impractical.
- If the search tree is very deep you will need to restrict the search depth for depth first search, anyway (for example with iterative deepening).

> But these are just rules of thumb; you'll probably need to experiment.

## Related resources

https://towardsdatascience.com/4-types-of-tree-traversal-algorithms-d56328450846
