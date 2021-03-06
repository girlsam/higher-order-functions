//First Exercise
//Function needs to evaluate an array and return whether it contains numbers greater than 10
//any([8, 9, 10, 11], greaterThan10)
//hint: greaterThan10 is a callback
var array1 = [7, 8, 9, 10, 11];
var array2 = [1, 2, 3, 4];
function greaterThan10(array) {
  array.forEach(function(number) {
    if (number > 10) {
      return true;
    } else {
      return false;
    }
  });
}

function any(array, callBackFn) {
  console.log(array);
  console.log(callBackFn);
  return callBackFn(array);
}
console.log(any(array1, greaterThan10));
console.log(any(array2, greaterThan10));

//Second Exercise
//Function that returns the string 'surpise!'
//surprise()()
//hint: return a Function
function surprise() {
    return function() {
      return 'surprise!';
    };
  }
// console.log(surprise()());

//Third Exercise
//iterate through an array and return odd numbers in the array
//filter([1, 2, 3, 4], onlyOdd)
//hint: onlyOdd is a callback
var arrayOfNums = [1, 2, 3, 4, 8, 3, 4, 6, 9, 0, 11, 23];
function returnOdd(array) {
  var newArrOfOdds = [];
  for (var i=0; i < array.length; i++) {
    if (array[i] % 2 > 0) {
      newArrOfOdds.push(array[i]);
    }
  }
  return newArrOfOdds;
}
function filter(array, callBackFn) {
  var onlyOddArray = [];
  return onlyOddArray = callBackFn(array);
}

//console.log(filter(arrayOfNums, returnOdd));


//Fourth Exercise
//Add together two numbers
//sumTwoNumbers(3)(9)
//hint: return a Function
function sumTwoNumbers(num1) {
  return function(num2) {
    return num1 + num2;
  };
}
// console.log(sumTwoNumbers(2)(4));
// console.log(sumTwoNumbers(12)(43));
// console.log(sumTwoNumbers('dog')(0));
