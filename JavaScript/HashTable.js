/**
 * Titel: This is an implementation of Hashtable in js
 * File Name: HashTable.js
 * Author: Prince Yadav
 */

class HashTable {
    // Initialization of hash table with given size
    constructor(size) {
        this.data = new Array(size);
    }

    // Hashing the key
    _hash(key) {
        let hash = 0;
        // Loop over the key
        for (let i = 0; i < key.length; i++) {
            // Taking the code for each char in key 
            // And moduling with data length for uniq value.
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    // Setting the key and value into the hash table
    set(key, value) {
        // Hashing the key
        let index = this._hash(key);
        // Checking for key is already present in the
        // hash table
        let bucket = this.data[index];
        if (bucket)
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] == key) {
                    return `${key} is already present in table`;
                }
            }
        // Checking if data is not present in hash table
        // at given position 
        if (!this.data[index]) {
            // then create empty array at given position 
            this.data[index] = [];
        }
        // push data into it.
        this.data[index].push([key, value]);
        return this.data;
    }

    // Getting the value by key
    get(key) {
        let index = this._hash(key);
        let bucket = this.data[index];
        // Ckecking for bucket is present or not.
        if (bucket)
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] == key) {
                    return bucket[i][1];
                }
            }
        return `${key} is not present in table`;
    }
}

const hashTable = new HashTable(50);
// // for hashing the key
// let hashValue = hashTable._hash("grapes");
// console.log(hashValue);
hashTable.set("grapes", 1000);
hashTable.set("apples", 50);
hashTable.set("mangoes", 100);
hashTable.set("oranges", 500);
let data = hashTable.get("apples");
console.log(data);