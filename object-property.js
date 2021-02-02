let students = [
    {id: 12, name : 'Jogosih Chandro Bashu'},
    {id: 18, name : 'Ishsor Chandro Bidda Sagor'},
    {id: 22, name : 'Micale Modhusudhon Dottor'},
    {id: 36, name : 'Kazi nozrul Islam'}
]

let studentName = []
for (let i = 0; i < students.length; i++) {
    const element = students[i].name;
    studentName.push(element)
}
console.log(studentName);

let resultName = students.map(n => n.name)
let resultId = students.map(n => n.id)

console.log(resultName);
console.log(resultId);

let biggerId  = students.filter(n => n.id > 20).map(n => n.name)
console.log(biggerId);
