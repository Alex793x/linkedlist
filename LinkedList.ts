class LinkedList<T> {
    public head: LinkedListNode<T> | null = null;
    public tail: LinkedListNode<T> | null = null;
    public amount = 0;

    constructor() { }

    public add(data: T) {
        const newNode = new LinkedListNode(data);
        if (this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.amount++;
    }

    public clear() {
        this.head = null;
        this.tail = null;
        this.amount = 0;
    }

    public contains(data: T) {
        if (this.isEmpty()) {
            throw new Error("LinkedList is empty!");
        }

        let current = this.head;

        while (current !== null) {
            if (current.data === data) {
                return true;
            }

            current = current.next;
        }

        return false;
    }

    public get(index: number) {
        if (this.isEmpty()) {
            throw new Error("LinkedList is empty!");
        }

        let current = this.head;

        while (current !== null) {
            if (this.amount === index) {
                return current.data;
            }

            current = current.next;
            this.amount++;
        }
    }

    public getFirst() {
        if (this.isEmpty()) {
            throw new Error("LinkedList is empty!");
        }
        return this.head?.data;
    }

    public getLast() {
        if (this.isEmpty()) {
            throw new Error("LinkedList is empty!");
        }

        return this.tail?.data;
    }

    public isEmpty() {
        return this.amount === 0;
    }


    public remove(data: T) {
        if (this.isEmpty()) {
            throw new Error("LinkedList is empty!");
        }

        let current = this.head;

        while (current !== null) {
            if (current.data === data) {
                if (current === this.head) {
                    this.head = this.head.next;
                    if (this.head) {
                        this.head.prev = null;
                    }
                }

                if (current === this.tail) {
                    this.tail = this.tail.prev;
                    if (this.tail) {
                        this.tail.next = null;
                    }
                }

                if (current.next) {
                    current.next.prev = current.prev;
                }
                if (current.prev) {
                    current.prev.next = current.next;
                }

                this.amount--;
                return;
            }

            current = current.next;
        }
    }

    public removeAfter(data: T) {
        if (this.isEmpty()) {
            throw new Error("LinkedList is empty!");
        }

        let current = this.head;

        while (current !== null) {
            if (current.data === data && current.next !== null) {
                if (current.next === this.tail) {
                    this.tail = current;
                }
                current.next = current.next.next;

                if (current.next !== null) {
                    current.next.prev = current;
                }

                this.amount--;
                break;
            }
            current = current.next;
        }
    }

    public size() {
        return this.amount;
    }


}