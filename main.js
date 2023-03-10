class LinkedList {
    constructor() {
        this.head = null
        this.size = 0;
    }

    appendToLastNode = function(value, newNode) {
        if (value.next == null) {
            value.next = newNode
            return value
        }
        this.appendToLastNode(value.next, newNode)
    }

    append = function(value) {
        let newNode = new ListNode(value)
        this.appendToLastNode(list.head, newNode)
        this.size = this.size + 1
    }

    prepend = function(value) {
        let newNode = new ListNode(value)
        if (this.head) {
            newNode.next = this.head
        }
        this.head = newNode;
        this.size = this.size + 1    
    }

    returnTailNode = function(value) {
        if (value.next == null) {
            let lastNode = value;
            return lastNode
        }
        return this.returnTailNode(value.next)
    }

    tail = function() {
        return this.returnTailNode(this.head)
    }

    returnIndexNode = function(dataPosition, i, theList) {
        if (dataPosition == i) {
            return theList.data
        }
        i++
        return this.returnIndexNode(dataPosition, i, theList.next)
    }

    at = function(dataPosition) {
        let i = 0
        return this.returnIndexNode(dataPosition, i, this.head)
    }

    deleteEnd = function(theList, i, size) {
        console.log(i + " == " + size + " are i == size")
        if (i + 2 == size) {
            console.log(theList.data + " is reached, delete will trigger")
            theList.next = null;
            return
        }
        i++

        return this.deleteEnd(theList.next, i, size)
    }

    pop = function() {
        let i = 0
        this.deleteEnd(this.head, i, this.size)
        console.log(this.head)
    }
}

class ListNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

let list = new LinkedList()

list.prepend(1)
list.prepend(5)
list.prepend(7)
list.append(9)
list.prepend(31)
list.append(21)
console.log(list)
list.pop()
console.log(list)

