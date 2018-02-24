class Sorter {
  constructor() {
    this.array = [];
    this.compareFunction = (a, b) => (a - b);
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    indices.sort();
    var elemsToSort = indices.map(n => this.array[n]);
    elemsToSort.sort(this.compareFunction);
    for(var i = 0; i < indices.length; i++) {
      this.array[indices[i]] = elemsToSort[i];
    }
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction
  }
}

sorter = new Sorter();
sorter.add(5);

console.log(sorter.toArray(), [5]);
console.log(sorter.length, 1);
