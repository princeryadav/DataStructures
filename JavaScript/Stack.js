/**
 * Title: Implementation of Stack
 * File Name: Stack.js
 * Author: Prince Yadav
 */

// Stack class
class Stack {
    // Initialization of Stack
    constructor(size) {
        this.max = size;
        this.data = new Array(size);
        // Starting position of TOP
        this.top = -1;
    }
    // Stack is empty
    isEmptyStack() {
        if (this.top === -1) {
            return true;
        } else {
            return false;
        }
    }
    // Stack is full
    isFullStack(){
        if(this.top===this.max-1){
            return true;
        }else{
            return false;
        }
    }
    // Add item to STACK
    push(value) {
        if (this.isFullStack()) {
            return console.log(`Stack OverFlow`);
        } else {
            this.data[++this.top] = value;
            return this.data;

        }
    }

    pop() {
        if (this.isEmptyStack()) {
            return `Stack underFlow`;
        } else {
            this.data[--this.top];
            return this.data;
        }
    }
}

const stack = new Stack(10);
let data1 = stack.pop();
console.log(data1)
stack.push(15);
stack.push(10);
stack.push(13);
stack.push(11);
stack.push(12);
stack.push(15);
stack.push(13);
stack.push(11);
stack.push(12);
stack.push(12);
let data = stack.push(16);
console.log(data);

// let data1 = stack.pop();
// console.log(data1)