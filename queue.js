class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }
    enqueue(val) {
        let newNode = new Node(val);
        if(this.front==null){
            this.front=this.rear=newNode;
            return;
        }
        this.rear.next=newNode;
        this.rear=newNode;
        console.log('Node Enqueued Successfully');
        return;
    }
    dequeue(val){
        if(this.front==null){
            console.log('Queue is empty');
            return;
        }
        let ele = this.front.val;
        this.front=this.front.next;
        console.log(`Node dequeued successfully`);
        return;
    }
    display(){
        if(this.front==null){
            console.log('queue is empty');
        }
        let queueElements=[];
        let temp=this.front;
        while(temp!=this.rear.next){
            queueElements.push(temp.val);
            temp= temp.next;
        }
        console.log('Queue : ',queueElements);
    }
}
let q = new Queue();
q.enqueue(14);//Node Enqueued Successfully
q.enqueue(98);//Node Enqueued Successfully
q.enqueue(67);//Node Enqueued Successfully
q.enqueue(33);//Node Enqueued Successfully
q.display();//Queue :  [ 14, 98, 67, 33 ]
q.dequeue();//Node dequeued successfully
q.display();//Queue :  [ 98, 67, 33 ]
