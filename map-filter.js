let friendsAges = [12,13,17,19,5,24]
let friendsName = ['Byomkesh', 'Bakshi', 'Feluda', 'Sherlock', 'Holmes', 'Kiriti', 'Roy']

// let square = () => {
//     console.log('hello world');
// }
// square()

const mapResult = friendsAges.map(element => element * 2)
console.log(mapResult);


const filterResult = friendsName.filter(element => element.length < 7)
console.log(filterResult);

const findResult = friendsName.find(element => element == 'Sherlock')
console.log(findResult);

/* callback is invoked with three arguments: the value of the element, the index of the element, and the array object being mapped. */