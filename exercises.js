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
