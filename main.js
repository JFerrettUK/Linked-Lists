/* eslint-disable no-unused-vars */
//The LinkedListIterator class must provide implementations for pointsTo() and hasNext() methods. Here is the pointsTo() method:

// You will need two classes or factories:

// 1. LinkedList class / factory, which will represent the full list.
class LinkedList {
    constructor() {
      this.nodeHead = new ListNode('Head', 1)
      this.nodeTail = new ListNode('Tail', null)
    }

    // Build the following functions in your linked list class:
    // append(value) adds a new node containing value to the end of the list
    append = function(value) {
        let newNode = new ListNode(value);
        console.log(linkedList.nodeHead.pointTo = value) 
        //add new value before a node with data 'null'
    }
    // prepend(value) adds a new node containing value to the start of the list
    prepend = function(value) {
        let newNode = new ListNode(value);
    }
    // size returns the total number of nodes in the list
    size = function(value) {
    }
    // head returns the first node in the list
    head = function() {
    }
    // tail returns the last node in the list
    tail = function() {
    }
    // at(index) returns the node at the given index
    at = function(index) {
        let foundNode = new ListNode(index);
    }
    // pop removes the last element from the list
    pop = function() {
    }
    // contains(value) returns true if the passed in value is in the list and otherwise returns false.
    contains = function(value) {
    }
    // find(value) returns the index of the node containing value, or null if not found.
    find = function(value) {
    }
    // toString represents your LinkedList objects as strings, so you can print them out and 
    // preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
    toString = function(value) {
    }
  }

// 2. Node class / factory, containing a value function and a link to the pointsTo, set both as null by default.

class ListNode {
    constructor(data, pointsTo) {
        // Value node contains
        if(data == undefined) {this.data = null}
        else {this.data = data;}

        // Make a link to the next node
        if(pointsTo == undefined){this.nextPosition = null}
        else {this.pointsTo = pointsTo;}
    }
}

let node1 = new ListNode(1, null)
const linkedList = new LinkedList()

console.log(linkedList)
console.log(node1)
