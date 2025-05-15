class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.top = null;
    }
    push(val) {
        let newNode = new Node(val);
        newNode.next = this.top;
        this.top = newNode;
    }
    pop(val) {
        if (this.top == null) {
            console.log('Stack is Empty ');
            return -1;
        }
        let popped = this.top.data;
        this.top = this.top.next;
        console.log(`${popped} popped successfully`);
        return popped;
    }
    peek(val) {
        if (this.top == null) {
            console.log('Stack is Empty ');
            return;
        }
        let peek = this.top.data;
        console.log(`${peek} is a peek Element`);
        return popped;
    }
    display() {
        if (this.top == null) {
            console.log('Stack is empty');
            return;
        }
        console.log('Stack : ')
        let current =this.top;
        while(current!=null){
            console.log(`${current.val} `);
            current=current.next;
        }      
    }
}
let st = new Stack();
st.display();// Stack is empty
st.push(2);
st.push(8);
st.push(23);
st.push(46);
st.display();
// Stack : 
// 46
// 23
// 8
// 2