var num = 0;
var obj = new String('0');
var str = '0';

// dabble equal
console.log(true == 1);   // true
console.log(false == 0);  // true
console.log(num == str);    // true
console.log(obj == str);    // true
console.log(num == str);    // true

// triple equal
console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(true === 1);  // false
console.log(false === 0); // false
console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false


