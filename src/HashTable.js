import LinkedList from './LinkedList.js'
import Node from './NodeClass.js'

export default class HashTable {
  constructor () {
    this.container = new Array(293)
  }

  put(key,value) {
    let hashedKey = this.hash(key)
    if(!this.container[hashedKey]) {
      this.container[hashedKey] = new LinkedList()
    }
    this.container[hashedKey].addNode(key,value)
    console.log(hashedKey);
  }

  get(key) {
    let hashedKey = this.hash(key)
    return this.container[hashedKey].getNodeValue(key)
  }

  contains(key) {
    let hashedKey = this.hash(key)
    console.log('yolo', this.hash('two'));
    return this.container[hashedKey].containsNode(key)
  }

  iterate(callback) {
    this.container.forEach( element => element.iterateList(callback) )
  }

  remove(key) {
    let hashedKey = this.hash(key)
    this.container[hashedKey].removeNode(key)
  }

  size() {
    return this.container.reduce( (acc,element) => { return acc += element.countList() }, 0)
  }

  hash(key) {
    let hashString = key.toString().split('')
    let hashKey = hashString.reduce( (acc,element) => { return acc += element.charCodeAt(0) }, 0) % 293
    return hashKey
  }

}
