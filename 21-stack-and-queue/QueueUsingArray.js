const queue = [];
queue.push("FIRST");
queue.push("SECOND");
queue.push("THIRD");
queue.shift(); // "FIRST" (first in first out)
queue.shift(); // "SECOND"
queue.shift(); // "THIRD" (last in last out)
