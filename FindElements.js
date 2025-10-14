function findElements(arr, element) {
    for (let i of arr) {
        if (i == element) {
            return true; 
        }
    }
    return false; 
}
console.log(findElements([10, 20, 30, 40, 50], 35));
console.log(findElements([10, 20, 30, 40, 50], 50));
