// create a new unordered list (ul) element
const unorderedList = document.createElement("ul");
// remove the paragraph element in the nav-bar
let childToRemove = document.querySelector(".nav-bar > p");
childToRemove.remove();
// add your new ul element to the nav-bar
document.querySelector(".nav-bar").appendChild(unorderedList);
// create two new list item (li) elements, and add some text to them
const OrderedList1 = document.createElement("li");
const OrderedList2 = document.createElement("li");

OrderedList1.textContent = "1st new list item";
OrderedList2.textContent = "2nd new list item";
// add the li elements to the ul in the nav-bar
document.querySelector(".nav-bar > ul").appendChild(OrderedList1);
document.querySelector(".nav-bar > ul").appendChild(OrderedList2);