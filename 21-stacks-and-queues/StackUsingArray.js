// The easiest way to implement a stack in JavaScript is using an array.

const stack = [];
stack.push("google", "instagram", "youtube");
stack.pop(); // 'youtube' (last in, first out)
stack.pop(); // 'instagram'
stack.pop(); // 'google' (first in, last out)

// OR unshifting and shifting instead of pushing and popping.
// However this would be inefficient as removing and adding from the beginning
// are linear time operations.
