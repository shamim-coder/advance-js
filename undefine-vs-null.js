let foo;
console.log(foo);           // undefined

function add(num1, num2) {
    console.log(num1 + num2);
}
let num = add(15, 15);      // 30
console.log(num);           // undefined


function doSomething(x, y) {
    console.log(y);
}
doSomething(32);            // undefined


const obj = { name: 'Shamim Reza', age: 29 }

console.log(obj.phone);     // undefined

const friends = ['Byomkesh Bakshi', 'Feluda', 'Sherlock Holmes', 'Kiriti Roy']

console.log(friends[5]);    // undefined


// null = not existing 

