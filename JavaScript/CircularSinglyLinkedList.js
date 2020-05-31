/**
 * Title: Implementation of Circular Singly Linked List.
 * File Name: CircularSinglyLinkedList.js
 * Author: Prince Yadav
 */

// Node
class Node {
    // Initialized New NODE Data
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

// Circular linked List class
class CircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    // Insert node end of the list
    pushBack(value) {
        let newNode = new Node(value);
        // Checking of first NODE
        if (null == this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.tail.next = this.head;
        } else {
            // Point next of NEW NODE to the Head
            newNode.next = this.head;
            // Pointing next of pre node to NEW NODE
            this.tail.next = newNode;
            // Pointing tail to the NEW NODE
            this.tail = newNode;
        }
    }
    // Insert NODE in front of list
    pushFront(value){
        let newNode=new Node(value);
        if(null==this.head){
            this.head=newNode;
            this.tail=newNode;
            this.tail.next=this.head;
        }else{
            newNode.next=this.head;
            this.head=newNode;
            this.tail.next=newNode;
        }
    }
    // Deleting last NODE
    deleteLastNode(){
        // Taking HEAD NODE as temp
        let temp=this.head
        // Taking HEAD NODE as current
        let current = this.head;
        // Checking up to the last NODE
        while(current.next!=this.head){
            // Assigning current NODE Into temp
            temp=current
            // Increasing current NODE by 1 NODE
            current=current.next;
        }
        // Pointint SECOND last NODE to The HEDE
        temp.next=current.next;
    }
    isListCircular(){
        let slowP= this.head;
        let fastP = this.head;
        while(slowP && fastP && fastP.next){
            slowP=slowP.next;
            fastP=fastP.next.next;
            if(slowP===fastP){
                return true;
            }
        }
        return false;
    }
    // Print Forword 
    printForword() {
        // Taking HEAD NODE as a current NODE
        let current = this.head;
        do {
            // Printing data
            console.log(current.data);
            // Setting next node as current node
            current = current.next;
        } while (current != this.head)
    }
}

const cirular = new CircularLinkedList();
cirular.pushFront(4)
cirular.pushFront(2)
cirular.pushFront(6)
//cirular.deleteLastNode();
cirular.printForword();
cirular.isListCircular();