const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let numsPop = nums.pop(); // 0
let numsPop1 = nums.pop(); // 1
// remove each of the first two items with shift(), saving each item to a variable
let numShift = nums.shift(); // 6
let numShift1 = nums.shift(); // 5
// use push and unshift to add the variables back to the array in numerical order, 0-6

nums.unshift(numsPop, numsPop1); // 0,1
nums.push(numShift1, numShift); // 5, 6
console.log(nums);

// Create a variable that has to do with data and operation and it's more understandable in the future