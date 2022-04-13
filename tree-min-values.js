class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const treeMinValue = root => {
  let min = Infinity;
  const stack = [root];

  while (stack.length) {
    let current = stack.pop();
    if (current.val < min) {
      min = current.val
    }
    if (current.left) stack.push(current.left)
    if (current.right) stack.push(current.right);
  }
  return min;
}