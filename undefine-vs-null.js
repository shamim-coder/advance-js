let foo;
console.log(foo);  // undefined

function add(num1, num2){
    console.log(num1 + num2); 
}
let num = add(15);      // 15 undefined
console.log(num);       // undefined


function add(num3, num4){
    console.log(num3, num4);     
}
let result = add(12);   // 12 undefined
console.log(result);    // undefined


const obj = {name: 'Shamim Reza', age: 29}
console.log(obj.phone);  // undefined

const friends = ['Byomkesh Bakshi', 'Feluda', 'Sherlock Holmes', 'Kiriti Roy']
console.log(friends[5]);  // undefined


// null = not existing 