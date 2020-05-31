class Recursion {
    constructor() { }

    printNumberInBackword(n) {
        // Checking base case and return
        if (n == 0) {
            return 0;
        }
        else {
            console.log(n);
            return this.printNumberInBackword(n - 1);
        }
    }

    factorial(n) {
        // Base case
        if (n == 0) {
            return 1;
            // Base Case
        } else if (n == 1) {
            return 1;
        }
        else {
            return n * this.factorial(n - 1);
        }
    }

    towersOfHanoi(noOfdisk, srcTower, auxlTower, destTower) {
        if (noOfdisk == 1) {
            console.log(`Move disk ${noOfdisk} from ${srcTower} to ${destTower}`)
            return;
        }
        this.towersOfHanoi(noOfdisk - 1, srcTower, destTower, auxlTower);
        console.log(`Move disk ${noOfdisk} from ${srcTower} to ${destTower}`);
        this.towersOfHanoi(noOfdisk - 1, auxlTower, srcTower, destTower);
    }

    isArrayInSortedOrder(arr, length) {
        // Checking for base case 
        let n = length - 1
        if (n == 0) {
            return true;
        } else if (arr[n] > arr[n - 1]) {
            return this.isArrayInSortedOrder(arr, n)
        }
        else {
            return false;
        }
    }
}

const recursion = new Recursion();
// recursion.towersOfHanoi(3,"A","B","C");
arr = [1, 3, 9, 15]
const isSort = recursion.isArrayInSortedOrder(arr, 4)
console.log(isSort)