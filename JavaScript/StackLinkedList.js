/**
 * Title: Implementation of Stack using linked list
 * File Name: Stack.js
 * Author: Prince Yadav
 */

// NODE 
class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(value){
        let newNode = new Node(value);
        if(this.top===null){
            this.top=newNode;
        }else{
            newNode.next = this.top;
            this.top = newNode;
        }
        
    }

    isEmptyStack(){
        if(this.top===null){
            return true;
        }
        return false;
    }

    pop(){
       if(this.isEmptyStack()){
           console.log(`StackOverFlow`)
       }else{
           let current=this.top;
           this.top=current.next;
       }
    }

    top1(){
        if(this.isEmptyStack()){
            console.log(`StackOverFlow`)
        }else{
            console.log(this.top.data);
            return this.top.data;
        }
    }

    printStack(){
        let current = this.top;
        while(current!= null){
            console.log(current.data);
            current=current.next;
        }
    }
}

const stack=new Stack();
stack.pop();
stack.push(5)
stack.push(3)
stack.printStack();
stack.top1();