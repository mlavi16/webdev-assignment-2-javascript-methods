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


// // MAP TEST //
// let myArray = [0, -10, 3, 7, , ,102];
// const map1 = myArray.map(x => x * 2);
// const map2 = myArray.myMap(x => x * 2);

// const numbers = [1, 4, 9];
// const roots1 = numbers.map((num) => Math.sqrt(num));
// const roots2 = numbers.myMap((num) => Math.sqrt(num));


// Filter //
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result1 = words.filter(word => word.length > 6);
const result2 = words.myFilter(word => word.length > 6);
// result1.equals(result2); // [ 'exuberant', 'destruction', 'present' ]
const filterArray = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
// filterArray.filter(isPrime).equals(filterArray.myFilter(isPrime)) // [2, 3, 5, 7, 11, 13]



// // Some //
// const even = (element) => element % 2 === 0; // checks whether an element is even
// let someArray = [];
// console.log(someArray.some(even) == (someArray.mySome(even)));
// someArray = [1];
// console.log(someArray.some(even) == (someArray.mySome(even)));
// someArray = [2];
// console.log(someArray.some(even) == (someArray.mySome(even)));
// someArray = [1,2,3,4,5,6];
// console.log(someArray.some(even) == (someArray.mySome(even)));
// someArray = [1,33,17,67];
// console.log(someArray.some(even) == (someArray.mySome(even)));
// someArray = [1,-2, -3, , , , -9];
// console.log(someArray.some(even) == (someArray.mySome(even)));
// function isBiggerThan10(element, index, array) {
//   return element > 10;
// }
// console.log([2, 5, 8, 1, 4].some(isBiggerThan10) == [2, 5, 8, 1, 4].mySome(isBiggerThan10));  // false
// console.log([12, 5, 8, 1, 4].some(isBiggerThan10) == [12, 5, 8, 1, 4].mySome(isBiggerThan10)); // true



// Every //



// Reduce //
const reduceArray = [1, 2, 3, , 4, 0, -5];
// 1 + 2 + 3 + 4
const sumWithInitial1 = reduceArray.reduce(
  (previousValue, currentValue) => previousValue + currentValue);
const sumWithInitial2 = reduceArray.myReduce(
  (previousValue, currentValue) => previousValue + currentValue);
console.log(sumWithInitial1, sumWithInitial2, sumWithInitial1 == sumWithInitial2);
// expected output: 5

