// lezione 1 masterclass react 7

// le variabili si dischiarano con le 
// keyword const e let 
// var è obsoleto non si usa piu

// global environment
// scope della variabile user
let user = 'poldo';
console.log(user)


function outer(){
// local enviroment della funzione outer
    let user = 'pippo';
    
    function inner() {
        // local enviroment della funzione inner
        let user = 'luca'
        console.log(user);
    }
    inner();
}


console.log(`1.undefined:  ${undefined} -  Tipo:  ${typeof undefined}`);
console.log(`2.null     :  ${null}      -  Tipo:  ${typeof null}`);
console.log(`3.NaN      :  ${NaN}       -  Tipo:  ${typeof NaN}`);

console.log(NaN === NaN);