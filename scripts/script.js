/* Object literal */
let student1 = {
  name: 'Alexis',
  email: 'alexis@gmail.com',
  grade101: 3.5,
  grade102: 4
}

let student2 = {
  name: 'Daniel',
  email: 'daniel@gmail.com',
  grade101: 4,
  grade102: 3
}

let student3 = {
  name: 'César',
  email: 'cesar@gmail.com',
  grade101: 4,
  grade102: 3.1
}

console.log(student1)
console.log(student1.name)
console.log(student2)
console.log(student3)

/* Dsiplay the sum of all the grades of the Unit 101 */
let sum = 0

sum = student1.grade101 + student2.grade101 + student3.grade101

console.log("Sum of all the grades of the Unit 101: " + sum)

let students = [student1, student2, student3];
console.log(students);
console.log(student2.grade101);
console.log(student3.grade102);

// Display the sum of all the grades of the Unit 101

function getSum() {
  var sum = 0;
  for (let i = 0; i < students.length; i++) {
    sum += students[i].grade101
  }
  document.write(sum)
}

getSum();