class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  


function removeDuplicatesFromLinkedList(linkedList) {
      let currentNode = linkedList
    while(currentNode !== null) {
      nextNode = currentNode.next
      while (nextNode !== null && nextNode.value == currentNode.value) {
        nextNode = nextNode.next
      }
      currentNode.next = nextNode
      currentNode = nextNode
    }
    return linkedList;
  }
  