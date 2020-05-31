/**
 * Title: Implementation of Queue using Linked List
 * File Name: QueueLinkedList.js
 * Author: Prince Yadav
 */

// NODE
class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

// Queue class
class Queue {
    // Initialization of front and rear.
    constructor() {
        this.front = null
        this.rear = null
    }
    // Queue is empty or not
    isQueueEmpty() {
        if (this.front === null) {
            return true;
        }
        return false;
    }
    // Inserting data into queue 
    enQueue(value) {
        // Creating new Node
        let newNode = new Node(value);
        // Checking is it a first NODE.
        if (this.isQueueEmpty()) {
            // Setting Front and Rear As a newNode.
            this.front = newNode;
            this.rear = newNode;
        } else {
            // Making NewNode as a next NODE
            this.rear.next = newNode;
            // Pointing New NODE as a Rear.
            this.rear = newNode;
        }
    }
    // Deleting Data from Queue.
    deQueue() {
        // Checking queue is empty
        if (this.isQueueEmpty()) {
            console.log("Queue is EMPTY")
        } else {
            // Setting Next NODE as a Front NODE
            let current = this.front;
            this.front = current.next;
        }
    }

    printQueue() {
        let current = this.front;
        while (current != null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const queue = new Queue();
queue.enQueue(5);
queue.enQueue(6);
queue.enQueue(7);
queue.enQueue(8);
queue.deQueue();
queue.printQueue();