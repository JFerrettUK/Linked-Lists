/* eslint-disable no-redeclare */
let console = {};
let logger = document.getElementById("logger");
console.log = function(text)
{
    let element = document.createElement("div");
    let txt = document.createTextNode(text);
    element.appendChild(txt);
    logger.appendChild(element);
}

console.log("Console working");


//The LinkedListIterator class must provide implementations for next() and hasNext() methods. Here is the next() method:

// You will need two classes or factories:
// 1. LinkedList class / factory, which will represent the full list.
// 2. Node class / factory, containing a value function and a link to the nextNode, set both as null by default.





// Build the following functions in your linked list class:

// append(value) adds a new node containing value to the end of the list

// prepend(value) adds a new node containing value to the start of the list

// size returns the total number of nodes in the list

// head returns the first node in the list

// tail returns the last node in the list

// at(index) returns the node at the given index

// pop removes the last element from the list


// contains(value) returns true if the passed in value is in the list and otherwise returns false.

// find(value) returns the index of the node containing value, or null if not found.

// toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
