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
      myArray.push(callbackFn(this[i], i, this));
    }
  }
  return myArray;
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
  let filteredArray = [];
  for (let i = 0; i < this.length; i++) {
    if (this[i] == undefined) continue;
    if (callbackFn(this[i], i, this)) {
      filteredArray.push(this[i]);
    }
  }
  return filteredArray;
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] == undefined) continue;
    if (callbackFn(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] == undefined) continue;
    if (!callbackFn(this[i], i, this)) {
      return false;
    }
  }
  return true;
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
  let definedValuesArray = this.myFilter(val => val != undefined);
  let prevVal = definedValuesArray[0];
  for (let i = 1; i < definedValuesArray.length; i++) {
    prevVal = callbackFn(prevVal, definedValuesArray[i], i, definedValuesArray);
  }
  return prevVal;
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  for (let el of this) {
    if (el === searchElement) {
      return true;
    }
  }
  return false;
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === searchElement) {
      return i;
    }
  }
  return -1;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  for (let i = this.length - 1; i >= 0; i--) {
    if (this[i] === searchElement) {
      return i;
    }
  }
  return -1;
};

// KEYS //
Object.myKeys = function(object) {
  let keys = [];
  for (let key in object) {
    if (Object.hasOwn(object, key)) {
      keys.push(key);
    }
  }
  return keys;
};

// VALUES //
Object.myValues = function(object) {
  let values = [];
  for (let key in object) {
    if (Object.hasOwn(object, key)) {
      values.push(object[key]);
    }
  }
  return values;
};



