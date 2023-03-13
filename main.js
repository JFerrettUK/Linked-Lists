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

    returnIndexNode = function(value, i, theList) {
        i++
        if (value == i) {
            return theList.data
        } else if (this.size < i) {
            return null
        }
        return this.returnIndexNode(value, i, theList.next)
    }

    at = function(value) {
        let i = 0
        return this.returnIndexNode(value, i, this.head)
    }

    deleteEnd = function(theList, i, size) {
        if (i + 2 == size) {
            theList.next = null;
            return
        }
        i++
        return this.deleteEnd(theList.next, i, size)
    }

    pop = function() {
        if (this.size == 1){
            this.head = null
            this.size = 0
        } else {
        let i = 0
        this.deleteEnd(this.head, i, this.size)
        this.size--
        }
    }

    findValue = function(value, theList, i) {
        i++
        if (value == theList.data) {
            return true
        } else if (i == this.size) {
            return false
        }
        return this.findValue(value, theList.next, i)
    }

    contains = function(value) {
        //return true if 'value' is in the list, otherwise returns false
        return this.findValue(value, this.head, 0)
    }


    findValueIndex = function(value, theList, i) {
        i++
        if (value == theList.data) {
            return i
        } else if (i == this.size) {
            return null
        }
        return this.findValueIndex(value, theList.next, i)
    }

    find = function(value) {
        return this.findValueIndex(value, this.head, 0)
    }

    listAsString = function(theList, string, i) {
        if (theList.next == null) {
            string += String(theList.data) + ")"
            return string
        }
        string += String(theList.data) + ") -> ("
        return this.listAsString(theList.next, string, i)
    }

    toString = function() {
        let i = 0
        let string = "("
        return this.listAsString(this.head, string, i)
    }

    insertValue = function(value, index, i, theList) {
        i++
        console.log(theList)
        if (i == index) {
            let oldNode = theList.next
            theList.next = new ListNode(value)
            theList.next.next = oldNode
            return theList
        } else if (theList.next == null) {
            return "no value at that index"
        }

        return this.insertValue(value, index, i, theList.next)
    }

    insertAt = function(value, index) {
        let i = 0
        let newList = this.insertValue(value, index, i, this.head)
        console.log(newList)
        return this.head
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
list.pop()
console.log(list.toString())
console.log(list.insertAt(98, 3))