
const pathFinder = (root, target) => {
  if (root === null) return null;
  if (root.val === target) return [root.val];

  const leftPath = pathFinder(root.left, target);
  const rightPath = pathFinder(root.right, target);

  if (leftPath !== null) {
    return [root.val, ...leftPath]
  }
  if (rightPath !== null) {
    return [root.val, ...rightPath];
  }
  return null;
};
console.log(pathFinder(a, "e"));
