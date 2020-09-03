# Hash Table

## What's a hash table?

A hash table is a data structure that implements an associative array ADT, a structure that can map keys to values.

## How does a hash table work?

A hash table uses a hash function to compute an _index_, also called a _hash code_, into an array of _buckets or slots_, from which the desired value can be found.

During the lookup, the key is hashed and the resulting hash indicates where the corresponding value is stored.

**Why do indices need to be computed from keys?**

Computers do not know how to perform lookups using keys, they only know how to do so through indices.

## Why use a hash table instead of other data types?

- Storage space efficient form of data access

  The storage space required by hash tables is fractionally greater than the total space required for the data or records themselves.

- Quick retrieval of data

  Accessing data from a hash table is nearly constant time per retrieval.

## What's a hash function?

A hash function is any function that can be used to map data of **arbitrary size** to **fized-size** values.

The values returned by a hash function are called _hash values_, _hash codes_, _digests_, or simply _hashes_.

The values are used to index a **fixed-size** table called a _hash table_.

**What makes a good hash function?**

1. Quick (i.e. constant time).
2. Distributes uniformly (does not cluster outputs at specific indices)
3. Deterministic (same input yields same output)

## Where are hash tables used?

Hash tables are widely used in many kinds of computer software, particularly for associative arrays, database indexing, caches, and sets.

## Collision resolution

Hash collisions are practically unavoidable when hashing a random subset of a large set of possible keys. For example, if 2,450 keys are hashed into a million buckets, even with a perfectly uniform random distribution, according to the [birthday problem](https://en.wikipedia.org/wiki/Birthday_problem there is approximately a 95% chance of at least two of the keys being hashed to the same slot.

Therefore, almost all hash table implementations have some collision resolution strategy to handle such events.

**Separate Chaining**

With _separate chaining_, at each index in our array we store values using a more sophisticated data structure (e.g. using an array or a linked list).

**Linear Probing**

With _linear probing_, when we find a collision, we search through the array to find the next empty slot.

Unlike with separate chaining, this allows us to store a single key-value pair at each index.

## Big O of Hash Tables

The average runtimes of operations on hash tables.

- Insert - O(1)
- Deletion - O(1)
- Access - O(1)

## Recap

- Hash tables are collections of key-value pairs
- Hash tables canfind values quickly given a key
- Hash tables can add new key-values quickly
- Hash tables store data in a large array, and work by _hashing_ the keys
- A good hash should be fast, distribute keys uniformly, and be deterministic (relevant for the hash table ADT, not cryptography-related)
- Separate chaining and linear probing are two strategies used to deal with two keys that hash to the same index
