class LinkedList {
    constructor() {
        this.head = null
        this.size = 0;
    }

    append = function(value) {
        this.tail = new ListNode(value);
    }

    prepend = function(value) {
        //make the head of the list point to the new new node
        let newNode = new ListNode(value)
        console.log(newNode)
        this.head = newNode.value;

        this.size++
    }
}

class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

let list = new LinkedList()

console.log(list)
list.prepend(1)
console.log(list)
