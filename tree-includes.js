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

const treeIncludes = (root, target) => {
  if (root === null) return 0;
  const stack = [root];

  while (stack.length > 0) {
    let current = stack.pop();
    if (current.val === target) return true

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return false;
};
