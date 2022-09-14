// create a constant variable (const)
const myName = "Kolebe";
// create a variable that can be reassigned (let)
let age = 27;
// create three variables and assign them values of different data types (=)
let str = "lettuce";
let num = 88;
let truth = false;
// print the types of two variables that reference two different data types (typeof)
// TIP: console.log() prints a value in the console/terminal
console.log(typeof truth); // boolean //you don't have to comment
console.log(typeof str); // string
// change the value referenced by a variable (dynamic typing)
num = "three-thousand";
// print the type of the variable you just changed (typeof)
console.log(typeof num);
// create variables and give them values to complete the sentences that will print  below.
let language = "Javascript";
// Which variables need to be created?
// What type of data needs to go in each variable?
console.log("Hello, my name is ");
console.log(
    "Hello, my name is " +
    myName +
    ", and I am learning " +
    language +
    ". I have been practicing for only " +
    num +
    " weeks, so my status as a master is: " +
    truth +
    "."
);
console.log("Hello " + "World");
console.log("10" + "5");
console.log("55" ** "5");