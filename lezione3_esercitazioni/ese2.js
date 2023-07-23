
/*
2- Usare il metodo reduce per emulare il metodo some, esempio
[1,false,3].reduce( … ) deve ritornare true
[false, null, undefined].reduce( … ) deve ritornare false
*/

// se incontra anche un solo non primitivo ritorna false 
// se non inconta non primitivi ritorna true
// controllare la booleanità di null,undefined e NaN

/*
The some() method tests whether at least one element in the array 
passes the test implemented by the provided function.
It returns true if, in the array, it finds an element for which 
the provided function returns true; otherwise it returns false.
It doesn't modify the array.
*/

const arr1 = [null, false, 1];
const arr2 = [false, null, undefined];
const arr3 = [2,null, undefined,1];
const arr4 = [false, null, undefined];
const arr5 = [false, null, undefined];

let result = arr1.reduce((acc, el) => {
    /*
    if(!el) {
        acc = false;
        return acc;
    }
    */
    return true;
    
    /*
    if (typeof el === 'undefined' ||
        typeof el === 'null' ||
        typeof el === 'NaN') {
        return false;
    }
    return true;
    */
   console.log(el,acc)
}, true);

console.log(result);

/*
console.log(typeof (undefined));
console.log(typeof(null));
console.log(typeof(NaN));
*/
