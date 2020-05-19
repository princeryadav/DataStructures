/**
 * Title: Implementation of Doubly linked list.
 * File Name: DoublyLinkedList.js
 * Author: Prince Yadav
 */

// Node
class Node {
    // Initializing data, next and prev.
    constructor(value) {
        this.data = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    // Pushing item end of the list.
    pushBack(value) {
        // Creating new Node 
        let newNode = new Node(value)
        // Checking for is this not a first Node
        if (null !== this.head) {
            // Allocating tail node to prev of new Node
            newNode.prev = this.tail;
            // Allocating new Node to next fo the tail Node
            this.tail.next = newNode;
            // Allocating new Node as tail node
            this.tail = newNode;
        } else {
            // Allocatinng new node to head and tail
            this.head = newNode;
            this.tail = newNode;
        }
    }
    // Push element start of the list.
    pushFront(value){
        // Creating new Node
        let newNode=new Node(value);
        // Checking is this first Node
        if(null!==this.head){
            // Assigning new Node of next to head
            newNode.next=this.head;
            // Assigning new Node prev of the head 
            this.head.prev=newNode;
            // head = to new Node.
            this.head = newNode;
        }else{
            // Assigning new Node to the head and tail
            this.head=newNode;
            this.tail=newNode;
        }
    }
    // Adding item last to the list
    pushLast(value){
        // Creating new Node 
        let newNode=new Node(value);
        // Assigning head as a curretn Node
        let current =this.head;
        // If tail is present then use this
        // newNode.prev=this.tail;
        // this.tail.next=newNode;
        // this.tail=newNode;
        // Looping current up to null
        while(current){
            if(null === current.next){
                newNode.pre=current;
                current.next=newNode;
                this.tail=newNode;
                break;
            }
            current=current.next;
        }
    } 
    // Print forword
    printForword(){
        // Assigning head to curretn
        let current =this.head;
        // Checking for next node is there or not
        while(current){
            console.log(current.data);
            // Assigning next node as current node.
            current=current.next;
        }
    }
}

const list=new LinkedList();
// list.pushBack(5);
// list.pushBack(9);
// list.pushBack(8);
// list.pushBack(3);
// list.printForword();
console.log("ADD Front of the list")
list.pushFront(5);
list.pushFront(9);
list.pushFront(8);
list.pushFront(3);
list.printForword();
console.log("Add last to the item")
list.pushLast(10);
list.pushLast(15);
list.pushLast(20);
list.printForword();