//-------------------- Date fns  --------------------
// const date_fns = require("date-fns");

// const date_mdy = date_fns.format(new Date(), "MM/dd/yyyy");

// const Day = date_fns.formatDistance(
//   date_fns.subDays(new Date(), new Date().getDate()),
//   new Date(),
//   { addSuffix: true }
// );

// console.log(date_mdy);
// console.log(new Date().getDate());
// console.log(subDay);

// console.log("Hello, World!!")

// const dialog3 = `you can  sleep
// in my class.
// ${Day}`;
// console.log(dialog3);

//-------------------- Back Tick--------------------

// let firstName = "Chinnawich";
// let age = 21;

// console.log(firstName + age);

// let info = `
//    My name is ${firstName}
//    My age is ${age}
// `;
// console.log(info);

//--------------- objects -----------------------------

// ----Example 1

// const emp1 = { name: 'Chinnawich', age: 21, classification: {house: 'Gryffindor'}}
// console.log(emp1.name)
// console.log(emp1.age)
// console.log(emp1['classification'].house)

// ----Example 2

const user = {
  name: "Chinnawich",
  salary: "400000000",
  address: {
    province: "Bangkok",
    postcode: "10000",
    number: [1, 2, 3, 4, 5, 6],
  },
};

// console.log(user.address.postcode)

//---------------- Arrow Function ---------------------

// const showData = () => `${user.name}`;
// const showData2 = () => {
//   let info = "My name is";

//   return `${info} ${user.name}✨🐱`;
// };

// const showData3 = (a,b) => a + b

// console.log(showData3(4,6));

//----------Destructuring Assignment-------------------

// const product = { productName: "coffee", price: 150 };

// const { productName, price } = product;

// const { address: {postcode} } = user;

// console.log(postcode)

// console.log(`${productName} ${price}`);

// function getSentent({ subject, verd, object }) {
//   return `${subject} ${verd} ${object}`;
// }

// const o = {
//   subject: "I",
//   verd: "love",
//   object: "JavaScript",
// };

// console.log(getSentent(o))

// ------------------ Spread Operator -----------------
const obj1 = { firstName: "foo", age: 22 };
const obj2 = { firstName: "Bar", gender: "M" };

const newObj = { ...obj1, ...obj2, planet: "Zoo" };

console.log(newObj);
//Log --> Merge --> { firstName: 'Bar', age: 22, gender: 'M', planet: 'Zoo' }

//--------------------Rest Parameters------------------

// function myFunc (a,b, ...allArge) {
//     console.log(`alllArge ${allArge}`)
// }

// myFunc('one', 'two', 'three', 'four', 'five')

// Log --> alllArge three,four,five

//-------------------- Arrays Object-----------------------

const students = [
  {
    name: "John",
    age: 39,
  },
  {
    name: "Bob",
    age: 18,
  },
  {
    name: "marry",
    age: 19,
  },
];

//--------------------- loop -----------------------------
//---forEach---

// students.forEach((student,index,arr) => {
//   return console.log(`${index+1}. ${student.name}\n`);
// });



