//First Exercise
//Function needs to evaluate an array and return whether it contains numbers great than 10
//any([8, 9, 10, 11], greaterThan10)
//hint: greaterThan10 is a callback

//Second Exercise
//Function that returns the string 'surpise!'
//surprise()()
//hint: return a Function
function surprise() {
    return function() {
      return 'surprise!';
    };
  }
console.log(surprise()());

//Third Exercise
//iterate through an array and return odd numbers in the array
//filter([1, 2, 3, 4], onlyOdd)
//hint: onlyOdd is a callback

//Fourth Exercise
//Add together two numbers
//sumTwoNumbers(3)(9)
//hint: return a Function
