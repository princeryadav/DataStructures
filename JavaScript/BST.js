/**
 * Title: Implementation of Binary search tree.
 * File Name: BST.js
 * Author: Prince Yadav
 */

// Node Class
class Node {
    // Initilization of NODE with left and right
    constructor(value) {
        this.left = null;
        this.data = value;
        this.right = null;
    }
}

// BST class
class BST {
    constructor() {
        this.root = null;
    }
    pushHelper(root, value) {
        // Checking tree is empty
        if (root === null) {
            // Creating new Node
            root = new Node(value);
            return root;
        }
        // Checking for adding node to left or to right
        // of tree.
        if (value > root.data) {
            root.right = this.pushHelper(root.right, value);
        }
        else {
            root.left = this.pushHelper(root.left, value)
        }
        // finaly we are returning root 
        return root
    }
    // Add new Node 
    push(value) {
        this.root = this.pushHelper(this.root, value)
    }

    preOrderHelper(root) {
        if (null !== root) {
            console.log(root.data)
            this.preOrderHelper(root.left);
            this.preOrderHelper(root.right);
        }
    }
    preOrder() {
        this.preOrderHelper(this.root)
    }

    inOrdrerHelper(root) {
        if (null !== root) {
            this.inOrdrerHelper(root.left)
            console.log(root.data)
            this.inOrdrerHelper(root.right);
        }
    }
    inOrder() {
        this.inOrdrerHelper(this.root)
    }

    postOrderHelper(root) {
        if (null !== root) {
            this.postOrderHelper(root.left)
            this.postOrderHelper(root.right)
            console.log(root.data);
        }
    }
    postOrder() {
        this.postOrderHelper(this.root)
    }

    search(root, key) {
        if (root == null || root.data == key) {
            return root;
        }

        if (key > root.data) {
            return this.search(root.right, key);
        }
        return this.search(root.left, key);
    }
}

const bst = new BST();
bst.push(8);
bst.push(4);
bst.push(12);
bst.push(7);
bst.push(3);
bst.push(2);
console.log("Data you are looking for :: " + 
bst.search(bst.root, 12).data);
bst.search(bst.root,12);