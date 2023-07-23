// Holy Trinity
// funzionamento della funzione filter

const array = [1];
let count = 0;

const arr_result = array.filter(function (value, index, arr) {
    // function body
    count++;
    return value;

}, 0);

console.log(arr_result,count);
