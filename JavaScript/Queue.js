/**
 * Title: Implementation of Queue
 * File Name: Queue.js
 * Author: Prince Yadav
 */

// Queue 
class Queue {
    // Initialize array of max size.
    // Front with min
    // Rear with min
    constructor(maxSize) {
        this.front = -1;
        this.rear = -1;
        this.max = maxSize;
        this.data = new Array(this.max);
    }
    // Checking for empty queue 
    isEmptyQueue() {
        if (this.front == -1) {
            return true;
        }
        return false;
    }
    // Checking for full queue 
    isFullQueue() {
        // Checking next to the rear position is = to
        // front position.
        if ((this.rear + 1) % this.max === this.front) {
            return true;
        }
        return false;
    }
    // Inserting value into Queue
    enQueue(value) {
        // Checking Queue is full or not
        if (!this.isFullQueue()) {
            // Assigning value to rear 
            this.rear = (this.rear + 1) % this.max;
            // Inserting data into array 
            this.data[this.rear] = value;
            // Checking front is not out of array
            if (this.front === -1) {
                // Setting front to array of zero position.
                this.front = this.rear;
            }
        } else {
            console.log("OverFlow")
        }
    }

    // Deleting from Queue
    deQueue() {
        // Checking Queue is empty or not
        if (!this.isEmptyQueue()) {
            //this.data[this.front] = 0;
            // Setting front as next position in array 
            this.front = (this.front + 1) % this.max;
        } else {
            console.log("UnderFlow");
        }
    }
}

const queue = new Queue(5);
queue.enQueue(5);
queue.enQueue(4);
queue.enQueue(3);
queue.enQueue(2);
queue.enQueue(1);
// queue.enQueue(2);
queue.deQueue()
queue.enQueue(12);
queue.enQueue(10);
console.log(queue.data, queue.front, queue.rear)