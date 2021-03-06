class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const dfs = (root) => { // a
  if (root === null) return [];
  const res = [];
  const stack = [root]; // [a]

  while (stack.length > 0) { // []
    let current = stack.pop(); //  f
    res.push(current.val); // [a, b, d, e, c, f]

    if (current.right) stack.push(current.right); // [f]
    if (current.left) stack.push(current.left); // []
  }
  return res;
};

dfs(a);
