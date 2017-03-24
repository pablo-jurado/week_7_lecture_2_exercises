// Review the following code. Read over the code and write detailed comments for each line of code.
// this function takes as input an Arry and a Callback function

function modify (data, callback) {
  var accumulator = []
  // for each item of our input array we will run the call back function
  // and asign the result to the accumulator
  data.forEach(function (item) {
    accumulator.push(callback(item))
  })

  return accumulator
}

function increment (num) {
  return num + 1
}

function decrement (num) {
  return num - 1
}

var numbers = [27, 68, 40, 3, 14, 74]
// create an array that will increment by 1 each item of array numbers
var incremented = modify(numbers, increment)
// create an array that will decrement by 1 each item of array numbers
var decremented = modify(numbers, decrement)

console.log(incremented)

console.log(decremented)

// This exercise is made up of several mini exercises. Each exercise will use the following array of people:
var people = [
  {
    firstName: 'Finka',
    lastName: 'Takenaka',
    age: 57
  },
  {
    firstName: 'Tiriaq',
    lastName: 'Fenstermacher',
    age: 46
  },
  {
    firstName: 'Amel',
    lastName: 'Flipse',
    age: 86
  },
  {
    firstName: 'Clara',
    lastName: 'Schwartz',
    age: 27
  },
  {
    firstName: 'Vivyan',
    lastName: 'Mah',
    age: 35
  }
]

// Use map() to get an array of first and last names.

function getFullName (obj) {
  return obj.firstName + ' ' + obj.lastName
}

var firstAndLastName = people.map(getFullName)
console.log(firstAndLastName)

// Use map() to create a new array of objects that only contain fullName
// and age properties. The fullName property should be set to the
// concatenation of the firstName and lastName properties

function getFullNameAndAge (obj) {
  return {
    fullName: obj.firstName + ' ' + obj.lastName,
    age: obj.age
  }
}

var fullNameAndAge = people.map(getFullNameAndAge)
console.log(fullNameAndAge)

// Use filter() to get an array of all people younger than 50.

function youngerThan50 (obj) {
  if (obj.age < 50) return obj
}

var peopleYounggerThan50 = people.filter(youngerThan50)
console.log('Younger than 50!', peopleYounggerThan50)

// Use reduce() to find the oldest person.
function getOldest (acc, obj) {
  if (acc.age > obj.age) {
    return acc
  } else {
    return obj
  }
}

var oldestPerson = people.reduce(getOldest, 0)
console.log('Oldest!!!!', oldestPerson)
