import Node from './NodeClass.js'

export default class LinkedList {
  constructor () {
    this.head = new Node('head')
  }

  addNode(key,value) {
      if (!this.head) {
        this.head = new Node(key,value)
      }
      else {
        let nextNode = this.head
        this.head = new Node(key,value)
        this.head.next = nextNode
      }
    }

  removeNode(key) {
    let currentNode = this.head
    let previous
    while (currentNode.next && currentNode.key !== key) {
      previous = currentNode
      currentNode = currentNode.next
    }
    if (currentNode===this.head) {
      this.head = null
    }
    else {
      previous.next = currentNode.next
    }
  }

  containsNode(key) {
    let currentNode = this.head
    while (currentNode) {
      if (currentNode.key === key) {
        return true
      }
      currentNode = currentNode.next
    }
    return false
  }

  getNodeValue(key) {
    let currentNode = this.head
    while (currentNode) {
      if (currentNode.key === key) {
        return currentNode.value
      }
    }
    return undefined
  }

  iterateList(callback) {
    let currentNode = this.head
    while (currentNode) {
      callback(currentNode.key, currentNode.value)
      currentNode = currentNode.next
    }
  }

  countList() {
    let count = 0
    let currentNode = this.head
    if (!this.head) {
      return count
    }
    while (currentNode) {
      count++
      currentNode = currentNode.next
    }
    return count
  }
}
