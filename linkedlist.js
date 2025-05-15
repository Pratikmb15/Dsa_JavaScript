class node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class linkedList {
    constructor() {
        this.head = null;
    }

    addNodeAsHead(val) {
        let newNode = new node(val);
        if (this.head == null) {
            this.head = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }
    addNodeAfter(existingNodeval, val) {
        let existingNode = this.getNodeByVal(existingNodeval)
        if (existingNode == null) {
            console.log('Existing node does not exists');
            return;
        }
        let tempNode = existingNode.next;
        let newNode = new node(val);
        existingNode.next = newNode;
        newNode.next = tempNode;
    }
    addNodeAstail(val) {
        if (this.head == null) {
            this.addNodeAsHead();
            return;
        }
        let header = this.head;
        while (header.next !== null) {
            header = header.next;
        }
        let newNode = new node(val);
        header.next = newNode;
    }
    printLinkedList() {
        if (this.head == null) {
            console.log('LinkedList is empty !');
            return;
        }
        console.log('Linkedlist : ');
        let temp = this.head;
        while (temp != null) {
            console.log(temp, '->');
            temp = temp.next;
        }
    }
    getNodeByVal(val) {
        let temp = this.head;
        while (temp !== null) {
            if (temp.val == val) {
                return temp;
            }
            temp = temp.next;
        }
        return null;
    }
    deleteNode(nodeVal) {
        if (this.head == null) {
            console.log('List is empty');
            return;
        }
    
        // If the node to delete is the head
        if (this.head.val === nodeVal) {
            this.head = this.head.next;
            console.log(`Node ${nodeVal} deleted successfully`);
            return;
        }
    
        let temp = this.head;
        while (temp.next !== null && temp.next.val !== nodeVal) {
            temp = temp.next;
        }
    
        // If node was not found
        if (temp.next === null) {
            console.log(`Node with value ${nodeVal} not found`);
            return;
        }
    
        // Skip the node to delete
        temp.next = temp.next.next;
        console.log(`Node ${nodeVal} deleted successfully`);
    }
    
}
list = new linkedList();
list.printLinkedList();
list.addNodeAsHead(12);
list.printLinkedList();
list.addNodeAstail(99);
list.printLinkedList();
list.addNodeAfter(12, 27);
list.printLinkedList();
list.addNodeAfter(27,37);
list.printLinkedList();
list.deleteNode(27);
list.printLinkedList();