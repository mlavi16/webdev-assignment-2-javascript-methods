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
  let filteredArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i], i, this)) {
      filteredArray.push(this[i]);
    }
  }
  return filteredArray;
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  for (let i = 0; i < this.length; i++) {
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




// -----------------------Testing Functions--------------------------------- //


// Array.prototype.equals = function (array) {
//   // if the other array is a falsy value, return
//   if (!array)
//     return false;

//   // compare lengths - can save a lot of time 
//   if (this.length != array.length) {
//     console.log(this, " == ", array, " is ", false, " [0]");
//     return false;
//   }

//   for (var i = 0, l=this.length; i < l; i++) {
//     // Check if we have nested arrays
//     if (this[i] instanceof Array && array[i] instanceof Array) {
//       // recurse into the nested arrays
//       if (!this[i].equals(array[i])) {
//         console.log(this, " == ", array, " is ", false, " [1]");
//         return false;       
//       }
//     }           
//     else if (this[i] != array[i]) { 
//       // Warning - two different object instances will never be equal: {x:20} != {x:20}
//       console.log(this, " == ", array, " is ", false, " [2]");
//       return false;   
//     }           
//   } 
//   console.log(this, " == ", array, " is ", true);      
//   return true;
// }


// // Map //
// let myArray = [0, -10, 3, 7, , ,102];
// const map1 = myArray.map(x => x * 2);
// const map2 = myArray.myMap(x => x * 2);

// const numbers = [1, 4, 9];
// const roots1 = numbers.map((num) => Math.sqrt(num));
// const roots2 = numbers.myMap((num) => Math.sqrt(num));

// // Filter //
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result1 = words.filter(word => word.length > 6);
// const result2 = words.myFilter(word => word.length > 6);
// // result1.equals(result2); // [ 'exuberant', 'destruction', 'present' ]
// const filterArray = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// function isPrime(num) {
//   for (let i = 2; num > i; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }
// // filterArray.filter(isPrime).equals(filterArray.myFilter(isPrime)) // [2, 3, 5, 7, 11, 13]



// // // Some //
// // const even = (element) => element % 2 === 0; // checks whether an element is even
// // let someArray = [];
// // console.log(someArray.some(even) == (someArray.mySome(even)));
// // someArray = [1];
// // console.log(someArray.some(even) == (someArray.mySome(even)));
// // someArray = [2];
// // console.log(someArray.some(even) == (someArray.mySome(even)));
// // someArray = [1,2,3,4,5,6];
// // console.log(someArray.some(even) == (someArray.mySome(even)));
// // someArray = [1,33,17,67];
// // console.log(someArray.some(even) == (someArray.mySome(even)));
// // someArray = [1,-2, -3, , , , -9];
// // console.log(someArray.some(even) == (someArray.mySome(even)));
// // function isBiggerThan10(element, index, array) {
// //   return element > 10;
// // }
// // console.log([2, 5, 8, 1, 4].some(isBiggerThan10) == [2, 5, 8, 1, 4].mySome(isBiggerThan10));  // false
// // console.log([12, 5, 8, 1, 4].some(isBiggerThan10) == [12, 5, 8, 1, 4].mySome(isBiggerThan10)); // true



// // Every //



// // Reduce //
// const reduceArray = [1, 2, 3, , 4, 0, -5]; // 1 + 2 + 3 + 4 + 0 - 5 = 5
// const sumWithInitial1 = reduceArray.reduce(
//   (previousValue, currentValue) => previousValue + currentValue);
// const sumWithInitial2 = reduceArray.myReduce(
//   (previousValue, currentValue) => previousValue + currentValue);
// // console.log(sumWithInitial1, sumWithInitial2, sumWithInitial1 == sumWithInitial2);


// // Includes //
// const includesArray = [1, 2, 3];
// // console.log(includesArray.includes(2), includesArray.myIncludes(2));
// // console.log(includesArray.includes(), includesArray.myIncludes());
// // console.log(includesArray.includes(true), includesArray.myIncludes(true));
// // console.log(includesArray.includes(-1), includesArray.myIncludes(-1));
// const pets = ['cat', 'dog', ,'bat'];
// // console.log(pets.includes('cat'), pets.myIncludes('cat'));
// // console.log(pets.includes('at'), pets.myIncludes('at'));


// // IndexOf and LastIndexOf//
// const beasts = ['ant', , 'bison', 'camel', 'duck', 'bison'];
// // console.log(beasts.indexOf('bison'), beasts.myIndexOf('bison')); // expected output: 2
// // console.log(beasts.lastIndexOf('bison'), beasts.myLastIndexOf('bison')); // expected output: 5
// // console.log(beasts.indexOf('giraffe'), beasts.myIndexOf('giraffe')); // expected output: -1
// // console.log(beasts.lastIndexOf('giraffe'), beasts.myLastIndexOf('giraffe')); // expected output: -1
// // console.log(beasts.indexOf('duck'), beasts.myIndexOf('duck')); // expected output: 4
// // console.log(beasts.lastIndexOf('duck'), beasts.myLastIndexOf('duck')); // expected output: 4
// const indexOfArray = [2, 9, 9];
// // console.log(indexOfArray.indexOf(2), indexOfArray.myIndexOf(2)); // 0
// // console.log(indexOfArray.lastIndexOf(2), indexOfArray.myLastIndexOf(2)); // 0
// // console.log(indexOfArray.indexOf(7), indexOfArray.myIndexOf(7)); // -1
// // console.log(indexOfArray.lastIndexOf(7), indexOfArray.myLastIndexOf(7)); // -1
// // console.log(indexOfArray.indexOf(9), indexOfArray.myIndexOf(9)); // 1
// // console.log(indexOfArray.lastIndexOf(9), indexOfArray.myLastIndexOf(9)); // 2



// // Keys //

// // simple array
// const keysArr = ['a', 'b', 'c'];
// console.log(Object.keys(keysArr), Object.myKeys(keysArr)); // console: ['0', '1', '2']
// // array-like object
// const obj1 = { 0: 'a', 1: 'b', 2: 'c' };
// const obj2 = {a: 'somestring', b: 42, c: false };
// console.log(Object.keys(obj1), Object.myKeys(obj1)); // console: ['0', '1', '2']
// console.log(Object.keys(obj2), Object.myKeys(obj2)); // console: ['a', 'b', 'c']
// // array-like object with random key ordering
// const anObj = { 100: 'a', 2: 'b', 7: 'c' };
// console.log(Object.keys(anObj), Object.myKeys(anObj)); // console: ['2', '7', '100']
// // getFoo is a property which isn't enumerable
// const myObj = Object.create({}, {
//   getFoo: {
//     value() { return this.foo; }
//   }
// });
// myObj.foo = 1;
// console.log(Object.keys(myObj), Object.myKeys(myObj)); // console: ['foo']



// Values //

// Simple array
let valsArr = ['a', 'b', 'c'];
console.log(Object.values(valsArr), Object.myValues(valsArr)); // console: ['0', '1', '2']

// Objects
let valObj = { a: 'somestring', b: 42, c: false };
console.log(Object.values(valObj), Object.myValues(valObj));// expected output: Array ["somestring", 42, false]
valObj = { foo: 'bar', baz: 42 };
console.log(Object.values(valObj), Object.myValues(valObj)); // ['bar', 42]

// Array-like object
let valArrayLikeObj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(valArrayLikeObj), Object.myValues(valArrayLikeObj)); // ['a', 'b', 'c']

// Array-like object with random key ordering
valArrayLikeObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(valArrayLikeObj), Object.myValues(valArrayLikeObj)); // ['b', 'c', 'a']

// getFoo is property which isn't enumerable
valObj = Object.create({}, { getFoo: { value() { return this.foo; } } });
valObj.foo = 'bar';
console.log(Object.values(valObj), Object.myValues(valObj)); // ['bar']

// non-object argument
console.log(Object.values('foo'), Object.myValues('foo')); // ['f', 'o', 'o']