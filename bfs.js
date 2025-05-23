class Node{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}
function bfsTree(root){
    if(!root){
        return;
    }
    const queue = [root];

    while(queue.length>0){
        const node = queue.shift();
        console.log(node.val);

        if(node.left){
            queue.push(node.left);
        }
        if(node.right){
            queue.push(node.right);
        }
    }
}

let root = new Node(1);
root.left= new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

bfsTree(root);

//output :
// 1
// 2
// 3
// 4
// 5
// 6
// 7