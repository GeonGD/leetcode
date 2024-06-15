// /**
//  * typescript version
//  */
// type linkNode = {
//     val: number
//     next: linkNode | null
// }

// class MyLinkedList {
//     head: linkNode | null;
//     len: number;

//     constructor() {
//         this.head = null
//         this.len = 0
//     }

//     getNode(index: number): linkNode {
//         if (index >= 0 && index < this.len) {
//             let node = this.head
//             let currentIndex = 0
//             while (currentIndex < index) {
//                 node = node.next
//                 currentIndex++
//             }
//             return node
//         }
//         return null
//     }

//     get(index: number): number {
//         const currentNode = this.getNode(index)
//         return currentNode ? currentNode.val : -1
//     }

//     addAtHead(val: number): void {
//         const newNode = { val, next: this.head }
//         this.head = newNode
//         this.len++
//     }

//     addAtTail(val: number): void {
//         const tailNode = this.getNode(this.len - 1)
//         if (!tailNode) {
//             this.addAtHead(val)
//         } else {
//             tailNode.next = { val, next: null };
//             this.len++
//         }
//     }

//     addAtIndex(index: number, val: number): void {
//         if (index === 0) {
//             this.addAtHead(val)
//         } else if (index > 0 && index <= this.len) {
//             const prevNode = this.getNode(index - 1)
//             const currentNode = prevNode.next
//             prevNode.next = { val, next: currentNode }
//             this.len++
//         }
//     }

//     deleteAtIndex(index: number): void {
//         if (index > 0 && index < this.len) {
//             let prevNode = this.getNode(index - 1)
//             prevNode.next = prevNode.next.next
//             this.len--
//         } else if (index === 0) {
//             this.head = this.head.next
//             this.len--
//         }
//     }
// }

// /**
//  * Your MyLinkedList object will be instantiated and called as such:
//  * var obj = new MyLinkedList()
//  * var param_1 = obj.get(index)
//  * obj.addAtHead(val)
//  * obj.addAtTail(val)
//  * obj.addAtIndex(index,val)
//  * obj.deleteAtIndex(index)
//  */