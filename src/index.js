class Sorter {
  constructor() {
    this.array = [];
    this.comparator = undefined;
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

  bubleSort(arr) {
    let min;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          min = arr[j + 1];
          arr[j + 1] = arr[j];
          arr[j] = min;
        }
      }
    }
    return arr;
  }

  sort(indexes) {
    //push these numbers
    let arr = [];
    for (let i = 0; i < indexes.length; i++) {
      arr.push(this.array[indexes[i]]);
    }
    if (this.comparator == undefined) arr = this.bubleSort(arr);
    else arr.sort(this.comparator);
    indexes = this.bubleSort(indexes);
    for(let i=0;i<this.array.length;i++){
      for(let j=0;j<arr.length;j++){
        if (i === indexes[j]) this.array[i] = arr[j];
      }
    }
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;