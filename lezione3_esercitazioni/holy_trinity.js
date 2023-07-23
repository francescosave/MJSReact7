// Holy Trinity
// funzionamento della funzione map

// log arguments 
//console.log(`number of arguments: ${process.argv[1]}` );


// Declarations
const array = [2, 55, 3];
let count_map = 0;
let count_filter = 0;
let count_reduce = 0;
const type_function = '';

function print_array() {
    console.log('****************   array ****************************');
    console.log(array);
    console.log('*****************************************************');
}

function arr_map_result() {
    console.log('****************   MAP ****************************');
    const arr_map_result = array.map(function (value, index, arr) {
        // function body
        //count_map++;
        console.log('map esecution: parameter value,index,array', value, index, arr);
        return value;
    });

    console.log('map result', arr_map_result);
    console.log('*****************************************************');
}

function arr_filter_result() {
    console.log('****************   FILTER ****************************');
    const arr_filter_result = array.filter(function (value, index, arr) {
        // function body
        //count_filter++
        console.log('filter esecution: parameter value,index,array', value, index, arr);
        return true;
    });

    console.log('filter result', arr_filter_result);
    console.log('*****************************************************');
}

function arr_reduce_result() {

    console.log('****************   REDUCE ****************************');

    const arr_reduce_result = array.reduce(function (accumulator, currentvalue, index, arr) {
        // function body
        //count_reduce++
        console.log('reduce esecution:  parameter accumulator,value,index,array', accumulator, currentvalue, index, arr);
        return currentvalue;
    }, 0);


    console.log('reduce result', arr_reduce_result);
    console.log('*****************************************************');

}

print_array();
arr_map_result();
arr_filter_result();
arr_reduce_result();