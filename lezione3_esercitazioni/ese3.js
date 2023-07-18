/*
3- Usare il metodo reduce per emulare il metodo map, esempio
(raddoppio) [1,2,3,4].reduce( … ) deve ritornare [2,4,6,8]
*/

// dichiarazione non necessaria
//let arr = [];
//arr.push(10)

//console.log([1, 2, 3, 4]);

/*
console.log([1,2,3,4].reduce((acc,el,idx,arrO) => 
{
    if(idx = arr.length - 1){
        return arr.push(el*2);
    } else {
        if (idx === 0){
            //return arr.push(el*2);
        } else {
            return arr.push(el*2);
        }
    }
}),arr);
*/

/*
console.log([1, 2, 3, 4].reduce((acc, el, idx) => {
    console.log(acc, el, idx);
}), arr);
*/

[1,2,3,4].reduce((acc, el) => arr.push(el * 2),arr = []);
console.log(arr);








