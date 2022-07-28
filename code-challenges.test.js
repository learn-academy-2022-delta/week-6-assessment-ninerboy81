// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]

describe ("capitalize", () => {
  it("should capitalize the name", () => {
    expect(capitalize(people)).toEqual([
      "Ford Prefect is a hitchhiker",
      "Zaphod Beeblebrox is president of the galaxy",
      "Arthur Dent is a radio employee"
    ]);
  }
  )
}
)


// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// ReferenceError: capitalize is not defined


// b) Create the function that makes the test pass.

// pseudo code:
// 1. create a function that takes in an array of objects
// 2. use a .map method to iterate through the array
// 3. create a variable called name and use .split to split the name into first and last name
// 4. create a variable called firstName and use .charAt to get the first letter of the first name
// 5. create a variable called lastName and use .charAt to get the first letter of the last name
// 6. return the string


const capitalize = (people) => {
  return people.map(person => {
    var name = person.name.split(" ");
    var firstName = name[0].charAt(0).toUpperCase() + name[0].slice(1);
    var lastName = name[1].charAt(0).toUpperCase() + name[1].slice(1);
    return `${firstName} ${lastName} is ${person.occupation}`;
  }
  )
}



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

describe ("remainder", () => {
  it("should return the remainder of the number", () => {
    expect(remainder(hodgepodge1)).toEqual([ 2, 0, -1, 0 ]);
    expect(remainder(hodgepodge2)).toEqual([ 2, 1, -1 ]);
  }
  )
}
)

// ReferenceError: remainder is not defined

// b) Create the function that makes the test pass.


// pseudo code:
// 1. create a function that takes in a mixed data array
// 2. use a .filter method to iterate through the array
// 3. create a variable called value and use .typeof to get the type of the value
// 4. create a variable called remainder and use .% to get the remainder of the value divided by 3
// 5. return the remainder



const remainder = (array) => {
  return array.filter(value => typeof value === "number").map(value => value % 3);
}



// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe ("cubeAndSum", () => {
  it("should return the sum of the cubes", () => {
    expect(cubeAndSum(cubeAndSum1)).toEqual(99);
    expect(cubeAndSum(cubeAndSum2)).toEqual(1125);
  }
  )
}
)

// ReferenceError: cubeAndSum is not defined

// b) Create the function that makes the test pass.

// pseudo code:
// 1. create a function that takes in an array of numbers
// 2. use a .map method to iterate through the array
// 3. create a variable called value and use .** to get the value cubed
// 4. return the sum of the cubes
  

const cubeAndSum = (array) => {
  return array.map(value => value ** 3).reduce((a, b) => a + b);
}