
/*
1- Usare il metodo reduce per emulare il metodo every, esempio
[1, false, 3, undefined, 5].reduce( … ) deve ritornare false
[1, 5, 3, true].reduce( … ) deve ritornare true
*/

// reduce


// ARR1 DA TRUE DEVE DARE FALSE
const arr1 = [1, false, 3];
const arr2 = [false, null, undefined];

let result = arr1.reduce((acc, el) => {
    if (!el) return false;
    return true;
}, true);

console.log('result ese1', result);

// every
const arr3 = [true, true, true, true, true, true];
const arr4 = [true, true, true, true, true, false];

const result3 = arr3.every((el) => el);
const result4 = arr4.every((el) => el);

//console.log(result3);
//console.log(result4);







/*
Description
The every() method executes a function for each array element.

The every() method returns true if the function returns true for all elements.

The every() method returns false if the function returns false for one element.

The every() method does not execute the function for empty elements.

The every() method does not change the original array
*/

const ages = [32, 33, 19, 40];

//console.log(ages.every(checkAge));

function checkAge(age) {
  return age > 18;
}

/*
Description
The reduce() method executes a reducer function for array element.

The reduce() method returns a single value: the function's accumulated result.

The reduce() method does not execute the function for empty array elements.

The reduce() method does not change the original array.
*/

const numbers = [15.5, 2.3, 1.1, 4.7];

//document.getElementById("demo").innerHTML = numbers.reduce(getSum, 0);
//console.log(numbers.reduce(getSum, 0));

function getSum(total, num) {
  //return total + Math.round(num);
  return total + num;
}

//console.log(Boolean(undefined));

