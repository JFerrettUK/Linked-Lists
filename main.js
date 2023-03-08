class LinkedList {
    constructor() {
        this.head = null
        this.size = 0;
    }

    append = function(value) {
        let newNode = new ListNode(value)
        //find first Node  where 'next == null' and point to newNode

        let newList = loopToEnd(list.head, newNode)

        //insert new node as property of list
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

let loopToEnd = function(value, newNode) {
    if (value.next == null) {
        value.next = newNode
        console.log(value)
        return value
    }
    console.log(value)
    loopToEnd(value.next)
}

let list = new LinkedList()

list.prepend(1)
list.prepend(5)
list.prepend(7)
list.append(9)


