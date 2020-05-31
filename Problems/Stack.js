
class Stack {
    constructor(maxSize) {
        this.max = maxSize;
        this.data = new Array(this.max);
        this.top = -1;
    }

    // Is Empty
    isEmptyStack() {
        if (this.top == -1) {
            return true
        }
        return false;
    }

    isFullStack() {
        if (this.top == this.max - 1) {
            return true;
        }
        return false;
    }

    push(value) {
        if (!this.isFullStack()) {
            this.data[++this.top] = value;
            return this.data;
        }
        return console.log(`Stack OverFlow`);
    }

    pop() {
        if (!this.isEmptyStack()) {
            this.data[--this.top];
            return this.data;
        }
        return console.log(`Stack UnderFlow`);
    }

    // Given Array is Palindrome or NOT racecar
    // [a,b,a,b,b,a,b,a,X,a,b,a,b,b,a,b,a]

    isPalindrome(arr) {
        let i = 0, j = arr.length - 1;
        while (i < j && arr[i] === arr[j]) {
            i++;
            j--;
        }
        if (i < j) {
            console.log(`Not Palindrome`);
            return false;
        } else {
            console.log(`Palilndrome`);
            return true;
        }
    }

    // Palindrome using stack
    isPalindromeUsingStack(arr) {
        let start = 0;
        let end = arr.length - 1;
        let mid = start + (end - start) / 2;
        for (let i = 0; i <= mid; i++) {
            if (this.top !== mid) {
                this.push(arr[i]);
            }
        }
        for (let i = mid; i < arr.length; i++) {
            if (!this.isEmptyStack() && this.data[this.top] == arr[i]) {
                this.pop();
            }
            else {
                break;
            }
            //console.log("Palindrome");
        }
        if (this.top == -1) {
            console.log("palindrom")
        }
        else {
            console.log("Not palindrom")
        }
    }

    revers(arr) {
        let reversStr = "";
        for (let i = 0; i < arr.length;i++) {
            if (!this.isFullStack()) {
                this.push(arr[i]);
            }
        }
        for (let i = 0; i < arr.length; i++) {
            if (!this.isEmptyStack()) {
                reversStr = reversStr + this.data[this.top];
                this.pop();
            }
        }
        console.log(reversStr);
    }
}
const arr = ['p', 'r', 'i', 'n', 'c', 'e']
const stack = new Stack();
stack.revers(arr);