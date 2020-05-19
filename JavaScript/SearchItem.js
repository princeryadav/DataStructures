/**
 * Title: Implementation of Search.
 * File Name: SearchItem.js
 * Author: Prince Yadav
 */

const { performance } = require('perf_hooks');
// Linear search 
function findItem(arr, item) {
    // Declare Count 
    let count = 0;
    // Caluculating start time.
    let startTime = performance.now();
    // Looping over the array
    for (let i = 0; i < arr.length; i++) {
        // Inceresing count by 1.
        count++;
        // Checking for item found.
        if (arr[i] === item) {
            // Found item
            console.log(`${item} found at index position ${i}`);
            // breaking the loop.
            break;
        }
    }
    // Calculating the end time
    let endTime = performance.now();
    console.log(`No of time loop exec ${count}`);
    // Time taken to execute function.
    console.log(`execution time ${endTime - startTime} ms`);
}
// Search by even odd segrigation
function findItemByEvenOdd(arr, item) {
    // Declare count.
    let count = 0;
    // Start time
    let startTime = performance.now();
    // Checking item is even or odd.
    if (item % 2 !== 0) {
        // Looping over even array
        for (let i = 0; i < arr.length; i = i + 2) {
            // Incresing counter by 1.
            count++;
            // Cheking for item found or not
            if (arr[i] === item) {
                // Found then break the loop.
                console.log(`${item} found at index position ${i}`)
                break;
            }
        }
    } else {
        // Looping over odd array.
        for (let i = 1; i < arr.length; i = i + 2) {
            // Incresing counter by 1
            count++;
            // Checking item found
            if (arr[i] === item) {
                // Found then break the loop.
                console.log(`${item} found at index position ${i}`)
                break;
            }
        }
    }
    // End time 
    let endTime = performance.now();
    console.log(`No of time loop exec ${count}`);
    // Caluclating execution time.
    console.log(`execution time ${endTime - startTime} ms`)
}
// Binary Search
function binarySearch(arr, start, end, item) {
    // Declaring counter.
    let count = 0;
    // Checking array is empty or not
    if (end >= start) {
        // Incresing counter by 1.
        count++;
        // Calculating mid.
        let mid = Math.floor((start + end) / 2);
        // Checking item is equal to mid value
        if (arr[mid] == item)
            return console.log(`${item} fount at index position ${mid}`);
        // Checking item less then mid item   
        if (arr[mid] > item)
            // Searching item left array w.r.t mid
            return binarySearch(arr, start, mid - 1, item);
        // Searching item right array w.r.t mid.    
        return binarySearch(arr, mid + 1, end, item);
    }
    // Item not found
    return console.log(`${item} fount at index position ${mid}`);
}

function findItemByBinarySearch(arr, item) {
    let startTime = performance.now();
    binarySearch(arr, 0, arr.length, item);
    let endTime = performance.now();
    // console.log(`No of time loop exec ${count}`)
    console.log(`execution time ${endTime - startTime} ms`)
}
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
console.log("------LinearSearch-------")
findItem(arr, 10)
console.log("--findItemByEvenOdd--")
findItemByEvenOdd(arr, 10)
console.log("-----BinarySearch----")
findItemByBinarySearch(arr, 10)
