import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import HashTable from '../src/HashTable.js'

chai.use(chaiChange)

describe('HashTable', () => {
  'use strict'

  it ('is a class and can be instantiated', () => {
    expect(HashTable).to.be.a('function')
  })

  context('hash()', () => {
    it('Hashes key into a numeric value for hashing.', () => {
      const myHashTable = new HashTable()
      console.log(myHashTable.hash('TheRealZeze'))
      expect(typeof(myHashTable.hash('TheRealZeze'))).to.equal('number')
      expect(myHashTable.hash('TheRealZeze')).to.equal(212)
    })
  })

  context('put()', () => {
    it('adds a key-value pair to the HashTable', () => {
      const myHashTable = new HashTable()
      myHashTable.put('yolo', 'Friday')
      console.log(myHashTable.size());
      expect(myHashTable.size()).to.equal(2)
    })
  })

  context('get()', () => {
    it('returns value associated with the given key', () => {
      const myHashTable = new HashTable()
      expect(() => HashTable.get('nothing')).to.throw(Error)
      myHashTable.put('yolo', 'Friday')
      myHashTable.put('solomanolo', 'newKicks')
      myHashTable.put('alwaysBeGrindin', 'woot')
      expect(myHashTable.get('alwaysBeGrindin')).to.equal('woot')
      expect(myHashTable.get('solomanolo')).to.equal('newKicks')
    })
  })

  context('contains()', () => {
    it('returns true if HashTable contains the key, false otherwise', () => {
      const myHashTable = new HashTable()
      myHashTable.put('yolo', 'Friday')
      myHashTable.put('solomanolo', 'newKicks')
      myHashTable.put('alwaysBeGrindin', 'woot')
      myHashTable.put('alwaysBeGrindin', 'woot')
      // console.log('zeze', this.container[hashedKey], hashedKey);
      expect(myHashTable.contains('nothing')).to.equal(false)
      expect(myHashTable.contains('solomanolo')).to.equal(true)
    })
  })

  context('iterate()', () => {
    it('takes a callback function and passes it each key and value, in sequence', () => {
      const myHashTable = new HashTable()
      expect(() => HashTable.iterate((k, v) => console.log(k))).to.throw(Error)
      myHashTable.put('yolo', 'Friday')
      myHashTable.put('solomanolo', 'newKicks')
      myHashTable.put('alwaysBeGrindin', 'woot')
      const newHashTable = new HashTable()
      myHashTable.iterate((k, v) => {
        let value = v + ' but new'
        newHashTable.put(k, value)
      })
      expect(newHashTable.get('yolo')).to.equal('Friday but new')
      expect(newHashTable.get('solomanolo')).to.equal('newKicks but new')
    })
  })

  context('remove()', () => {
    it('removes a key-value pair bey key', () => {
      const myHashTable = new HashTable()
      expect( () => myHashTable.remove('nothing') ).to.throw(Error)
      myHashTable.put('yolo', 'Friday')
      myHashTable.put('solomanolo', 'newKicks')
      myHashTable.put('alwaysBeGrindin', 'woot')
      expect(myHashTable.contains('yolo')).to.equal(true)
      myHashTable.remove('yolo')
      expect(myHashTable.contains('yolo')).to.equal(false)
    })
  })

  context('size()', () => {
    it('returns number of key-value pairs in HashTable', () => {
      const myHashTable = new HashTable()
      expect(myHashTable.size()).to.equal(0)
      myHashTable.put('one', 'Friday')
      myHashTable.put('solomanolo', 'newKicks')
      myHashTable.put('alwaysBeGrindin', 'woot')
      expect(myHashTable.size()).to.equal(3)
    })
  })
})
