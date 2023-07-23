
// Holy Trinity
// funzionamento della funzione reduce

const array = [1, 3];

const arr_reduce_result = array.reduce(function (accumulator, currvalue, idx, arr) {
    // function body
    console.log(accumulator,currvalue,idx,arr);
    return undefined;
},0);


console.log('array' , array);
console.log(arr_reduce_result);

