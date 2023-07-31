module.exports = function reverse (n) {

  let numbers = n.toString().split("");
  let joinNumbers = [];

  for(let i = 0; i < numbers.length; i++) {
    joinNumbers.unshift(numbers[i]);
  }

  return parseInt(joinNumbers.join(""));
}