/*
// -----------------------Testing Functions--------------------------------- //


Array.prototype.equals = function (array) {
  // if the other array is a falsy value, return
  if (!array)
    return false;

  // compare lengths - can save a lot of time 
  if (this.length != array.length) {
    return false;
  }

  for (var i = 0, l=this.length; i < l; i++) {
    // Check if we have nested arrays
    if (this[i] instanceof Array && array[i] instanceof Array) {
      // recurse into the nested arrays
      if (!this[i].equals(array[i])) {
        return false;       
      }
    }           
    else if (this[i] != array[i]) { 
      // Warning - two different object instances will never be equal: {x:20} != {x:20}
      return false;   
    }           
  } 
  return true;
}

function printEquals(a, b) {
  console.log(a, "\t == \t", b, "\t is \t", a == b);
}

function printEqualsArray(a, b) {
  console.log(a, " == ", b, " is ", a.equals(b));
}


// Map //
console.log("----TESTING MAP FUNCTION: map() == myMap()----")
let mapTestArray = [0, -10, 3, 7, ,102];
printEqualsArray(mapTestArray.map(x => x * 2), mapTestArray.myMap(x => x * 2))
mapTestArray = [1, 4, 9];
printEqualsArray(mapTestArray.map((num) => Math.sqrt(num)), mapTestArray.myMap((num) => Math.sqrt(num)));


// Filter //
console.log("----TESTING FILTER FUNCTION: filter() == myFilter()----")
let filterTestArray = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
printEqualsArray(filterTestArray.filter(word => word.length > 6), filterTestArray.myFilter(word => word.length > 6)); // [ 'exuberant', 'destruction', 'present' ]
filterTestArray = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, , 8, 9, 10, 11, 12, 13];
function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0)
      return false;
  }
  return num > 1;
}
printEqualsArray(filterTestArray.filter(isPrime), (filterTestArray.myFilter(isPrime))); // [2, 3, 5, 7, 11, 13]


// Some //
console.log("----TESTING SOME FUNCTION: some() == mySome()----")
let even = (element) => element % 2 === 0; // checks whether an element is even
printEquals([].some(even), [].mySome(even));
printEquals([1].some(even), [1].mySome(even));
printEquals([2].some(even), [2].mySome(even));
// printEquals([2,3,4,5,6].some(even), [2,3,4,5,6].mySome(even));
// printEquals([1,33,17,67].some(even), [1,33,17,67].mySome(even));
// printEquals([1,-2, -3, , -9].some(even), [1,-2, -3, , -9].mySome(even));
// printEquals([2, 5, 8, 1, 4, -10].some(element => element > 10) , [2, 5, 8, 1, 4, -10].mySome(element => element > 10)); 
printEquals([12, 5, 8, 1, 4].some(element => element > 10) , [12, 5, 8, 1, 4].mySome(element => element > 10));


// Every //
console.log("----TESTING EVERY FUNCTION: every() == myEvery()----")
let everyTestArray = [1, 30, 39, -29, 10, -13];
printEquals(everyTestArray.every(val => val < 40), everyTestArray.myEvery(val => val < 40));
printEquals(everyTestArray.every(val => val > 0), everyTestArray.myEvery(val => val > 0));
// let isSubset = (array1, array2) => array2.every((element) => array1.includes(element));
// let myIsSubset = (array1, array2) => array2.myEvery((element) => array1.includes(element));
// printEquals(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6]), myIsSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
// printEquals(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7]), myIsSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false
printEquals([1, , 3].every((x) => x !== undefined), [1, , 3].myEvery((x) => x !== undefined)); // true
printEquals([2, , 2].every((x) => x === 2), [2, , 2].myEvery((x) => x === 2)); // true


// Reduce //
console.log("----TESTING REDUCE FUNCTION: reduce() == myReduce()----")
let reduceTestArray = [1, 3, 2, , 4, 0, -5]; // 1 + 3 + 2 + 4 + 0 - 5 = 5
printEquals(reduceTestArray.reduce((prevVal, curVal) => prevVal + curVal), reduceTestArray.myReduce((prevVal, curVal) => prevVal + curVal));
printEquals(reduceTestArray.reduce((a, b) => Math.max(a, b)), reduceTestArray.myReduce((a, b) => Math.max(a, b)));
// let reduceTestObjects = [{ x: 1 }, { x: 2 }, { x: 3 }];
// printEquals(reduceTestObjects.reduce((previousValue, currentValue) => previousValue + currentValue.x), reduceTestObjects.myReduce((previousValue, currentValue) => previousValue + currentValue.x));


// Includes //
console.log("----TESTING INCLUDES FUNCTION: includes() == myIncludes()----")
let includesTestArray = [1, 2, 3];
printEquals(includesTestArray.includes(2), includesTestArray.myIncludes(2));
// printEquals(includesTestArray.includes(-1), includesTestArray.myIncludes(-1));
// printEquals(includesTestArray.includes(), includesTestArray.myIncludes());
printEquals(includesTestArray.includes(true), includesTestArray.myIncludes(true));
includesTestArray = ['cat', 'dog', ,'bat'];
printEquals(includesTestArray.includes('cat'), includesTestArray.myIncludes('cat'));
printEquals(includesTestArray.includes('Cat'), includesTestArray.myIncludes('Cat'));


// IndexOf and LastIndexOf//
console.log("----TESTING INDEXOF FUNCTION: indexOf() == myIndexOf()----")
let indexTestArray1 = ['ant', , 'bison', 'camel', 'duck', 'bison'];
let indexTestArray2 = [2, 9, 9];
printEquals(indexTestArray1.indexOf('bison'), indexTestArray1.myIndexOf('bison')); // expected output: 2
printEquals(indexTestArray1.indexOf('giraffe'), indexTestArray1.myIndexOf('giraffe')); // expected output: -1
// printEquals(indexTestArray1.indexOf('duck'), indexTestArray1.myIndexOf('duck')); // expected output: 4
// printEquals(indexTestArray2.indexOf(2), indexTestArray2.myIndexOf(2)); // 0
// printEquals(indexTestArray2.indexOf(7), indexTestArray2.myIndexOf(7)); // -1
printEquals(indexTestArray2.indexOf(9), indexTestArray2.myIndexOf(9)); // 1

console.log("----TESTING LASTINDEXOF FUNCTION: lastIndexOf() == myLastIndexOf()----")
printEquals(indexTestArray1.lastIndexOf('bison'), indexTestArray1.myLastIndexOf('bison')); // expected output: 5
printEquals(indexTestArray1.lastIndexOf('giraffe'), indexTestArray1.myLastIndexOf('giraffe')); // expected output: -1
// printEquals(indexTestArray1.lastIndexOf('duck'), indexTestArray1.myLastIndexOf('duck')); // expected output: 4
// printEquals(indexTestArray2.lastIndexOf(2), indexTestArray2.myLastIndexOf(2)); // 0
// printEquals(indexTestArray2.lastIndexOf(7), indexTestArray2.myLastIndexOf(7)); // -1
printEquals(indexTestArray2.lastIndexOf(9), indexTestArray2.myLastIndexOf(9)); // 2


// Keys //
console.log("----TESTING KEYS FUNCTION: Object.keys() == Object.myKeys()----")
// simple array
let keysTestArr = ['a', 'b', 'c'];
console.log(Object.keys(keysTestArr), " == ", Object.myKeys(keysTestArr)); // console: ['0', '1', '2']
// object
let keysTestobj = {a: 'somestring', b: 42, c: false };
console.log(Object.keys(keysTestobj), " == ", Object.myKeys(keysTestobj)); // console: ['a', 'b', 'c']
// array-like object
keysTestobj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(keysTestobj), " == ", Object.myKeys(keysTestobj)); // console: ['0', '1', '2']
// array-like object with random key ordering
keysTestobj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(keysTestobj), " == ", Object.myKeys(keysTestobj)); // console: ['2', '7', '100']
// getFoo is a property which isn't enumerable
keysTestobj = Object.create({}, { getFoo: { value() { return this.foo; } } });
keysTestobj.foo = 1;
console.log(Object.keys(keysTestobj), " == ", Object.myKeys(keysTestobj)); // console: ['foo']


// Values //
console.log("----TESTING VALUES FUNCTION: Object.values() == Object.myValues()----")
// Simple array
let valuesTestArr = ['a', 'b', 'c'];
console.log(Object.values(valuesTestArr), " == ", Object.myValues(valuesTestArr)); // console: ['0', '1', '2']
// Objects
let valuesTestObj = { a: 'somestring', b: 42, c: false };
console.log(Object.values(valuesTestObj), " == ", Object.myValues(valuesTestObj));// expected output: Array ["somestring", 42, false]
valuesTestObj = { foo: 'bar', baz: 42 };
console.log(Object.values(valuesTestObj), " == ", Object.myValues(valuesTestObj)); // ['bar', 42]
// Array-like object
valuesTestObj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(valuesTestObj), " == ", Object.myValues(valuesTestObj)); // ['a', 'b', 'c']
// Array-like object with random key ordering
valuesTestObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(valuesTestObj), " == ", Object.myValues(valuesTestObj)); // ['b', 'c', 'a']
// getFoo is property which isn't enumerable
valuesTestObj = Object.create({}, { getFoo: { value() { return this.foo; } } });
valuesTestObj.foo = 'bar';
console.log(Object.values(valuesTestObj), " == ", Object.myValues(valuesTestObj)); // ['bar']
// non-object argument
console.log(Object.values('foo'), " == ", Object.myValues('foo')); // ['f', 'o', 'o']


*/