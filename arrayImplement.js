class MyArray {
  constructor() {
    this.lenght = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.lenght] = item;
    this.lenght++;
    return this.lenght;
  }
  pop() {
    delete this.data[this.lenght - 1];
    const lastItem = this.data[this.lenght - 1];
    this.lenght--;
    return lastItem;
  }

  deleteItems(index) {
    const item = this.data[index];
    this.shifItem(index);
    return item;
  }
  shifItem(index) {
    for (let i = index; i <= this.lenght - 1; i++) {
      this.data[i] = this.data[i + 1];
      delete this.data[this.lenght - 1];
      this.lenght--;
    }
  }
}

const newArray = new MyArray();
newArray.push("apple");
newArray.push("mango");
newArray.push("orange");
newArray.push("banana");
newArray.push("lichi");
newArray.push("gripe");
newArray.deleteItems(3);
console.log(newArray);
