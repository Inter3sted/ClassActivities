const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
let inA = arr.indexOf("a");
let inB = arr.indexOf("b");
let inC = arr.indexOf("c");
console.log(inA, inB, inC);
// find the last index of "a", "b", and "c"
let laA = arr.lastIndexOf("a");
let laB = arr.lastIndexOf("b");
let laC = arr.lastIndexOf("c");
console.log(laA, laB, laC);
// if the first index and last index of "a" is not the same,
//remove the last instance
// repeat until there is just one "a"
function removeDupes(arr, duplicateValue) {
    let firstIndex = arr.indexOf(duplicateValue);
    let lastIndex = arr.lastIndexOf(duplicateValue);
    while (firstIndex !== lastIndex) {
        arr.splice(lastIndex, 1);
        lastIndex = arr.lastIndexOf(duplicateValue);
    }
    return arr;
}
console.log(removeDupes(arr, "a"));
console.log(removeDupes(arr, "b"));
console.log(removeDupes(arr, "c"));