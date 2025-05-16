class Node{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}
function dfsTree(root){
if(root==null) return;
//pre-order traversal
console.log(root.val);
dfsTree(root.left);
dfsTree(root.right);
}

let root = new Node(1);
root.left= new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

dfsTree(root);
//Node {
//     val: 1,
//     left: Node {
//       val: 2,
//       left: Node { val: 4, left: null, right: null },
//       right: Node { val: 5, left: null, right: null }
//     },
//     right: Node {
//       val: 3,
//       left: Node { val: 6, left: null, right: null },
//       right: Node { val: 7, left: null, right: null }
//     }
//   }
//   Node {
//     val: 2,
//     left: Node { val: 4, left: null, right: null },
//     right: Node { val: 5, left: null, right: null }
//   }
//   Node { val: 4, left: null, right: null }
//   Node { val: 5, left: null, right: null }
//   Node {
//     val: 3,
//     left: Node { val: 6, left: null, right: null },
//     right: Node { val: 7, left: null, right: null }
//   }
//   Node { val: 6, left: null, right: null }
//   Node { val: 7, left: null, right: null }
