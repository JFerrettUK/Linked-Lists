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
list.append(11)
list.prepend(31)

console.log(list)
