const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function(array) {
  return array.reduce((acc, curr) => acc * curr, 1);
};

const power = function(a, b) {
	let power = a;
  for (let i = 0; i < (b-1); i++) {
    power = power * a;
  }
  return power;
};

const factorial = function(a) {
	let array = [];
  for (let i = 1; i <= a ; i++) {
    array.push(i);
  }
  return array.reduce((acc, curr) => acc * curr, 1)
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
