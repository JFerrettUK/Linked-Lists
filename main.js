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
