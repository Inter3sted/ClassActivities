/*
  2.3.2-ComparisonOperatorsAndIfElseStatements.js
  =====================================================
*/
let age = 25;
// Write an If Else statement
// if age is greater than or equal to 25,
// console.log "Renting a car is more affordable."
// if(age >= 25){
//   console.log("Renting a car is more affordable");
// }
// if age is less than 25
// console.log "Renting a car is very expensive."
// if (age < 25){
//   console.log("Renting a car is very expensive");
// }
// As If Else Statement
if (age >= 25) {
    console.log("Renting a car is more affordable");
} else {
    console.log("Renting a car is very expensive");
}
// Chaining if statements: if - else if - ... - else
//------------------------------------------------------
// if age is greater than or equal to 25,
// console.log "Renting a car is more affordable."
if (age >= 25) {
    console.log("Renting a car is more affordable");
}
// if age is less than 25 but greater than or equal to 18
// console.log "Renting a car is very expensive."
else if (age < 25 && age >= 18) {
    console.log("Renting a car is very expensive");
}
// if age is less than 18
// console.log "You cannot legally rent a car."
else {
    console.log("You cannot legally rent a car");
}

// Own Examples
let x = 25;
if (x <= 25) {
    console.log("Do not pass go, do not collect $200");
} else {
    console.log("Go straight to jail");
}

//