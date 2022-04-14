// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const howHigh = (node) => {
  if (node === null) return -1;
  const leftPath = howHigh(node.left);
  const rightPath = howHigh(node.right);

  return Math.max(leftPath, rightPath) + 1;
};
