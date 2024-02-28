class ListNode {
    constructor (data) {
        this.data = data;
        this.next = null;
    } 
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    Size () {
        let count = 0;
        let node = this.head;
        while(node) {
            count++;
            node = node.next;
        }
        return count;
    }

    Clear () {
        this.head = null;
    }
}

let node1 = new ListNode(100);
let node2 = new ListNode(200);

console.log(node1.next);

node1.next = node2;

console.log(node1.next);

let list = new LinkedList(node1);

let node3 = new ListNode(300);

node2.next = node3;


console.log(list.Size());

list.Clear();

console.log(list.Size());
