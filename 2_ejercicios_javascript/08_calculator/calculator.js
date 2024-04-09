const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(array) {
    if (!array.length) return 0
    let sum = array[0];
    for (let i = 1; i < array.length; i++) {
      sum += array[i]      
    } return sum
};

const multiply = function(array) {
  if (!array.length) return 0
    let sum = array[0];
    for (let i = 1; i < array.length; i++) {
      sum *= array[i]      
    } return sum
};

const power = function(num1, num2) {
	return num1 ** num2
};

const factorial = function(num) {
  let fact = 1
	for (let index = 1; index <= num; index++){
      fact= fact * index
  }
  return fact
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
