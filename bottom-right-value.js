// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const bottomRightValue = (root) => {
  let queue = [root]; // [3]
  let current;
  while (queue.length) {
    // [1]
    current = queue.shift(); // 1
    if (current.left !== null) {
      // false
      queue.push(current.left); // [1]
    }
    if (current.right !== null) {
      // false
      queue.push(current.right); // [1]
    }
  }
  return current.val;
};
