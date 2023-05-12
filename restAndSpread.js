/* function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }
 */

const filterOutOdds = (...arguments) => arguments.filter(num => num % 2 === 0); 


const findMin = (...args) => Math.min(...args);


const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});


const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v * 2)]





/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
    let i = Math.floor(Math.random() * items.length);
    return [...items.slice(0, i), ...items.slice(i + 1)];
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    let arr = [...array1, ...array2];
    return arr;
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}


/** Return a new object with a key removed. */

function removeKey(obj, key) {
    let newObj = { ...obj }
    delete newObj[key]
    return newObj;
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    return {...obj1, ...obj2};
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}