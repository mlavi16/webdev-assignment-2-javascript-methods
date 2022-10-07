/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// MAP //
Array.prototype.myMap = function(callbackFn) {
  let myArray = [];
  for (let i = 0; i < this.length; i++) {
    if (this[i] == undefined) {
      myArray.push(undefined);
    } else {
      // callbackFn is invoked with three arguments: 
      // the value of the element, the index of the element, and the array object being mapped.
      myArray.push(callbackFn(this[i], i, this));
    }
  }
  return myArray;
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
  // Place your code here.
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
  // Place your code here.
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  // Place your code here.
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
  // Place your code here.
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  // Place your code here.
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  // Place your code here.
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  // Place your code here.
};

// KEYS //
Object.myKeys = function(object) {
  // Place your code here.
};

// VALUES //
Object.myValues = function(object) {
  // Place your code here.
};




// -----------------------Testing Functions---------------------------------

// // MAP TEST //
// let myArray = [0, -10, 3, 7, , ,102];
// const map1 = myArray.map(x => x * 2);
// const map2 = myArray.myMap(x => x * 2);

// const numbers = [1, 4, 9];
// const roots1 = numbers.map((num) => Math.sqrt(num));
// const roots2 = numbers.myMap((num) => Math.sqrt(num));

// const kvArray = [
//   { key: 1, value: 10 },
//   { key: 2, value: 20 },
//   { key: 3, value: 30 },
// ];
// const reformattedArray1 = kvArray.map(({ key, value}) => ({ [key]: value }));
// const reformattedArray2 = kvArray.myMap(({ key, value}) => ({ [key]: value }));

// console.log(map1, map2);
// console.log(roots1, roots2);
// console.log(reformattedArray1, reformattedArray2);