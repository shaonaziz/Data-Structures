class HashTable {
  constructor(size){
    this.data = new Array(size)
  }
  
  _hash(key){
    let hash =0;
    for(let i=0;i<key.length;i++){
      hash =(hash + key.charCodeAt(i)*i)%
      this.data.length;
    }
    return hash;
  }

  set(key,value){

     let address = this._hash(key);
 
     if(!this.data[address]){
      this.data[address] =[]
     }
     this.data[address].push([key,value])
     return this.data;
  }

  get(key){
    let address = this._hash(key);
    const currentBox = this.data[address];
  
    if(currentBox){
      for(let i=0;i<currentBox.length;i++){
        if(currentBox[i][0]===key){
          return currentBox[i][1]
        }
      }
    }
    return undefined
  }


  keys(){
    const keyArrays = [];
    for(let i=0;i<this.data.length;i++){
      if(this.data[i]){
        keyArrays.push(this.data[i][0][0])
      }
    }

    return keyArrays;

  }

  values(){
    const valueArrays = [];
    for(let i=0;i<this.data.length;i++){
      if(this.data[i]){
       
        valueArrays.push(this.data[i][0][1])
      }
    }
    return valueArrays;
  }

  // with hash collision
  keys1() {
    if (!this.data.length) {
      return undefined
    }
    let result = []
    // loop through all the elements
    for (let i = 0; i < this.data.length; i++) {
        // if it's not an empty memory cell
        if (this.data[i] && this.data[i].length) {
          // but also loop through all the potential collisions
          if (this.data.length > 1) {
            for (let j = 0; j < this.data[i].length; j++) {
              result.push(this.data[i][j][0])
            }
          } else {
            result.push(this.data[i][0])
          } 
        }
    }
    return result; 
  }

}

const myHashTable = new HashTable(50);
myHashTable.set('grapes',10000)
myHashTable.set('banana',40)
myHashTable.set('oranges',80)
myHashTable.set('apple',54)
myHashTable.set('drangon',50)

console.log(myHashTable.keys1())