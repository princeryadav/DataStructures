class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}
class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
    }

    pushBack(value) {
        let newNode = new Node(value);
        if (null === this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    reverseLinkedList() {
        let temp, nextNode = null;
        while (this.head) {
            nextNode = this.head.next;
            this.head.next = temp;
            temp = this.head;
            this.head = nextNode;
        }
        this.head = temp;
    }
    printForword() {
        let current = this.head;
        while (current != null) {
            console.log(current.data);
            current = current.next;
        }
    }

    // Find	nth	node from the end of a Linked List.
    findNthNode(n) {
        let count = 0;
        let current = this.head;
        while (current != null) {
            console.log(current.next);
            count++;
            if (count == n) {
                console.log(`At position ${n} NODE value is ${current.data}`)
            }
            current = current.next;
        }
    }

    findNthNodeLast(n) {
        let current = this.head;
        while (current != null) {
            let count = 0;
            let nextCurrent = current.next;
            while (nextCurrent != null) {
                count++;
                nextCurrent = nextCurrent.next;
            }
            if (count < n - 1) {
                return;
            } else if (count > n - 1) {
                current = current.next;
            }
            else if (count == n - 1) {
                console.log(`At position ${n} NODE value is ${current.data}`)
                break;
            }
        }
    }

    findNthNodeLastHash(n) {
        let arr = []
        let current = this.head;
        let count = 0
        while (current != null) {
            count++;
            arr.push({ position: count, node: current.data })
            current = current.next;
        }
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].position == (count - n) + 1) {
                console.log(arr[i].node);
                break;
            }
        }
        //console.log(arr)
    }

    findNthNodeLast1Scan(n) {
        let p1 = null;
        let p2 = this.head;
        for (let i = 1; i < n; i++) {
            if (p2) {
                p2 = p2.next;
            }
        }
        while (p2) {
            if (p1 == null) {
                p1 = this.head
            }
            else {
                p1 = p1.next;
            }
            p2 = p2.next;
        }
        if (p1) {
            console.log(p1.data)
        }
        else {
            return;
        }
    }

    findMiddleOfList() {
        let p1 = this.head;
        let p2 = this.head;
        while (p2 != null && p2.next != null) {
            p2 = p2.next.next
            p1 = p1.next;
        }
        console.log(`Node at middle  position is ${p1.data}`)
    }
}

const list = new LinkedList();
list.pushBack(3);
list.pushBack(9);
list.pushBack(15);
list.pushBack(5);
list.pushBack(11);
list.pushBack(6);
list.printForword();
// list.findNthNodeLast1Scan(1)
list.findMiddleOfList();