class HashTable {
  constructor(size = 53) {
    this.map = new Array(size);
  }

  // Compute an index `i` (0 <= i <= key.length OR 100) from the given key.
  _hash(key) {
    let total = 0;
    const PRIME_NUM = 31;
    for (let i = 0; i < Math.min(key.length, 100); i += 1) {
      const char = key.charAt(i);
      const value = char.charCodeAt(0) - 96;
      total = (total * PRIME_NUM + value) % this.map.length;
    }

    return total;
  }

  // Get the value associated with the specified key.
  // Return null if key does not exist within hash table.
  get(key) {
    const hashCode = this._hash(key);
    if (this.map[hashCode] === undefined) {
      return null;
    }

    for (let i = 0; i < this.map[hashCode].length; i += 1) {
      if (this.map[hashCode][i][0] === key) {
        return this.map[hashCode][i][1];
      }
    }

    throw new Error("hash table contains entry not set by own `set` method");
  }

  // Set a given key-value pair into the hash table.
  // If given key exists, the overwrite its associated value.
  set(key, value) {
    const hashCode = this._hash(key);
    if (this.map[hashCode] !== undefined) {
      for (let i = 0; i < this.map[hashCode].length; i += 1) {
        if (this.map[hashCode][i][0] === key) {
          this.map[hashCode][i][1] = value;
          return;
        }
      }

      this.map[hashCode].push([key, value]);
    } else {
      this.map[hashCode] = [[key, value]];
    }

    return true;
  }

  // Return all keys contained by the hash table as an array.
  keys() {
    const result = [];
    for (let i = 0; i < this.map.length; i += 1) {
      if (this.map[i] !== undefined) {
        for (let j = 0; j < this.map[i].length; j += 1) {
          const key = this.map[i][j][0];
          result.push(key);
        }
      }
    }

    return result;
  }

  // Return all values contained by the hash table as an array.
  // (Ignores duplicates).
  values() {
    const result = [];
    for (let i = 0; i < this.map.length; i += 1) {
      if (this.map[i] !== undefined) {
        for (let j = 0; j < this.map[i].length; j += 1) {
          const value = this.map[i][j][1];
          if (!result.includes(value)) {
            result.push(value);
          }
        }
      }
    }

    return result;
  }
}
