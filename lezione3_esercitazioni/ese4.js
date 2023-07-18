/*
4- Usare il metodo reduce per emulare il metodo filter, esempio
(filtro per pari) [1,2,3,4,5,6].reduce( … ) deve ritornare [2,4,6]
*/


console.log([1, 2, 3, 4, 5, 6]);
[1, 2, 3, 4, 5, 6].reduce((acc, el) => {
    if (!(el % 2))
        return arr.push(el);
}, arr = []);
console.log(arr);

