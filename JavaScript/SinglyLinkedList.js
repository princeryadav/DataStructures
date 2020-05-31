/**
 * Title: Implementation of singly linked list.
 * File Name: SinglyLinkedList.js
 * Author: Prince Yadav
 */

// Node
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
    // Add new element to the back of the list
    pushBack(value) {
        // Creating new Node
        let newNode = new Node(value);
        // Checking for first node
        if (null != this.head) {
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode
            this.tail = newNode;
        }
    }

    // Add new element to the front of the list
    pushFront(value) {
        // Creating new Node
        let newNode = new Node(value);
        // Checking for first node
        if (null != this.head) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
    }

    // Add node after given node
    pushAfterNode(currentValue, newValue) {
        // Creating new Node
        let newNode = new Node(newValue);
        // Getting first Node
        let current = this.head;
        while (null != current.next) {
            // Finding node after that have to add new Node
            if (current.data == currentValue) {
                // Pointing new node of next to the given
                // Node of next
                newNode.next = current.next;
                // Pointing current Node of next to the new Node 
                current.next = newNode;
                return
            }
            // Setting next node as a current node
            current = current.next;
        }
    }

    // Length of Linked list
    length() {
        // Counter set to zero
        let length = 0;
        // 
        let current = this.head;
        while (null != current) {
            length++;
            current = current.next;
        }
        console.log(`Length of list is ${length}`);
    }

    // Reverse the list
    reversList() {
        // For swap need TEMP ;
        let temp, nextNode = null;
        // Loop up to last node
        while (this.head) {
            // Select second NODE As a current NODE
             nextNode = this.head.next;
            // Assign next value for head Node
            this.head.next = temp;
            // Assigning TEMP as a HEAD NODE 
            temp = this.head;
            // Assigning HEAD as NEXT NODE
            this.head = nextNode;
        }
        this.head = temp;
    }

    // Printing list
    printForword() {
        let current = this.head;
        while (null != current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const linkedList = new LinkedList();

// Pushing node back to the list
// linkedList.pushBack(5);
// linkedList.pushBack(6);
// linkedList.pushBack(3);
// linkedList.pushBack(8);
// console.log("Pushing element in Back");
// linkedList.printForword();

// Pushing node front to the list
linkedList.pushFront(5);
linkedList.pushFront(6);
linkedList.pushFront(3);
linkedList.pushFront(8);
linkedList.printForword();
// Pushing node to the middle of the list
// linkedList.pushAfterNode(3, 4)
// console.log("Pushing element in Front");
// linkedList.printForword();
// linkedList.length();
linkedList.reversList();
linkedList.printForword();