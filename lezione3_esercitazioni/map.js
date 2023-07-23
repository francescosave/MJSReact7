// Holy Trinity
// funzionamento della funzione map

console.log(`number of arguments: ${process.argv[1]}` );

const array = [1];
let count = 0;

const arr_result = array.map(function (value, index, arr) 
{
// function body
count++;
//return [1]; 
}, 0);


console.log(arr_result,count);
